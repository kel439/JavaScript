// adiciona pacote node ao programa
const prompt = require('prompt-sync')();

// lê o nome do veiculo
const veiculo = prompt("Veículo:");

// le o preço do veiculo
const preco = Number(prompt("Preço:"));

// calcula o valor da entrada
const entrada = preco * 0.50;

// calcula o valor da parcela
const parcela = (preco * 0.50)/ 12;

// exibe o nome do veiculo e demai saidas

console.log (`Promoção: ${veiculo}`);
console.log (`Entrada de: R$ ${entrada.toFixed(2)}`);
console.log (`+ 12x de: ${parcela.toFixed(2)}`);