#!/usr/bin/env python
##This file will be responsible for updating the front end application with the latest moisture levels from the soil sensors

from pymongo import MongoClient
from pprint import pprint

import os
from dotenv import load_dotenv
load_dotenv()

MONGODB_URI = (os.environ['MONGODB_URI'])

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient(MONGODB_URI)
db=client.wateroverthewinter

def update(readings):
    status = True
    for i in range(0,4):
        result = db.plants.update_one({'id': i}, {'$set':{'moisture_level':readings[i]}})
        if(result.matched_count <= 0):
            status = False
    if(status == True):
        print("Update Succesful")
    else:
        print("Failure on Attempted Update")
        

