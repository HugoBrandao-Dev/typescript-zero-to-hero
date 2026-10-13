// INTERFACES SIMPLES
interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

function exibirNome(pessoa: Pessoa) {
    return `
        Nome: ${ pessoa.nome }
        Sobrenome: ${ pessoa.sobrenome }
        Idade: ${ pessoa.idade }
    `;
}

// PROPRIEDADES OPCIONAIS

const pess01 = {
    nome: "Tobias",
    sobrenome: "de Oliveira",
    idade: 31
}

console.log(exibirNome(pess01));

interface Livro {
    titulo: string;
    autor: string;
    paginas?: number; // Propriedade opcional
}

const livro: Livro = {
    titulo: "Clean Code",
    autor: "Robert C. Martin"
}

console.log(livro);

// PROPRIEDADES SOMENTE LEITURA E OPCIONAIS

interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;
}

const carro: Carro = {
    modelo: "Fusca",
    ano: 1970,
}

console.log(carro);

interface Animal {
    especie: string;
    genero: string;
    estaExtinto: boolean;
    emitirRuido(tipo: string): void;
}

class Felino implements Animal {
    especie: string;
    genero: string;
    estaExtinto: boolean;

    constructor(especie: string, genero: string, estaExtinto: boolean) {
        this.especie = especie;
        this.genero = genero;
        this.estaExtinto = estaExtinto;
    }

    emitirRuido(tipo: string): void {
        console.log(`O(A) ${ this.especie } fez ${ tipo }!!`);
    }
}

const felino01 = new Felino("P. tigris", "Panthera", false);
felino01.emitirRuido("rugido");

// INTERFACE vs. ALIAS TYPE

interface ExemploInterface {
    attrString: string;
    attrNumber: number;
    attrBoolean: boolean;
    funcVoid(): void;
}

// Uso o =
type ExemploType = {
    attrString: string;
    attrNumber: number;
    attrBoolean: boolean;
    funcNumber(): number;
}
