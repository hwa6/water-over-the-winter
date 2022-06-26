#!/bin/bash
echo 'Checking for potential update...'
if git status -sb | grep 'behind'; then
    echo 'Update needed. Rebooting.'
    #sudo reboot
else 
    echo 'No update detected.'
fi