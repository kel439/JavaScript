const prompt = require('prompt-sync')();
const num1 = prompt("Digite o 1º numero:");
const num2 = prompt("Digita o 2º numero:");

if (num1 >= num2) {
    console.log(`${num1} é maior ou igual que ${num2}`);
} else {
    console.log(`${num1}Ele é menor que ${num2}`);
}