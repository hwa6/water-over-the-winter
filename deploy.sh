#!/bin/bash
echo "Pulling latest software."
cd water-over-the-winter
git pull
echo "Executing..."
python3 ./testing/hardware/gpio_test.py
