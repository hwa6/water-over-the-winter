#!/bin/bash
echo "Pulling latest software."
cd home/pi/water-over-the-winter
git pull
echo "Executing..."
python3 ./deploy/main.py
