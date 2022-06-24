#!/bin/bash

echo "Pulling latest software."
git pull
echo "Executing..."
python3 ./testing/hardware/gpio_test.py
