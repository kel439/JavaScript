const frm = document.querySelector("form");
const resp1 = document.querySelector("#outDivisores");
const resp2 = document.querySelector("#outResposta");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    let numerar = "";
    let soma = 0;

    for(let i = 1; i < num / 2; i++){
        if(num % i == 0){
            soma += i;
            numerar += i + " ";
        }
    } 
  if(soma == num){
    resp2.innerText = `perfeito`;
  }else{
    resp2.innerText = `nao`;
  }
});