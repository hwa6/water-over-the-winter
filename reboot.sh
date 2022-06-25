#!/bin/bash
echo 'Checking for potential update...'
if git status; then
    echo 'Update needed. Rebooting.'
else 
    echo 'No update detected.'
fi