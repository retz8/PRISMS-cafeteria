import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from dotenv import load_dotenv
import os
import json

def run(data):
    load_dotenv()
    URL = os.getenv("FIREBASE_REALTIME_DATABASE_URL") 
    with open("keys.json") as f:
        SECRET = json.load(f)

    ### Firebase Connection
    cred = credentials.Certificate(SECRET)
    firebase_admin.initialize_app(cred, {
        "databaseURL": URL
    })

    ref = db.reference("/")
    data = list(data)
    ref.set({
        "data": data
    })
    print("sent data")