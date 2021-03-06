#!/usr/bin/env python
##This file will be responsible for reading the desired watering frequency from the database

from pymongo import MongoClient

import os
from dotenv import load_dotenv
load_dotenv()

MONGODB_URI = (os.environ['MONGODB_URI'])

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient(MONGODB_URI)
db=client.wateroverthewinter
result = db.config.find_one()

def frequency():
    print('Frequency is every {0} minutes.'.format(result.get('frequency')))
    return result.get('frequency')

def duration():
    print('Duration is {0} seconds.'.format(result.get('duration')))
    return result.get('duration')