#!/usr/bin/env python
##This file will be responsible for logging which plants were watered

import datetime
from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()

MONGODB_URI = (os.environ['MONGODB_URI'])
client = MongoClient(MONGODB_URI)
db=client.wateroverthewinter

def log(logs):
    count = len(logs)
    message = ''
    if(count == 4):
        message = 'Watered all plants'
    elif(count == 3):
        message = 'Watered plants {0}, {1}, and {2}'.format(logs[0]+1,logs[1]+1,logs[2]+1)
    elif(count == 2):
        message = 'Watered plants {0} and {1}'.format(logs[0]+1,logs[1]+1)
    else:
        message = 'Watered plant {0}'.format(logs[0]+1)
    log = {
        'message' : message, 
        "date": datetime.datetime.utcnow()
    }
    result = db.logs.insert_one(log)
    print('Created log with Mongo id {0}. Entering hibernation'.format(result.inserted_id))
    
