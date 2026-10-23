const frm = document.querySelector("form");
const resp1 = document.querySelector("#num1");
const resp2 = document.querySelector("#num2");

frm.addEventListener("submit", (e) =>{
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const desconto = (preco * 0.50);
    const resu = (preco * 2)  + desconto;

    resp1.innerText = `${produto} leve por R$: ${resu.toFixed(2)}`;
    resp2.innerText = `O terceiro numero custa apenas R$: ${desconto.toFixed(2)}`;

    e.preventDefault();
})