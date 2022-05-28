#!/usr/bin/env python
import RPi.GPIO as GPIO
import time

pin = 11

print("Inside file")

GPIO.setmode(GPIO.BOARD)

GPIO.setup(pin, GPIO.OUT, initial=GPIO.HIGH)

print("Beginning program")
write_val = GPIO.LOW

while True:
    time.sleep(1)
    GPIO.output(pin, write_val)
    print("Outputting {} to pin {}".format(write_val, pin))
    write_val ^= GPIO.HIGH

