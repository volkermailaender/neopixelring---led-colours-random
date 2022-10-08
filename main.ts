let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.show()
basic.forever(function () {
    for (let Index = 0; Index <= 12; Index++) {
        strip.setPixelColor(Index, neopixel.rgb(randint(-100, 255), randint(-100, 255), randint(-100, 255)))
        strip.show()
        basic.pause(10)
    }
})
