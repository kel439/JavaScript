const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit" , (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    let resposta = `Entra ${numero} e 1: `; // string para montar a resposta

    for (let i = numero; i>0; i--) {
      resposta = resposta + i + " , " ; // resposta acumula numeros e virgulas
      //resposta = `${resposta} ${i}`;
    }

    resp.innerText = resposta + " 0 .";
})