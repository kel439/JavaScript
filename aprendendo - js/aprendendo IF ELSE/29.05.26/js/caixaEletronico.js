// criar referencia para tags e id
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const saque = Number(frm.inSaque.value);
// validação do valor do saque vendo se o resto da divisão e igual a 0
    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, R$ 50 e R$ 100)");
        frm.inSaque.focus(); // focus() coloca o cursor no campo inSaque
        return;
    }

    const notasCem = Math.floor(saque / 100); // calcula notas de 100
    let resto = saque % 100; // quanto sobra para pagar
    const notasCinquenta = Math.floor(resto / 50); //calcular se ainda sobrou
    resto = resto % 50; // calcula notas de 50
    const notasDez = Math.floor(resto / 10); //calcular se ainda sobrou

    // exibi as notas se houver
    if (notasCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notasCem}`;
    }
    if (notasCinquenta > 0){
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`; 
    } 
    if (notasDez > 0){
        resp3.innerText = `Notas de R$ 10: ${notasDez}`;
    }
})