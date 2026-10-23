// Abordagem Procedural (Dados e Fuções separado)
// Os dados ficam em um objeto simples (Estrutura)
const contaProcedural = { titular: "Ana", saldo: 100};

// A função é isolada e recebe os dados como argumento
function depositar(conta, valor) {
    conta.saldo += valor;
}

// Execução: passa o dados para a função
depositar(contaProcedural, 50);
console.log(`Procedural: ${contaProcedural.titular} tem R$${contaProcedural.saldo}`);
//----------------------------------------------------------------------------------

// Abordagem Orientada a Objetos ( Dados e Comportamentos)
// A classe (moldo) encapsula o estado (atributos) e o comportamento (métodos)
class ContaBancaria {
    constructor(titular, saldo){
        this.titular = titular;        //Atributo
        this.saldo = saldo;            //Atributo
    }

    depositar(valor){                  //Método
        this.saldo += valor;
    }
}

// Execução: instanciar o objeto e chamar seu método
const contaPOO = new ContaBancaria("Ana", 100);
contaPOO.depositar(50);

console.log(`POO: ${contaPOO.titular} tem R$${contaPOO.saldo}`);