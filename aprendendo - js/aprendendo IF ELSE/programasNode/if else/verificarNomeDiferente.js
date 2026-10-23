const prompt = require('prompt-sync')();
const nome1 = prompt("Digita o primeiro nome:");
const nome2 = prompt("Digita o segundo nome:");

if (nome1 != nome2) {
    console.log("São dirente");
} else {
    console.log("São iguais");
}