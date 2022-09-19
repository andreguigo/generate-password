/* **
It is necessary to create fields for input and output of data
Html example:
    <p> Enter the number of characters: </p> 
    <input type="number" id="passsize" min="1" max="12" size="5" value="12">
    <button id="generate"> Generate! </button>

    <p id="result"> </p>
    <button id="clipboard"> Copy password clipboard! </button>

    <script src="index.js"></script>
** */
let passsize = document.getElementById('passsize');
let generate = document.getElementById('generate');
let result = document.getElementById('result');
let clipboard = document.getElementById('clipboard');

function generateCode() {
    let low = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    let upp = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    let num = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

    let symbols = '!@#$%&*(){}[]=<>/,.';
    let sym = symbols[Math.floor(Math.random() * symbols.length)];

    let mix = `${low}${upp}${num}${sym}`;

    return mix[Math.floor(Math.random() * mix.length)];
}

function generatePassword() {
    let final = [];

    let x = 0;
    while (x < passsize.value) {
        if (passsize.value > 12)
            return;

        final += generateCode();
        x++;
    }

    result.innerText = final.slice(0, passsize.value);
}

generate.addEventListener('click', generatePassword);

function copyPassClipboard() {
    let copy = result.innerText

    if (!copy)
        return;

    let textarea = document.createElement('textarea');
    textarea.value = copy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    alert('Copied to clipboard.');
}

clipboard.addEventListener('click', copyPassClipboard);
