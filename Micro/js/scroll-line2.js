console.log("scroll-line2.js - loaded");

var line = document.getElementById("scroll-line");

// console.log(line)

func()

function func() {
    line.classList.add("scroll-line-animate");
    console.log(line.classList);
}

// function func() {
//     console.log(line.classList);
//     line.classList.add("scroll-line-animate");
//     console.log(line.classList);
// }

// function func() {
//     console.log(line.classList);
//     // line.classList.add("scroll-line-animate");
// }