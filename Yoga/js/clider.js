var now = 1

    var card1 = document.getElementById("card1")
    var card2 = document.getElementById("card2")
    var card3 = document.getElementById("card3")
    var card4 = document.getElementById("card4")
    var card5 = document.getElementById("card5")

    var next = document.getElementById("ButtonWinOne")
    var back = document.getElementById("ButtonWinTwo")

    // setInterval(PlusOne(), 1000)

    back.style.opacity = 0

    function PlusOne() {
        if (now == 1) {
            card5.classList.add("vne")
            back.style.opacity = 0.25
            next.style.opacity = 0.25
            back.style.transition = "0.5s"
            next.style.transition = "0.5s"
            console.log("clider.js: + " + now)
        }
        if (now == 2) {
            card4.classList.add("vne")
            back.style.opacity = 0.25
            next.style.opacity = 0.25
            next.style.transition = "0.5s"
            console.log("clider.js: + " + now)
        }
        if (now == 3) {
            card3.classList.add("vne")
            back.style.opacity = 0.25
            next.style.opacity = 0.25
            next.style.transition = "0.5s"
            console.log("clider.js: + " + now)
        }
        if (now == 4) {
            card2.classList.add("vne")
            back.style.opacity = 0.25
            next.style.opacity = 0
            next.style.transition = "0.5s"
            console.log("clider.js: + " + now)
        }
        if (now == 5) {
            card5.classList.remove("vne")
            card4.classList.remove("vne")
            card3.classList.remove("vne")
            card2.classList.remove("vne")
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
            back.style.opacity = 0
            next.style.opacity = 0.25
            console.log("clider.js: - " + now)
        }
        if (now == 2) {
            card4.classList.remove("vne")
            back.style.opacity = 0.25
            next.style.opacity = 0.25
            console.log("clider.js: - " + now)
        }
        if (now == 3) {
            card3.classList.remove("vne")
            back.style.opacity = 0.25
            next.style.opacity = 0.25
            console.log("clider.js: - " + now)
        }
        if (now == 4) {
            card2.classList.remove("vne")
            back.style.opacity = 0.25
            next.style.opacity = 0.25
            console.log("clider.js: - " + now)
        }
        if (now == 5) {
            card5.style.transition = "1s"
            card4.classList.remove("vne")
            card3.classList.remove("vne")
            card2.style.transition = "0.5s"
            console.log("clider.js: 0 " + now)
            
            now = 0
        }
    }