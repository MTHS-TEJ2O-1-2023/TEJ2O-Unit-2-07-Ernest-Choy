"""
Created by: Ernest
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

display.clear
display.show(Image.HAPPY)

# variable for cookies clicked
cookies_clicked = 0

while True:
    if button_a.is_pressed():
        cookies_clicked = cookies_clicked + 1
        display.show(cookies_clicked)
    if button_b.is_pressed():
        cookies_clicked = 0
        display.show(cookies_clicked)
