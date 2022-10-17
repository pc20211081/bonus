let state = 0
let count = 0
let save = 0
input.onButtonPressed(Button.A, function () {
    if (state == 2) {
        count = save
    }
    state = 1
    count += 1
})
input.onButtonPressed(Button.AB, function () {
    state = 2
    save = count
    count = save
    while (count > 0 && state == 2) {
        count += -1
        basic.showNumber(count)
    }
})
input.onButtonPressed(Button.B, function () {
    if (state == 2) {
        count = save
    }
    state = 1
    count += 10
})
basic.forever(function () {
    if (state == 1) {
        basic.showNumber(count)
    }
})
