const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    const numero = frm.Number.value;
    const dobro = numero * 2;
    resp.innerText = `Resultado é ${dobro}`;

    e.preventDefault();
})