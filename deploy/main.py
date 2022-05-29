#!/usr/bin/env python
import RPi.GPIO as GPIO
import time

#Threshold moisture value
threshold = 50

##Configuring board numbering scheme
GPIO.setmode(GPIO.BOARD)

##Assiging pin values

##Pin for water pump
pump_pin = 11

##Pins for moisture sensors
moisture_pin_A = -1
moisture_pin_B = -2
moisture_pin_C = -3
moisture_pin_D = -4
moisture_pins = [-1,-2,-3,-4]

#Pins for solenoid valves
valve_pin_A = -5
valve_pin_B = -6
valve_pin_C = -7
valve_pin_D = -8
valve_pins = [-5,-6,-7,-8]

##Configuring GPIO pin types

##Water pump is output
GPIO.setup(pump_pin, GPIO.OUT, initial=GPIO.LOW)

##Moisture sensors are inputs
GPIO.setup(moisture_pin_A, GPIO.IN)
GPIO.setup(moisture_pin_B, GPIO.IN)
GPIO.setup(moisture_pin_C, GPIO.IN)
GPIO.setup(moisture_pin_D, GPIO.IN)

##Solenoid valves are outputs
GPIO.setup(valve_pin_A, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(valve_pin_B, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(valve_pin_C, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(valve_pin_D, GPIO.OUT, initial=GPIO.LOW)

#main loop
while True:
    moisture_readings = [4]
    for i in range (0,4):
        moisture_readings[i] = GPIO.input((moisture_pins[i]))
    ##moistureReadings[0] = GPIO.input(moisture_pin_A)
    ##moistureReadings[1] = GPIO.input(moisture_pin_B)
    ##moistureReadings[2] = GPIO.input(moisture_pin_C)
    ##moistureReadings[3] = GPIO.input(moisture_pin_D)
    for i in range (0,4):
        if(moisture_readings[i]<threshold):
            GPIO.output(valve_pins[i], GPIO.HIGH)
    time.sleep(180)
