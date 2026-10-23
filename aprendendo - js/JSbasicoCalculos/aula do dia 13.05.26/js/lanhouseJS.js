const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    const preco = Number(frm.inPreco.value);
    const tempo = Number(frm.inTempo.value);

    const resu = Math.ceil( tempo / 15 ) * preco;

    resp1.innerText = `Resultado: ${resu.toFixed(2)}`;
    e.preventDefault();
})