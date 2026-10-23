const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");
 
const erros = [];       // array de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1;   // num aleatorio entre 1 e 100
const CHANCES = 6;      // constante com o numero de chances
 
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNumero.value);
   
    if (numero == sorteado) {       // se acertou
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`;
        frm.btSubmit.disabled = true;   // troca status dos botões
        frm.btNovo.className = "exibe";
    } else {
        if (erros.includes(numero)) {   // se número existe no array erros (já apostou)
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero);         // adiciona numero no array
            const numErros = erros.length;  // obtem tamanho do array
            const numChances = CHANCES - numErros;    // calcula nº de chances
            // exibe nº de erros, conteudo do array e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`;
            respChances.innerText = numChances;
 
            if (numChances == 0) {
                alert("Suas chances acabaram...");
                frm.btSubmit.disabled = true;
                frm.btNovo.className = "exibe";
                respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`;
            } else {
                const dica = numero < sorteado ? "maior" : "menor";
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
            }
        }
    }
 
    frm.inNumero.value = "";
    frm.inNumero.focus();
})
 
frm.btNovo.addEventListener("click", () => {
    location.reload();      // recarrega a página
})