const prompt = require('prompt-sync')();
const num1 = prompt("Digite o 1º numero:");
const num2 = prompt("Digita o 2º numero:");

if (num1 <= num2) {
    console.log(`${num1} é menor ou igual que ${num2}`);
} else {
    console.log(`${num1}Ele é maior que ${num2}`);
}