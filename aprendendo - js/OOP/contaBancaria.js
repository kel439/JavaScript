class ContaBancaria {
    #saldo;     // Campo privado
    #senha;

    constructor(titular, saldoInicial, senha) {
        this.titular = titular;
        this.#saldo = saldoInicial;
        this.#senha = senha;
    }

    // Getter para leitura controlada
    get saldo() {
        return `R$ ${this.#saldo.toFixed(2)}`;
    }

    depositar(valor) {
        if (valor > 0){
            this.#saldo += valor;
            console.log(`Depositado: R$ ${valor}`);
        
        }

    }
            sacar(valor, senhaInformada) {
            if (senhaInformada !== this.#senha) {
                console.log("Senha incorreta!");
            }

            if (valor > this.#saldo) {
                console.log("Saldo insuficiente!");
                return;
            }
            this.#saldo -= valor;
             console.log(`Saque de R$ ${valor} realizado.`);
        }
}
