const prompt = require('prompt-sync')();
console.log("Programa Anos de copa do mundo. digite 0 para sair");
console.log("--------------------------------------------------");
do{
    const ano = Number(prompt("Ano: "));
    if (ano == 0){
        break;
    } else if(ano == 1942 || ano == 1946){
        console.log(`Não houve Copa em ${ano} (Segunda guerra mudial)`);
    } else if(ano >= 1930 && ano % 4 == 2){
        console.log(`Sim! ${ano} é ano de copa do mundo!`);
    } else{
        console.log(`Não... ${ano} não é ano de copa do mundo`);
    }

}while(true);