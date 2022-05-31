#!/usr/bin/env python

from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()

MONGODB_URI = (os.environ['MONGODB_URI'])
client = MongoClient(MONGODB_URI)
db=client.wateroverthewinter

for i in range (0,4):
    plant = {
        'id' : i,
        'threshold' : -50,
        "moisture_level" : 1000,
        "in_use" : True 
    }
    result = db.plants.insert_one(plant)
    print('Created plant with id {0}. Mongo id is {1}'.format(i, result.inserted_id))
print("Initialized database with 4 plants.")