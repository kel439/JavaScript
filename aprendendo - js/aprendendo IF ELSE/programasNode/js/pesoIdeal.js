const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);

   // let pesos;
    const pesos = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);
 //   if(masculino){
 //       pesos = 22 * Math.pow(altura, 2);
 //   }else{
 //       pesos = 21 * Math.pow(altura, 2);
//    }
    resp.innerText = `${nome} seu peso ideal é ${pesos.toFixed(3)}Kg`;

    frm.addEventListener("reset", () =>{
        resp.innerText = "";
    })
})