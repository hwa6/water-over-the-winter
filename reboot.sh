#!/bin/bash
echo 'Checking for potential update'
if git status; then
    echo 'Update needed. Rebooting.'
fi