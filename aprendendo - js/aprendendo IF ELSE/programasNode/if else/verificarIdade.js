const prompt = require('prompt-sync')();
const idade = Number(prompt("Digite A sua idade:"));

if (idade >= 18) {
    console.log(` ${idade}: maior de idade `);
} else {
    console.log(` ${idade}: menor de idade`);
}