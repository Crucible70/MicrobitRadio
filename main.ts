input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (Signal == 1 == true) {
    	
    }
    if (Signal == 2 == true) {
    	
    }
    if (Signal == 3 == true) {
    	
    }
    if (Signal == 4 == true) {
    	
    }
    if (Signal == 5 == true) {
    	
    }
    if (Signal == 6 == true) {
    	
    }
    if (Signal == 7 == true) {
    	
    }
    if (Signal == 8 == true) {
    	
    }
    if (Signal == 9 == true) {
    	
    }
    if (Signal == 10 == true) {
    	
    }
    if (Signal == 11 == true) {
    	
    }
    if (Signal == 12 == true) {
    	
    }
    if (Signal == 13 == true) {
    	
    }
    if (Signal == 14 == true) {
    	
    }
    if (Signal == 15 == true) {
    	
    }
    if (Signal == 16 == true) {
    	
    }
    if (Signal == 17 == true) {
    	
    }
    if (Signal == 18 == true) {
    	
    }
    if (Signal == 19 == true) {
    	
    }
    if (Signal == 20 == true) {
    	
    }
    if (Signal == 21 == true) {
    	
    }
    if (Signal == 22 == true) {
    	
    }
    if (Signal == 23 == true) {
    	
    }
    if (Signal == 24 == true) {
    	
    }
    if (Signal == 25 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    Signal = Signal - 1
})
input.onButtonPressed(Button.B, function () {
    Signal = Signal + 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (Signal == 1 == true) {
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
    if (Signal == 2 == true) {
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
    if (Signal == 3 == true) {
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
    if (Signal == 4 == true) {
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
    if (Signal == 5 == true) {
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
    if (Signal == 6 == true) {
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
    if (Signal == 7 == true) {
        basic.showLeds(`
            # # # # #
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 8 == true) {
        basic.showLeds(`
            # # # # #
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 9 == true) {
        basic.showLeds(`
            # # # # #
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 10 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 11 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 12 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 13 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 14 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 15 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 16 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 17 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 18 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 19 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 20 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 21 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 22 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 23 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 24 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Signal == 25 == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let Signal = 0
Signal = 1
basic.forever(function () {
    if (Signal <= 0 == true) {
        Signal = 1
    }
    if (Signal >= 26 == true) {
        Signal = 25
    }
})
