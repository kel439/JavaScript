const frm = document.querySelector("form");
const resp1 = document.querySelector("#outTempo");
const resp2 = document.querySelector("#outTroco");
frm.addEventListener('submit' , (e) => {
    e.preventDefault(); // evita o envio do form
const num1 = Number(frm.inValor.value);


    if (num1 < 1) {
        alert("Valor inválido tem que ser maior que 1 para pagar");
        frm.inValor.focus(); // focus() coloca o cursor no campo inSaque
        return;
    }
    // if (num1 >= 1) {
    //     resu = num1 - 1;
    //     resp1.innerText = `O tempo de 30 Min `;
    //     resp2.innerText = `O troco é ${resu.toFixed(2)}`;
    // } 
    // if (num1 >= 1.75){
    //     resu = num1 - 1.75;
    //     resp1.innerText = `O tempo de 60 Min `;
    //     resp2.innerText = `O troco é ${resu.toFixed(2)}`;     
    // }  
    // if (num1 >= 3){
    //     resu = num1 - 3;
    //     resp1.innerText = `O tempo de 120 Min`;
    //     resp2.innerText = `O troco é ${resu.toFixed(2)}`;
    // }
    let tempo;
    let troco;

    if (valor <= 3.00){
        tempo = 120;
        troco = valor - 3.00;
    } else if (valor >= 1.75){
        tempo = 60;
        troco = valor - 1.75;
    } else {
        tempo = 30;
        troco = valor - 1;
    }
    resp1.innerText = `Tempo: ${tempo} min`;
    if (troco > 0) {
        resp2.innerText = `Troco R$ 0,00`
    }
});