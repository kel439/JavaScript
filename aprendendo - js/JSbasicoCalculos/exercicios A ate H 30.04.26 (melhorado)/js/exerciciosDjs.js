const frm = (document.querySelector("form"));
const resp = (document.querySelector("h3"));

frm.addEventListener("submit", (e) =>{
    const dias = Number(frm.dias.value);
    const horas = Number(frm.horas.value);
    const resu = (dias * 24)+ horas;
    resp.innerText = `Resultado é: ${resu}`;

    e.preventDefault();
})