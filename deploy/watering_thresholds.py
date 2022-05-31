#!/usr/bin/env python
##This file will be responsible for using HTTP GET to get the thresholds for each plant
##The front end application allows the user to update when they want the plant to be watered, this ensures our main loop is updated to the latest change 

from pymongo import MongoClient
from pprint import pprint

import os
from dotenv import load_dotenv
load_dotenv()

MONGODB_URI = (os.environ['MONGODB_URI'])

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient(MONGODB_URI)
db=client.wateroverthewinter

def get():
    thresholds = [0]*4;
    for i in range(0,4):
        result = db.plants.find_one({'id': i})
        thresholds[i] = result.get('threshold')
    return thresholds
