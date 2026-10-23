const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit" , (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    let resposta = ""; // string para concatenar a resposta

    // criar laco de repeticao (i começa em 1 incrementando ate 10)
    for (let i = 1; i<= 10; i++){
       // resposta = resposta + numero + " X " + 1 + " = " + (numero * i) + "in"
       resposta += ` ${numero} x ${i} = ${numero * i} \n`;
    }
    resp.innerText = resposta;
})