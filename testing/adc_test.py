#!/usr/bin/env python

import busio
import digitalio
import board
import adafruit_mcp3xxx.mcp3008 as MCP
from adafruit_mcp3xxx.analog_in import AnalogIn

def read(sensor_id):

    # create the spi bus
    spi = busio.SPI(clock=board.SCK, MISO=board.MISO, MOSI=board.MOSI)

    # create the cs (chip select)
    cs = digitalio.DigitalInOut(board.D25)

    # create the mcp object
    mcp = MCP.MCP3008(spi, cs)

    if sensor_id == 1:    
        # create an analog input channel on pin 0
        chan = AnalogIn(mcp, MCP.P0)
    elif sensor_id == 2:
        # create an analog input channel on pin 0
        chan = AnalogIn(mcp, MCP.P1)
    elif sensor_id == 3:
        # create an analog input channel on pin 0
        chan = AnalogIn(mcp, MCP.P2)
    elif sensor_id == 4:
        # create an analog input channel on pin 0
        chan = AnalogIn(mcp, MCP.P3)
    else:
        print('Invalid sensor number provided.')

    print('Raw ADC Value: ', chan.value)
    print('ADC Voltage: ' + str(chan.voltage) + 'V')
    high = 2.8
    low = 1.7
    adjusted_val = (chan.voltage-low) / (high-low) * 100
    normalized_val = 100 - abs(adjusted_val)
    if(normalized_val < 0):
        normalized_val = 0.00
    if(normalized_val >100):
        normalized_val = 100.00
    if(chan.voltage<1):
        print('Error. Are you sure sensor is connected properly?')
    else:
        print(normalized_val)
if __name__ == "__main__":
    read(1)
    read(2)
    read(3)
    read(4)