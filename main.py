input.onButtonPressed(Button.A, function () {
    Signal = Signal - 1
})
input.onButtonPressed(Button.B, function () {
    Signal = Signal + 0
})
radio.onReceivedValue(function (name, value) {
	
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (Signal == "1") {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == "2") {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == "3") {
        basic.showLeds(`
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == "4") {
        basic.showLeds(`
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == "5") {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == "6") {
        basic.showLeds(`
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let Signal = 0
Signal = 1
