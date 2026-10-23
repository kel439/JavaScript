const prompt = require('prompt-sync')();  //Adiciona pacote para entrada de dados
const num1 = Number(prompt("1º numero:")); // lê os numeros
const num2 = Number(prompt("2º numero:")); // lê os numeros
const soma = num1 + num2; //calcular

console.log(`Soma é ${soma}`); //exibe o resultado;