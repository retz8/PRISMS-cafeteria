import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from dotenv import load_dotenv
import os
from typing import List
import json

def run(data) -> tuple[List[int], str]:
    load_dotenv()
    URL = os.getenv("FIREBASE_REALTIME_DATABASE_URL") 
    with open("keys.json") as f:
        SECRET = json.load(f)

    ### Firebase Connection
    try:
        cred = credentials.Certificate(SECRET)
        firebase_admin.initialize_app(cred, {
            "databaseURL": URL
        })
        assert cred != None, "Firebase credentials are not initialized."

        ref = db.reference("/")
        data = list(data)
        ref.set({
            "data": data
        })
        return (data, "SENT DATA TO FIREBASE")
    except:
        return (data, "ERROR SENDING DATA TO FIREBASE")
