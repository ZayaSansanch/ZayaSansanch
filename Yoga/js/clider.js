console.log("clider.js - loaded");

var now = 1
var x1, y1, x2, y2, xDiff, yDiff = null

var card1 = document.getElementById("card1")
var card2 = document.getElementById("card2")
var card3 = document.getElementById("card3")
var card4 = document.getElementById("card4")
var card5 = document.getElementById("card5")

var next = document.getElementById("ButtonWinOne")
var back = document.getElementById("ButtonWinTwo")

// setInterval(PlusOne(), 1000)

back.style.opacity = 0

if (window.screen.width < 700) {
    document.getElementById("ocnova").addEventListener('touchstart', handleTouchStart, false)
    document.getElementById("ocnova").addEventListener('touchmove', handleTouchMove, false)

    function handleTouchMove(event) {
        if (!x1 || !y1) {
            return false
        } else {
            x2 = event.touches[0].clientX
            y2 = event.touches[0].clientY
            // console.info("X2: ", x2, "Y2: ", y2)

            xDiff = x2 - x1
            yDiff = y2 - x1
            // console.info("XDiff: ", xDiff, "YDiff: ", yDiff)

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff < 0) {
                    console.log("Rigth")

                    if (now < 5) {
                        PlusOne()
                    }
                }

                if (xDiff > 0) {
                    console.log("Left")

                    if (now > 1) {
                        MinsOne()
                    }
                }
            }
            // x1, y1 = null
        }
    }

    function handleTouchStart(event) {
        // console.log(event)
        const firstTouch = event.touches[0]
        // console.info(firstTouch)

        x1 = firstTouch.clientX
        y1 = firstTouch.clientY

        console.info("X1: ", x1, "Y1: ", y1)
    }

    document.getElementById("buttons").style.top = -100 + "%"
    document.getElementById("buttons2").style.top = -100 + "%"
} else {
    document.getElementById("buttons").style.top = 0 + "%"
    document.getElementById("buttons2").style.top = 0 + "%"
}

function PlusOne() {
    if (now == 1) {
        card5.classList.add("vne")
        card5.classList.remove("normal")
        back.style.opacity = 0.25
        next.style.opacity = 0.25
        back.style.transition = "0.5s"
        next.style.transition = "0.5s"
        console.log("clider.js: + " + now)
    }
    if (now == 2) {
        card4.classList.add("vne")
        card4.classList.remove("normal")
        back.style.opacity = 0.25
        next.style.opacity = 0.25
        next.style.transition = "0.5s"
        console.log("clider.js: + " + now)
    }
    if (now == 3) {
        card3.classList.add("vne")
        card3.classList.remove("normal")
        back.style.opacity = 0.25
        next.style.opacity = 0.25
        next.style.transition = "0.5s"
        console.log("clider.js: + " + now)
    }
    if (now == 4) {
        card2.classList.add("vne")
        card2.classList.remove("normal")
        back.style.opacity = 0.25
        next.style.opacity = 0
        next.style.transition = "0.5s"
        console.log("clider.js: + " + now)
    }
    if (now == 5) {
        card5.classList.remove("vne")
        card5.classList.add("normal")
        card4.classList.remove("vne")
        card4.classList.add("normal")
        card3.classList.remove("vne")
        card3.classList.add("normal")
        card2.classList.remove("vne")
        card2.classList.add("normal")
        back.style.opacity = 0
        console.log("clider.js: 0 " + now)
        
        now = 0
    }

    now++
}

function MinsOne() {
    now--

    if (now == 1) {
        card5.classList.remove("vne")
        card5.classList.add("normal")
        back.style.opacity = 0
        next.style.opacity = 0.25
        console.log("clider.js: - " + now)
    }
    if (now == 2) {
        card4.classList.remove("vne")
        card4.classList.add("normal")
        back.style.opacity = 0.25
        next.style.opacity = 0.25
        console.log("clider.js: - " + now)
    }
    if (now == 3) {
        card3.classList.remove("vne")
        card3.classList.add("normal")
        back.style.opacity = 0.25
        next.style.opacity = 0.25
        console.log("clider.js: - " + now)
    }
    if (now == 4) {
        card2.classList.remove("vne")
        card2.classList.add("normal")
        back.style.opacity = 0.25
        next.style.opacity = 0.25
        console.log("clider.js: - " + now)
    }
    if (now == 5) {
        card5.classList.add("vne")
        card5.classList.remove("normal")
        card4.classList.add("vne")
        card4.classList.remove("normal")
        card3.classList.add("vne")
        card3.classList.remove("normal")
        card2.classList.add("vne")
        card2.classList.remove("normal")
        console.log("clider.js: 0 " + now)
        
        now = 0
    }
}