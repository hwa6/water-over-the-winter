#!/usr/bin/env python
import RPi.GPIO as GPIO
import time
import moisture_levels
import watering_thresholds

#Threshold moisture value
threshold = 50

##Configuring board numbering scheme
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)


##Assiging pin values

##Pin for water pump
pump_pin = 29

##Pins for moisture sensors
moisture_pin_A = 31
moisture_pin_B = 33
moisture_pin_C = 35
moisture_pin_D = 37
moisture_pins = [31,33,35,37]

#Pins for solenoid valves
valve_pin_A = 32
valve_pin_B = 36
valve_pin_C = 38
valve_pin_D = 40
valve_pins = [32,36,38,40]

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
    moisture_readings = [0] * 4
    thresholds = [0] * 4

    print('Reading from moisture sensors')
    for i in range (0,4):
        moisture_readings[i] = GPIO.input((moisture_pins[i]))
    print(moisture_readings)
    print('Updating database with sensor readings')
    moisture_levels.update(moisture_readings)
    print("Reading thresholds from database")
    thresholds = watering_thresholds.get()
    print(thresholds)
    print("Determining if water dispensation is neccesary")
    for i in range (0,4):
        if(moisture_readings[i]<thresholds[i]):
            print('Watering plant {0}'.format(i+1))
            GPIO.output(valve_pins[i], GPIO.HIGH)
    time.sleep(180)
