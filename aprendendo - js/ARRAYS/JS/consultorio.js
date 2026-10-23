const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; //declara o array global

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inPaciente.value;
    pacientes.push(nome); // adiciona o nome no final do array
    let lista = ""; // string para concatenar pacientes

    for(let i = 0; i < pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    respLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();

});

    // adicionar ouinte para o evento click no btUrgencia que esta no form
    frm.btUrgencia.addEventListener("click", () => {
        //verificar se as validações do form estão ok (no caso, paciente is required)
        if(!frm.checkValidity()){
            alert("informe o nome do paciente em caráter de urgência")
            frm.inPaciente.focus(); //posicionar o cursor no campo
            return;
        }

        const nome = frm.inPaciente.value;
        pacientes.unshift(nome); // adicionar paciente no inicio do campo

        let lista = "";
        // forEach aplicado sobre o array pacientes
        pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`))
        respLista.innerText = lista;
        frm.inPaciente.value = "";
        frm.inPaciente.focus();
    });

    frm.btAtender.addEventListener("click", () => {
        //se o tamanho do vetor = 0
        if (pacientes.length == 0){
            alert("Não há pacientes na lista de espera");
            frm.inPaciente.focus();
            return;
        }

        const atender = pacientes.shift(); // remove do inicio da fila (e obtem o nome)
        respNome.innerText = atender;
        let lista = "";
        pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
        respLista.innerText = lista;
    })