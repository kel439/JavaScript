const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener('submit' , (e) => {
    e.preventDefault(); // evita o envio do form


    // obter e converter o conteudo do campo brasil
    const horabrasil = Number(frm.inBrasil.value);
    let horariofranca = horabrasil + 5;
    if (horariofranca > 24) {
        horariofranca = horariofranca - 24;
    }
    
    //exibir a resposta
    resp.innerText = "Horario na França: "  + horariofranca.toFixed(2) + "h";

})