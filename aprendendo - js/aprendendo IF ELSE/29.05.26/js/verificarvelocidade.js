const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

console.log("Vou entrar");

frm.addEventListener('submit' , (e) => {
    e.preventDefault(); // evita o envio do form

const permitida = Number(frm.inVelPermitida.value);
const condutor = Number(frm.inVelCondutor.value);

console.log("entrei");


    if (condutor <= permitida) {
        resp1.innerText = `Sem multa `;
    } 
    else {

    let vintePorCento = permitida * 20/100;
    
    const limiteLeve = permitida + vintePorCento;

 if (condutor <= limiteLeve){
        console.log("entrei no leve");
        resp1.innerText = `Levou leve ${limiteLeve}`;
    }  
    else{
        console.log("entrei no pesado");
     resp1.innerText = `Levou Multona `;   
    }
  }
    
});