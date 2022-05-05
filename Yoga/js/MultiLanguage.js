console.log("MultiLanguage.js - loaded");

var language = localStorage.getItem("language") || "Eng"

console.info(language)

// localStorage.getItem("language", "Eng")

if (language == "Eng") {
    Eng()
} else if (language == "Rus") {
    Rus()
} else if (language == "Frc") {
    Frc()
} else if (language == "Nem") {
    Nem()
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
    // setText("ButtonWinOne", "Далее")
    // setText("ButtonWinTwo", "Назад")
    setText("InfoTitle", "Инфо")
    setText("Lan", "Язык:")
    // setText("ButtonInfo", "Инфо")
    // setText("Backk", "Назад")
    setText("Eng", "Eng")
    setText("Rus", "Rus")
    setText("Frc", "Frc")
    setText("Nem", "Nem")
}

function Eng() {
    // WinOne = JSON.parse(
    //     '{title: Yoga, next: Next, back: Back}'
    // );
    console.log("Language: Eng")
    language = "Eng"
    localStorage.setItem("language", "Eng")
    // setText("ButtonWinOne", "Next")
    // setText("ButtonWinTwo", "Back")
    setText("InfoTitle", "Info")
    setText("Lan", "Language:")
    // setText("ButtonInfo", "Info")
    // setText("Backk", "Back")
    setText("Eng", "Eng")
    setText("Rus", "Rus")
    setText("Frc", "Frc")
    setText("Nem", "Nem")
}

function Frc() {
    // WinOne = JSON.parse(
    //     '{title: Yoga, next: Next, back: Back}'
    // );
    console.log("Language: Frc")
    language = "Frc"
    localStorage.setItem("language", "Frc")
    // setText("ButtonWinOne", "Puis")
    // setText("ButtonWinTwo", "Arrière")
    setText("InfoTitle", "Info")
    setText("Lan", "Français:")
    // setText("ButtonInfo", "Info")
    // setText("Backk", "Back")
    setText("Eng", "Eng")
    setText("Rus", "Rus")
    setText("Frc", "Frc")
    setText("Nem", "Nem")
}

function Nem() {
    // WinOne = JSON.parse(
    //     '{title: Yoga, next: Next, back: Back}'
    // );
    console.log("Language: Nem")
    language = "Nem"
    localStorage.setItem("language", "Nem")
    // setText("ButtonWinOne", "Weiter")
    // setText("ButtonWinTwo", "Zurück")
    setText("InfoTitle", "Info")
    setText("Lan", "Sprache:")
    // setText("ButtonInfo", "Info")
    // setText("Backk", "Back")
    setText("Eng", "Eng")
    setText("Rus", "Rus")
    setText("Frc", "Frc")
    setText("Nem", "Nem")
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