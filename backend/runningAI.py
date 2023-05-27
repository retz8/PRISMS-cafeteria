# <runningAI.py>
# - measurement until end_time
# - run base model and pass previous & current frame's detection results
# - call algorithm.py and process return value to an array (number)
import datetime
from datetime import timedelta
import cv2
import torch

import algorithm

time_interval_min = 5

class AI:
    def __init__(self):
        # Load base AI Model (yolov5s)
        self.model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True).autoshape()
        # Set device
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

        self.cap = cv2.VideoCapture(0)
        # 640 * 480
        self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
        self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

    def run_till(self, end_time):
        '''
        end_time : ending time of measurement
        ''' 
        # return value: array of number of people in each interval
        ret = [] 

        # number of people in each interval
        interval_people = 0
        # handle interval
        start_time = datetime.datetime.now()
        next_count_time = start_time + timedelta(minutes=5)
        
        # previous frame's detection results
        prev_results = None

        while datetime.datetime.now().time() < end_time:
            # Capture a frame from the camera
            ret, frame = self.cap.read()

            if not ret:
                break

            img = torch.from_numpy(frame).to(self.device)
            results = self.model(img)

            # return change in people passed by in current frame
            processed_results = algorithm.process(prev_results, results, [640, 480], 50, 3)
            frame_people = len(processed_results)
            interval_people = interval_people + frame_people

            prev_results = results

            # Check if it's time to call count_people()
            current_time = datetime.datetime.now()
            if current_time >= next_count_time:
                ret.append(interval_people)
                next_count_time += timedelta(minutes=time_interval_min)

                interval_people = 0
            
            cv2.waitKey(1)

        self.cap.release()
        return ret


