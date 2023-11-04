const generatePassword = scalingCode();

function mixCode() {
    let low = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    let upp = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    let num = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    let symbols = '!@#$%&*(){}[]=<>/,.';
    let sym = symbols[Math.floor(Math.random() * symbols.length)];
    let mix = `${low}${upp}${num}${sym}`;

    return mix[Math.floor(Math.random() * mix.length)];
}

function scalingCode() {
    let final = [];
    let x = 0;
    while (x < 32) {
        final += mixCode();
        x++;
    }

    return final;
}

// *** bonus *** 
// copy the generated code to clipboard 
const copyClipboard = copyCode();

function copyCode() {
    let copy = generatePassword;
    if (!copy)
        return;
    navigator.clipboard.writeText(copy);
}
