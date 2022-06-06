console.log('start indexxx.js');
var sayt;

function smuzi(sayt) {
    function winAnsmuzi() {
        window.location.href = "ansmuzi.html";
    }

    function newWin(sayt) {
        window.location.href = sayt;
    }

    winAnsmuzi()

    setTimeout(newWin, 1000, sayt);
}