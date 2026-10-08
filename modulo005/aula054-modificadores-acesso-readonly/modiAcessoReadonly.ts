class Funcionario {
    readonly nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }
}

const func = new Funcionario("Tobias");

// Dá erro (read only)
// func.nome = "Dinorá";

console.log(func.nome);

// readonly na Interface

interface Pessoa {
    nome: string;
    curso: string;
}

const pessoa_01: Readonly<Pessoa> = {
    nome: "Dinorá de Oliveira",
    curso: "Análise e Desenvolvimento de Sistemas"
}

// Não funciona (readonly)
// pessoa_01.nome = "Novo nome";
// pessoa_01.curso = "Novo curso";
console.log(pessoa_01);

const pessoa_02: Pessoa = {
    nome: "Doralice Cruz",
    curso: "Medicina"
}

pessoa_02.nome = "Novo nome";
pessoa_02.curso = "Novo curso";

console.log(pessoa_02);
