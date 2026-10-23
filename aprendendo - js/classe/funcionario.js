class Produtos{
    #id;
    #nome;
    #preco = 0;

 
    constructor(id, nome, preco) {
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
       
    }
    exibirDado() {
        console.log(`Nome:  ${this.#nome}  Preco: R$ ${this.#preco}`);
    }
    
}
class ProdutoFisico extends Produtos {
 constructor(id,nome,preco) {
    super(id,nome,preco); // chama o construtor da classe Produto
    this.frete = 10; 
    this.desconto = 0.15;
     }
     calcularDesconto() {
       this.total = (this.preco + this.frete) * this.desconto
        console.log (` ${this.nome} esta com desconto de R$ ${this.total}`)
    }
}
class ProdutoDigital extends Produtos {
 constructor(id,nome,preco) {
    super(id,nome,preco); // chama o construtor da classe Produto
    this.desconto = 0.20;
     }
     tamanhoArquivo(){
        if(preco > 100){
            this.total = this.preco  * this.desconto
        }else{
            this.total = (this.preco + this.frete) * this.desconto
        }
     }
     calcularDesconto() {

        console.log (` ${this.nome} esta com desconto de R$ ${this.total}`)
    }
}
class Carrinho {
    constructor(id,nome,preco) {
    super(id,nome,preco); // chama o construtor da classe Produto
    ProdutoDigital;
    }
    adicionar(){
        this.desconto
    }
    remover(){
        
    }
}