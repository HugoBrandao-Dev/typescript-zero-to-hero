class Pessoa {
    nome: string;
    email: string;
    temVeiculo: boolean;
    temCasaPropria: boolean;
    
    constructor(
        nome: string, 
        email: string, 
        temVeiculo: boolean, 
        temCasaPropria: boolean
    ) {
        this.nome = nome;
        this.email = email;
        this.temVeiculo = temVeiculo;
        this.temCasaPropria = temCasaPropria;
    }

    getServidorEmail(): string {
        return this.email.split('@')[1]!;
    }
}

const pessoa = new Pessoa("Josias Cruz", "jo@hotmail.com", true, false);
console.log(pessoa.getServidorEmail());

console.log();

// Classes (sem constructor)

class Estudante {

    // Mesmo com o VSCode apontando erro, vai rodar...
    id: number;
    nome: string;
}

// Inicializar o objeto
const estudante = new Estudante();
estudante.id = Date.now();
estudante.nome = "Dinorá de Oliveira";

// Acessar os campos
console.log("Código do estudante...:" + estudante.id);
console.log("Nome do estudante...: " + estudante.nome);

// Classes (com constructor)
