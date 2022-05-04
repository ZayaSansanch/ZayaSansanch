console.log("MultiLanguage.js - loaded");

Eng()

// const WinOne = null

function Rus() {
    // WinOne = JSON.parse(
    //     '{title: Ега, next: Далее, back: Назад}'
    // );
    console.log("Language: Rus");
    document.getElementById("ButtonWinOne").innerHTML = "Далее";
    document.getElementById("ButtonWinTwo").innerHTML = "Назад";
    document.getElementById("ButtonInfo").innerHTML = "Инфо";
    document.getElementById("InfoTitle").innerHTML = "Инфо";
}

function Eng() {
    // WinOne = JSON.parse(
    //     '{title: Yoga, next: Next, back: Back}'
    // );
    console.log("Language: Eng");
    document.getElementById("ButtonWinOne").innerHTML = "Next";
    document.getElementById("ButtonWinTwo").innerHTML = "Back";
    document.getElementById("ButtonInfo").innerHTML = "Info";
    document.getElementById("InfoTitle").innerHTML = "Info";
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