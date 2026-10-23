// cria referencia ao fomr e ao h3 da respostas
const frm = document.querySelector("form");
const resp = document.querySelector("h3");


// cria ouvinte de evento quando o botão for clicador
frm.addEventListener( "submit" , (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);
    //const categoria = idade >= 18 ? "Adulto" : "Juvenil"
                       // TRUE ou FALSE

    //let categoria;
    //if (idade >= 18) {
       // categoria = "Adulto";

    //}

    //else {
       // categoria = "Juvenil";
    //}

    //let peso;  //declara a variavel chamada peso
   // if (masculino == true) {
       /// peso = 22 * Math.pow(altura , 2);
  // } // se a condição é true executa  o que tem aqui


   //else {
      // peso = 21 * Math.pow(altura , 2);
   // } // se a condição for false executa o que tem aqui 

   const peso = masculino == true ? 22 * Math.pow(altura , 2) : 21 * Math.pow(altura , 2)
   
    resp.innerText = nome + "seu peso ideial é: " + peso.toFixed(2) +"kg" ;


    
})

frm.addEventListener( "reset", () => {
    resp.innerText = ""; 

})