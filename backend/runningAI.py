# <runningAI.py>
# 1) initialize base model (23.04.05~ yolo v8)
# 2) read image using camera
# 3) call algorithm.py to process frame/image/video (pass camera input as a parameter to model)
# 4) read return value (# of people) from model.py and return that value

# following is a sample code of yolov5
# this code is just an example! feel free to change!

# feel free to change format or use mock data to test the code

import cv2
import torch
import algorithm

class YoloV5:
    def __init__(self):
        # Load YOLOv5 model
        self.model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True).autoshape()  # or yolov5m, yolov5l, yolov5x, etc.

        # Set device to run the model on the Jetson Nano's GPU
        self.device = torch.device('cuda')

        # Initialize the camera
        self.cap = cv2.VideoCapture(0)
        self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
        self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

    def run(self):
        totalPeople = 0
        # Start capturing frames from the camera
        while True:
            # Capture a frame from the camera
            ret, frame = self.cap.read()

            # Check if frame is captured successfully
            if not ret:
                break

            # Preprocess the frame
            img = torch.from_numpy(frame).to(self.device)

            # Run the YOLOv5 model on the frame
            results = self.model(img, size=640)

            # Run additional algorithm 
            number = algorithm.process(results, img)
            # Update number of people eating in each frame
            total += number

            # Draw bounding boxes around detected objects
            results.render()

            # Display the processed frame
            cv2.imshow('YOLOv5', results.img)

            # Wait for key press to exit
            if cv2.waitKey(1) == ord('q'):
                break

        # Release the camera and close all windows
        self.cap.release()
        cv2.destroyAllWindows()

        # Return total number of people eating in one meal
        return total
