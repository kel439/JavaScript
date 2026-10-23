const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");
 
const urgencia = [];
const pacientes = [];
 
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inPaciente.value;
    pacientes.push(nome);
 
    atualizarLista();
 
    frm.reset();
    frm.inPaciente.focus();
 
 
})
 
frm.btUrgencia.addEventListener("click", () => {
        //verificar se as validações do form estão ok (no caso, paciente is required)
        if(!frm.checkValidity()){
            alert("informe o nome do paciente em caráter de urgência")
            frm.inPaciente.focus(); //posicionar o cursor no campo
            return;
        }
            const nome = frm.inPaciente.value;
 
            urgencia.push(nome);
 
            atualizarLista();
 
            frm.reset();
            frm.inPaciente.focus();
 
             })
 
             frm.btAtender.addEventListener("click" , () => {
        // se o tamanho do vetor = 0
        if (pacientes.length == 0){
            alert("Nao ha pacientes na lista de espera");
        frm.inPaciente.focus();
        return;
        }
 
        let atender;
 
        if (urgencia.length > 0) {
         atender = urgencia.shift();
        } else {
            atender = pacientes.shift();
        }
 
        respNome.innerText = atender;
 
        atualizarLista();
 
             })
 
             function atualizarLista() {
 
    let lista = "";
 
    urgencia.forEach((paciente, i) => {
        lista += `${1 + i}. ${paciente} (Urgência)\n`;
    })
 
    pacientes.forEach((paciente, i) => {
        lista += `${urgencia.length + i + 1}. ${paciente}\n`;
    })
 
    respLista.innerText = lista;
}
/*
abordagem
as duas funcionam, mas tem propositos diferentes:

uma fila (paciente[])                       - Duas filas (urgentcia[] e pacientes [])
Mais economica em memória                   - Código é mais organizado
Exige controlar a posição dos urgentes      - Não precisa controlar indeces
Mais dificil de manter                      - Mais fácil de entender e expandir
Boa para exercicios sobre arrays            - Mais próxima de sistemas reais
---------------------------------------------------------------------------------------
Vantagens da segunda solução:

- Código mais organizado
- Não precisa usar splice() nem controla uma váriavel como PacUrgencia
- A lógica fica mais intuitivas: duas filas independentes
- Facilita futuras melhorias, como adicionar nos prioridades

essa solução é mais organizada e segue um conceito muito utilizado em sistemas reais e programação:
Separar por prioridade e manter duas filas independentes


*/