const prompt = require('prompt-sync')();
const kilos = Number(prompt("Quantos quilos de ração:"));
const gramas = Number(prompt("Quantas gramas consome o gato:"));
const resu = kilos * 1000;
const total = Math.floor((resu / gramas)  );
const resto = (resu % gramas);
console.log(`Vai durar: ${total} dias`);
console.log(`restou ${resto} gramas`);



