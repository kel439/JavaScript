const frm = (document.querySelector("form"));
const resp = (document.querySelector("h3"));

frm.addEventListener("submit", (e) =>{
    const num1 = Number(frm.num1.value);
    const num2 = Number(frm.num2.value);
    const media = (num1 + num2) / 2;
    resp.innerText = `A media é: ${media}`;

    e.preventDefault();
})