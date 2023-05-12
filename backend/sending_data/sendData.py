import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from dotenv import load_dotenv
import os
from typing import List
import json
import time

# Firebase Connection
load_dotenv()
URL = os.getenv("FIREBASE_REALTIME_DATABASE_URL") 
with open("keys.json") as f:
    SECRET = json.load(f)

cred = credentials.Certificate(SECRET)
firebase_admin.initialize_app(cred, {
    "databaseURL": URL
})
assert cred != None, "Firebase credentials are not initialized."

def run(counter, data):
    try:
        assert type(counter) == int, "Counter must be an integer"
        assert type(data) == dict, "Data must be a dictionary/map"

        ref = db.reference("/")
        child_ref = ref.child(str(counter))
        previous_data = child_ref.get()
        
        child_ref.set(data)
        
        if previous_data is not None:
            return (data, f"Sent to Firebase! [Overrode data point {counter}]")
        else:
            return (data, f"Sent to Firebase! [New data point {counter}]")
    except Exception as e:
        return (data, f"ERROR: Failed to send data to Firebase | {e}")

