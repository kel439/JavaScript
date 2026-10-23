const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit" , (e) =>{
    e.preventDefault();

    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    const media = (nota1 + nota2) / 2;

    if (media >= 7){
        resp2.innerText = `Parabens ${nome} você foi aprovado(a)`;
        resp2.style.color = "blue";
    } else if (media >= 4){
        resp2.innerText = ` ${nome} você esta de recuperação`;
        resp2.style.color = "orange";
    }
    else{
        resp2.innerText = `Ops que pena ${nome} você repitiu de ano`
        resp2.style.color = "red";
    }
    
    resp1.innerText = `Média das notas ${media.toFixed(2)}`;

})