# <algorithm.py> additional algorithm for AI model
# 1) receive detection result using base model & frame
# 2) add additional algorithm to improve accuracy and acheive our goal of counting # of ppl eating each meal
# 3) return updated number of ppl 

# for testing, feel free to change to funciton function like
# def process(self):
# then, define results or img by your own mock data
# or you can change the format by yourself to test


import cv2
import torch

def process(self, results, img):
    # results: object detection result by base AI model
    # img: current frame

    print("Hello World")

    # do something

    # return updated number of ppl eating (or smt like +1, -2)
    return number

