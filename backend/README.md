# Cafeteria backend

Scheduled AI detection and data uploading during meals in Python. To be deployed on a Jetson connected to a webcam.

### Setup

1. Install dependencies

    ```bash
    python3 -m pip install -r requirements.txt
    ```

1. Run the setup code

    ```bash
    sudo python3 main.py
    ```
    > **Warning**
    > `sudo` is required to set up crontab as root

2. Done! Make sure the Jetson is powered on and connected to the internet during meals.

### Notes

- We used the [crontab](https://pypi.org/project/python-crontab/) library to run the code automatically at meal times. `cron` is a Unix utility that allows you to schedule jobs to run at specific times. The crontab library allows us to edit the cron table from Python.
    - `cron` has an advantage over Python libraries like [schedule](https://pypi.org/project/schedule/) in that it runs at the system level, allowing it to continue running even after a reboot without requiring manual intervention.
- The `main.py` script is run once without the `--run` argument to set up `crontab`. It adds jobs that run the `main.py` script at specified meal times with the respective meal type as an argument.
- A counter is used to keep track of the index to upload to in Firebase. It is stored in `counter.txt` to persist across reboots.
- Besides uploading to Firebase, the script also saves the data in the local `data.json` file. This is to ensure that data is not lost if the internet connection is lost during a meal.
