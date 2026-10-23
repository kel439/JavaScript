const prompt = require('prompt-sync')();
const num1 = Number(prompt("Digite o 1º numero:"));
const num2 = Number(prompt("Digita o 2º numero:"));

if (num1 === num2) {
    console.log(`${num1} é igual`);
} else {
    console.log(`${num1} ele é diferente que ${num2}`);
}