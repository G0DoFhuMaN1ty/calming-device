input.onButtonPressed(Button.A, function () {
    music.playMelody("C D E F G A B C5 ", 199)
    basic.showString("breathe in")
    basic.showString("out")
    basic.showString("in")
    basic.showString("out")
    basic.showString("in")
    basic.showString("and out")
    music.playMelody("C5 B A G F E D C ", 199)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showString("just take deep breathes until you feel calm")
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("E B C5 A B G A F ", 185)
    basic.showString("breathe in")
    basic.showString("out")
    basic.showString("in")
    basic.showString("out")
    basic.showString("in")
    basic.showString("out")
    basic.showString("in")
    basic.showString("out")
    basic.showString("in")
    basic.showString("out")
    basic.showString("in")
    basic.showString("out")
    basic.showString("in")
    basic.showString("out")
    music.playMelody("C5 A B G A F G E ", 120)
})
