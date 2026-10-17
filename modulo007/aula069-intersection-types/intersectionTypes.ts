interface DadosBancarios {
    conta: string;
    agencia: string;
    banco: string;
}

interface Cliente {
    nome: string;
    email: string;
}

interface DadosPessoaFisica {
    cpf: string;
}

// Composição das interfaces
type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
    nome: "Dinorá de Oliveira",
    email: "dino@yahoo.com",
    cpf: "11111111111",
    conta: "111111",
    agencia: "11",
    banco: "Banco Lisar8"
}

console.log(dadosCliente);
