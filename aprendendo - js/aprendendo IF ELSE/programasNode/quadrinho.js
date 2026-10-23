const prompt = require('prompt-sync')();
const salario = Number(prompt("Valor do salario:"));
const anos = Number(prompt("Numeros de anos de trabalho na empresa:"));
const resu = salario * 0.01;
const total = salario + (Math.floor( anos / 4 )* resu);

console.log (`Total é: ${total}`);