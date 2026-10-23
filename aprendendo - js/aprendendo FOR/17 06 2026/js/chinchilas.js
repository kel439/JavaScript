const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const num = Number(frm.inChin.value);
    const ano = Number(frm.inAnos.value);
    let resu = num;   
    let cumular = "";

    for(let i = 1; i <= ano; i++){

        cumular += ` ${i}º Ano: ${(resu)}\n`;
        resu *= 3;
    } 
  resp.innerText = cumular; 
});