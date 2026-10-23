// Lincar com as tags do html com o JS
const frm = (document.querySelector("form"));
const resp1 = (document.querySelector("h3"));
const resp2 = (document.querySelector("h4"));
// para chamar o id do h3 do html tem que colocar o # e o nome
// const resp1 = (document.querySelector("#num1"));
// const resp2 = (document.querySelector("#num2"));
console.log("estou apos a referencias");
// criar um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit" , (e) => {
    // obter conteudo dos campos de entrada
    const nome = frm.inRemedio.value;
    // Math.floor ele faz o numero quebrado virar o anterios
    // exemplo: 7.9 ele vira 7.0
    const valor = Math.floor(Number(frm.inPreco.value));

console.log("estou dentro evento");
    //fazer o processamento tipo um calculo 2 x valor = resultado
    const resu = valor * 2;
    //exibir la no html como por exemplo
    //Promoção do remedio Dipirona (${nome})
    //Levando 2 remedios R$7.00 (${})
    resp1.innerText = `promoção do remedio ${nome}`;
    resp2.innerText = `levando 2 remedios ${resu.toFixed(2)}`;
    //O e.preventDefault ele para depois de temos codado tudo ele vai exibir todos os nosso resultado
    e.preventDefault();
})