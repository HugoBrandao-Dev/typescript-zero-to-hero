// Modificador: public

class Estudante {
    id: number;
    nome: string;
}

const estudante = new Estudante();
estudante.id = Date.now();
estudante.nome = "Tobias de Oliveira";

console.log(estudante.id);
console.log(estudante.nome);

// Modificador: private

class Estudante_02 {
    id: number;
    nome: string;
    private idade: number; // So e possivel ser acessado DENTRO da classe (aqui)

    constructor(id: number, nome: string, idade: number) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    retornarDados(): string {
        return `
        _id: ${ this.id }
        Nome: ${ this.nome }
        Idade: ${ this.idade }
        `;
    }
}

const estudante_02 = new Estudante_02(Date.now(), "Doralice Cruz", 31);

console.log(estudante_02.id);
console.log(estudante_02.nome);
console.log(estudante_02.retornarDados());

class Estudante_03 {
    id: number;
    protected nome: string;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }
}

class Pessoa extends Estudante_03 {
    private curso: string;

    constructor(id: number, nome: string, curso: string) {
        super(id, nome);
        this.curso = curso;
    }

    retornarDados(): string {
        return `
        _id: ${ this.id }
        Nome: ${ this.nome }
        Curso: ${ this.curso }
        `;
    }
}

const estudante_03 = new Pessoa(Date.now(), "Josias Cruz", "Análise e Desenvolvimento de Sistemas");

console.log(estudante_03.retornarDados());
