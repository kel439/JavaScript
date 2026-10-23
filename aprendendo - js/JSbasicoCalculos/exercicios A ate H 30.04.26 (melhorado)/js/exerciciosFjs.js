const frm = (document.querySelector("form"));
const resp = (document.querySelector("h3"));

frm.addEventListener("submit", (e) =>{
    const conta = Number(frm.conta.value);
    const pessoas = Number(frm.pessoas.value);
    const resu = conta / pessoas;
    resp.innerText = `Valor de cada pessoa é: ${resu}`;

    e.preventDefault();
})