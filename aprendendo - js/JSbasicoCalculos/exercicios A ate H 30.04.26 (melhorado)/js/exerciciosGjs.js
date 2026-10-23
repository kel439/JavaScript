const frm = (document.querySelector("form"));
const resp = (document.querySelector("h3"));

frm.addEventListener("submit", (e) =>{
    const conta = Number(frm.valor.value);
    const num = conta * 10 / 100;
    const desconto = conta - num;
    const parcelado = conta / 3;
    resp.innerText = `Valor a pagar parcelado é: ${parcelado} e a vista ${desconto}`;

    e.preventDefault();
})