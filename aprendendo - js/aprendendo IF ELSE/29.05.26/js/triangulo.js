const frm = document.querySelector("form");
const resp1 = document.querySelector("#outSimNao");

console.log("Vou entrar");

frm.addEventListener('submit' , (e) => {
    e.preventDefault(); // evita o envio do form

const a = Number(frm.inLadoA.value);
const b = Number(frm.inLadoB.value);
const c = Number(frm.inLadoC.value);

console.log("entrei");

const resu1 = a + b;
const resu2 = b + c;
const resu3 = c + a;

    if (resu1 < c || resu2 < a || resu3 < b) {
        alert("Não da para criar um triangulo");
        frm.inLadoA.focus(); // focus() coloca o cursor no campo inSaque
        return;
    }

    if ( a == b && b == c && c == a) {
        resp1.innerText = `equilatero`;
        }else if(a != b && b != c && c != a){
        console.log("entrei no isosceles");
        
        resp1.innerText = `Isósceles`;
        }else{
        resp1.innerText = `Escaleto`;
        }
    }
);