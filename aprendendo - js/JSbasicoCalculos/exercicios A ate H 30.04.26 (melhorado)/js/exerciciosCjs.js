const frm = (document.querySelector("form"));
const resp = (document.querySelector("h3"));

frm.addEventListener("submit", (e) =>{
    const num = Number(frm.num.value);
    const soma = num * 10/100;
    const resu = soma + num;
    resp.innerText = `Resultado é: ${resu}`;

    e.preventDefault();
})