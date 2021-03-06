#!/usr/bin/env python

from pymongo import MongoClient
from pprint import pprint

import os
from dotenv import load_dotenv
load_dotenv()

MONGODB_URI = (os.environ['MONGODB_URI'])

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient(MONGODB_URI)
db=client.wateroverthewinter
result = db.plants.find_one({'id': 0})
pprint(result)

db.plants.update_one({'id': 0}, {'$set':{'moisture_level':500}})
result = db.plants.find_one({'id': 0})
print(result.get('moisture_level'))

db.plants.update_one({'id': 0}, {'$set':{'moisture_level':1000}})