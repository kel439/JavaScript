// Criando a classe carro
class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0; // atributo com valor padrão
    }

    acelerar(incremento){
        this.valocidade += incremento;
        console.log(`O ${this.modelo} acelerou para ${this.velocidade} km/h`);
    }

    frear() {
        this.velocidade = 0;
        console.log(`O ${this.modelo} parou.`);
    }
}
// Instanciar um objeto
const meuCarro = new Carro("Toyota", "Corolla", 2022);
meuCarro.acelerar(50);
meuCarro.frear();
