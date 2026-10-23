const frm = (document.querySelector("form"));
const resp = (document.querySelector("h3"));

frm.addEventListener("submit", (e) =>{
    const num = Number(frm.num.value);
    const priVisi = num + 1;
    const seguVisi = num - 1;
    resp.innerText = `Primeiro visinho é ${priVisi} e o outro é ${seguVisi}`;

    e.preventDefault();
})