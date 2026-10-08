// Get
class Quadrado {
    private _largura: number;
    private _altura: number;

    constructor (largura: number, altura: number) {
        this._largura = largura;
        this._altura = altura;
    }

    get area(): number {
        return this._altura * this._largura
    }
}

const quadrado = new Quadrado(5, 4);

console.log(quadrado.area);

// Set
class Pessoa {
    nome: string; // ESLint dando erro, mas funciona

    retornarNomePessoa(setNomePessoa: string) {
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa("Dinorá de Oliveira");

console.log(`Meu nome é ${ pessoa.nome }`);

// Get [explicação mais densa]
class Estudante {
    private _nome: string;
    private _semestre: number;
    private _curso: string;

    constructor (nome: string, semestre: number, curso: string) {
        this._nome = nome;
        this._semestre = semestre;
        this._curso = curso;
    }

    public get nome(): string {
        return this._nome + "&";
    }
}

console.log();

const estudante = new Estudante("Hugo", 2, "Análise e Desenvolvimento de Sistemas");
console.log(estudante.nome);

class Personagem {
    id: number;
    nome: string;
    raca: string;
    classe: string;

    constructor(nome: string, raca: string, classe: string) {
        this.id = Date.now();
        this.nome = nome;
        this.raca = raca;
        this.classe = classe;
    }

    public get classes() { // Por mais que tenha um nome diferente, o TS sabe que é do atributo "classe"
        return this.classe;
    }

    public set classes(novaclasse: string) { // Por mais que tenha um nome diferente, o TS sabe que é do atributo "classe"
        this.classe = novaclasse;
    }
}

const personagem01 = new Personagem("AZ0G", "Orc", "Fighter");
console.log(personagem01);

personagem01.classe = "Mage";

console.log(personagem01);
