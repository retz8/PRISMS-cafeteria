#!/usr/bin/env python3

import os
import sys
import json
import crontab
import logging
import datetime

import runningAI
import sending_data.sendData


meal_end_time = {
    "breakfast": datetime.time(hour=7, minute=55),
    "brunch": datetime.time(hour=13, minute=0),
    "monday_lunch": datetime.time(hour=13, minute=0),
    "lunch": datetime.time(hour=12, minute=25),
    "dinner": datetime.time(hour=18, minute=30),
}


def main():
    # feel free to change this code to test by yourself
    # call runningAI during meal time

    if "--cwd" in sys.argv:
        try:
            os.chdir(sys.argv[sys.argv.index("--cwd") + 1])
        except IndexError:
            print("No cwd specified")
            return

    if "--run" not in sys.argv:
        with open("counter.txt", "w") as f:
            f.write("0")

        with open("data.json", "w") as f:
            json.dump({}, f)

        # set up cron jobs to run this script at meal times
        with crontab.CronTab(user="root") as cron:
            breakfast = cron.new(
                command=f"python3 {__file__} --run breakfast --cwd {os.getcwd()}"
            )
            breakfast.dow.on("MON", "TUE", "WED", "THU", "FRI")
            breakfast.hour.on(7)
            breakfast.minute.on(0)

            brunch = cron.new(
                command=f"python3 {__file__} --run brunch --cwd {os.getcwd()}"
            )
            brunch.dow.on("SAT", "SUN")
            brunch.hour.on(10)
            brunch.minute.on(30)

            monday_lunch = cron.new(
                command=f"python3 {__file__} --run monday_lunch --cwd {os.getcwd()}"
            )
            monday_lunch.dow.on("MON")
            monday_lunch.hour.on(11)
            monday_lunch.minute.on(30)

            lunch = cron.new(
                command=f"python3 {__file__} --run lunch --cwd {os.getcwd()}"
            )
            lunch.dow.on("TUE", "WED", "THU", "FRI")
            lunch.hour.on(11)
            lunch.minute.on(20)

            dinner = cron.new(
                command=f"python3 {__file__} --run dinner --cwd {os.getcwd()}"
            )
            dinner.hour.on(17)
            dinner.minute.on(30)

        print("Schedule set successfully")
        return

    logging.basicConfig(
        filename="main.log",
        level=logging.DEBUG,
        format="[%(asctime)s] (%(levelname)s) %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )

    try:
        meal = sys.argv[sys.argv.index("--run") + 1]
    except IndexError:
        print("No meal name specified")
        return

    if meal not in meal_end_time:
        print("Invalid meal name")
        return

    # ------------------
    # Data measurement logic + call runningAI.py
    # ------------------

    logging.info(f"<{meal}> AI started")
    start_time = datetime.datetime.now()

    results = runningAI.run_till(meal_end_time[meal])

    end_time = datetime.datetime.now()
    logging.info(f"<{meal}> AI finished running")
    logging.debug(f"results={results}")

    # ------------------
    # call sendData.py with data received from runningAI.py
    # ------------------

    logging.info(f"<{meal}> Uploading data")

    with open("counter.txt", "r") as f:
        counter = int(f.read())
    logging.debug(f"counter={counter}")

    # format data as a dictionary to be JSON-serialized by firebase_admin
    data = {
        "date": start_time.strftime("%Y-%m-%d"),
        "start": start_time,
        "end": end_time,
        "type": meal,
        "number": ", ".join(results),
        "total": sum(results),
    }
    logging.debug(f"data={data}")

    # save a copy of the data locally
    with open("data.json", "r") as f:
        data_json = json.load(f)
    data_json.update({str(counter): data})
    with open("data.json", "w") as f:
        json.dump(data_json, f)

    try:
        response = sending_data.sendData.run(counter, data)
    except Exception as e:
        logging.exception(e)
    finally:
        logging.info(f"<{meal}> {response}")

    with open("counter.txt", "w") as f:
        f.write(counter + 1)


if __name__ == "__main__":
    main()
