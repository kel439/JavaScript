const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let numContas = 0;  //declara e inicializar contador
let valTotal = 0;  //declara e inicializar acumulador
let resposta = ""; //string com a resposta a ser exibida

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const descricao = frm.inDescricao.value;
    const valor = Number(frm.inValor.value);

    numContas++;
    valTotal += valor;

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

    resp1.innerText = `${resposta}-------------------------`;
    resp2.innerText = `${numContas} contas(s) - total R$: ${valTotal.toFixed(2)}`;

    frm.inDescricao.value = "";
    frm.inValor.value = "";
    frm.inDescricao.focus();

})
