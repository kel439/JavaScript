// Classe livro
class Livro{
    constructor(titulo, autor, paginas, paginasLidas = 0){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.paginasLidas = paginasLidas;
    }
    ler(naoLidos){
        this.paginasLidas += naoLidos;
        // Impedir que o nr de paginas lidas seja maior o total do livros
        if(this.paginasLidas > this.paginas){
            this.paginasLidas = this.paginas;
        }

        console.log(`Total paginas lidas ${this.paginas}  ${this.paginasLidas }`);
    }
    progresso(){
        const porcentagem = ((this.paginas / this.paginasLidas) * 100).toFixed(1);
        return `${porcentagem}`;
    }
}
// Classe biblioteca
class Bliblioteca {
    constructor(nome){
        this.nome = nome;
        this.livros = [];
    }
    // adicionar uma instancia de Livro ao array
    adicionarLivro(livro){
        this.livros.push(livro);
        console.log(`LIVRO ADICIONADO: "${livro.titulo}" à bibliotca ${this.nome}.`);
    }

    // Exibir todos os livros e seus progressos
    listarLivros(){
        console(``)
        if (this.livros.length === 0){
            console.log(`A biblioteca esta vazia.`)
        }
        this.livros.forEacha((livro, index)=> {
            console.log(
                `${index + 1}."${livro.titulo}" (${livro.autor})`+
                `-Progresso: ${livro.progresso()} [${livro.paginasLidas}/${this.livros.paginas}págs]`
            )
        })
        console.log(`\n=== LISTA DE LIVROS: ${this.nome.toUpperCase()} ===` +
                    `Progresso: ${livro.progresso()} [${livro.paginasLidas}/${livro.paginas} ]`)
    }
}
