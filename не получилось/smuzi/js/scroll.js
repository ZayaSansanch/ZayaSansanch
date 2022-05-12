console.log("scroll.js - loaded");

var an1 = document.getElementById("an1");
var an2 = document.getElementById("an2");

window.addEventListener("scroll", e => {
    console.log
    if (scrollY > 200) {
        // console.log("1");
        if (an1 != null) {
            // console.log("an1 != null, an1: ", an1);
            an1.classList.remove("op2");
            an1.classList.add("op1");
        } else {
            console.error("An1 not has classList, an1: ", an1)
        }
    }
    if (scrollY > 100) {
        // console.log("1");
        if (an2 != null) {
            // console.log("an1 != null, an1: ", an1);
            an2.classList.remove("op1");
            an2.classList.add("op2");
        } else {
            console.error("An1 not has classList, an1: ", an1)
        }
    }
})