#!/usr/bin/env python
import RPi.GPIO as GPIO
import time
import moisture_levels
import watering_thresholds
import logs

#Duration of watering burst
interval = 1

##Configuring board numbering scheme
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)

#Assiging pin values
#Pins for water pumps
pump_pin_A = 32
pump_pin_B = 36
pump_pin_C = 38
pump_pin_D = 40
pump_pins = [32,36,38,40]

#Configuring GPIO pin types
#Water pumps are outputs
GPIO.setup(pump_pin_A, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(pump_pin_B, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(pump_pin_C, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(pump_pin_D, GPIO.OUT, initial=GPIO.LOW)

#main loop
while True:
    moisture_readings = [0] * 4
    thresholds = [0] * 4
    log_needed = False
    watered_plants = []

    print('Reading from moisture sensors')
    for i in range (0,4):
        moisture_readings[i] = sensors.read(i)
    print(moisture_readings)
    print('Updating database with sensor readings')
    moisture_levels.update(moisture_readings)
    print("Reading thresholds from database")
    thresholds = watering_thresholds.get()
    print(thresholds)
    print("Determining if water dispensation is neccesary")
    #moisture_readings = [48 , 53, 52, 50]
    #thresholds = [60, 40, 40, 40]
    for i in range (0,4):
        if(moisture_readings[i]<thresholds[i]):
            log_needed = True
            watered_plants.append(i)
            print('Watering plant {0}'.format(i+1))
            GPIO.output(pump_pins[i], GPIO.HIGH)
            time.sleep(interval)
            GPIO.output(pump_pins[i], GPIO.LOW)
    if(log_needed):
        logs.log(watered_plants)
    else:
        print("No watering neccesary. Entering hibernation")
    time.sleep(180)
