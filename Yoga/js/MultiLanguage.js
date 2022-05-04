console.log("MultiLanguage.js - loaded");

var language = localStorage.getItem("language") || "Eng"

console.info(language)

// localStorage.getItem("language", "Eng")

if (language == "Eng") {
    Eng()
} else if (language == "Rus") {
    Rus()
} else {
    console.error("Language unknown: " + language)
}

// const WinOne = null

function setText(id, text) {
    var el = document.getElementById(id)
    if (el) {
        el.innerHTML = text
    } else {
        console.warn("Not Element:", id)
    }
}

function Rus() {
    // WinOne = JSON.parse(
    //     '{title: Ега, next: Далее, back: Назад}'
    // );
    console.log("Language: Rus")
    language = "Rus"
    localStorage.setItem("language", "Rus")
    setText("ButtonWinOne", "Далее")
    setText("ButtonWinOne", "Далее")
    setText("ButtonWinTwo", "Назад")
    // setText("ButtonInfo", "Инфо")
    setText("InfoTitle", "Инфо")
    // setText("Backk", "Назад")
    setText("Lan", "Язык:")
    setText("Eng", "Eng")
    setText("Rus", "Rus")
}

function Eng() {
    // WinOne = JSON.parse(
    //     '{title: Yoga, next: Next, back: Back}'
    // );
    console.log("Language: Eng")
    language = "Rus"
    localStorage.setItem("language", "Eng")
    setText("ButtonWinOne", "Next")
    setText("ButtonWinTwo", "Back")
    // setText("ButtonInfo", "Info")
    setText("InfoTitle", "Info")
    // setText("Backk", "Back")
    setText("Lan", "Language:")
    setText("Eng", "Eng")
    setText("Rus", "Rus")
}



// console.log("MultiLanguage.js - loaded");

// function Rus() {
//     const Rus = JSON.parse(
//         "[{title: Ега, h1: Ега}"
//     );
//     console.log("Language: Rus");
// }

// function Eng() {
//     const Eng = JSON.parse(
//         "[{title: Yoga, h1: Yoga}]"
//     );
//     console.log("Language: Eng");
// }

// document.getElementById("title").innerHTML()