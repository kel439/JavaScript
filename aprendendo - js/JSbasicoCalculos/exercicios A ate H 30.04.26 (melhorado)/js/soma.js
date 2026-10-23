const frm = (document.querySelector("form"));
const resp = (document.querySelector("h3"));

frm.addEventListener("submit", (e) =>{
    const nume1 = Number(frm.nume1.value);
    const nume2 = Number(frm.nume2.value);
    const soma = nume1 + nume2;
    resp.innerText = `Resultado é: ${soma}`;

    e.preventDefault();
})