#!/usr/bin/env python

from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()
import datetime

MONGODB_URI = (os.environ['MONGODB_URI'])
client = MongoClient(MONGODB_URI)
db=client.wateroverthewinter

for i in range (0,10):
    log = {
        'message' : "Watered plant " + str(i),
        'date' : datetime.datetime.utcnow(),
    }
    result = db.logs.insert_one(log)
print("Created 10 dummy logs.")