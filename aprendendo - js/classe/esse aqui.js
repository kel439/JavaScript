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
    super(id,nome,preco);
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
    super(id,nome,preco);
    this.desconto = 0.20;
   
     }
     tamanhoArquivo(){
        if(preco>100){
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
    #produtos
    constructor() {
        this.#produtos = [];
    }
    adicionar(produto) {
        if (Validador.precoValido(produto.preco))
            { this.#produtos.push(produto);
                console.log(produto.nome + " foi adicionado."); }
                else { console.log("Preço inválido!");}
            }
            remover(id)
            { this.#produtos = this.#produtos.filter( produto => produto.id !== id ); }
            calcularTotal() { let total = 0; this.#produtos.forEach(produto => { let preco = produto.preco - produto.calcularDesconto();
                if (produto instanceof ProdutoFisico) { preco += produto.calcularFrete(); } total += preco; });
                 return total; }
                  listarProdutos()
                  { console.log("Produtos no carrinho:");
                    this.#produtos.forEach(produto => { console.log( produto.nome + " - R$ " + produto.preco.toFixed(2) );
                 }
                )
                 }
                }
                class Validador
                 { static precoValido(preco)
                     { return preco > 0; } }
 