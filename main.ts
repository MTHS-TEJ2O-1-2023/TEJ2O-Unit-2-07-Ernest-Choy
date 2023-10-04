/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Oct 2023
 * This program clicks cookies
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Number of cookies clicked variable
let cookiesClicked = 0

input.onButtonPressed(Button.A, function () {
  cookiesClicked = cookiesClicked + 1
  basic.showNumber(cookiesClicked)
})

input.onButtonPressed(Button.B, function () {
  cookiesClicked = 0
  basic.showNumber(cookiesClicked)
})
