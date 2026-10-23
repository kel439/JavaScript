class ProcessadorDePagamento {
    // Campos privados (Só acessiveis dentro da classe)
    #saldo = 1000;
    #limite = 500;

    // Método público: única interface que o cliente conhece
    processar(valor, cartao) {
        if(!this.#validarCartao(cartao)) return "Cartão inválido.";
        if(!this.#verificarSaldo(valor)) return "Saldo insuficiente.";

        this.#registrarTransacao(valor);
        this.#enviarRecibo(valor);
        return "Pagamento aprovado";
    }

    // Passos internos ocultos
    #validarCartao(cartao){
        console.log("Validando cartão...");
        return cartao?.numero && cartao?.validade > new Date();
    }

    #verificarSaldo(valor) {
        console.log("Verificando saldo...");
        return valor <= this.#saldo + this.#limite;
    }

    #registrarTransacao(valor) {
        console.log("Registrando transição...");
        this.#saldo -= valor;
    }

    #enviarRecibo(valor) {
        console.log(`Recibo enviado para o cliente: R$ ${valor.toFixed(2)}`);
    }
}

// Exemplo de uso
const processador = new ProcessadorDePagamento;
const cartao = { numero: "1234 5678", validade: new Date("2026-12-31")};

console.log(processador.processar(200, cartao));
