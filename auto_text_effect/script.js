const textElement = document.getElementById('text');
const text = "I don't love programming";
let idx = 1;

writeText();

function writeText() {
    textElement.innerText = text.slice(0, idx);

    idx++;

    if(idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, 150);
}
