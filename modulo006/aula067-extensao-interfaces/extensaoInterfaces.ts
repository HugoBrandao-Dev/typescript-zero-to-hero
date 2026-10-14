// INTERFACES COM EXTENDS

type Porte = "pequeno" | "médio" | "grande";

interface Animal {
    nome: string;
    idade: number;
    porte: Porte;
}

interface Cachorro extends Animal {
    raca: string;
}

const cach01: Cachorro = {
    nome: "Anunaki",
    idade: 2,
    porte: "grande",
    raca: "Bulldog"
}

console.log(cach01);

// EXTENSÃO DE MÚLTIPLAS INTERFACES

interface Notebook {
    peso: number;
    largura: number;
    comprimento: number;
    altura: number;
    numSerie?: string
}

interface Marca {
    marca: string;
    paisOrigem: string;
}

interface Modelo extends Notebook, Marca {
    modelo: string
}

const note01: Modelo = {
    peso: 3.5,
    largura: 30,
    comprimento: 45,
    altura: 8,
    numSerie: "ABCDEFGHIJKL1232456",
    marca: "MSI",
    paisOrigem: "Taiwan",
    modelo: "DEX-0989"
}

console.log(note01);

// USO DO OMIT

interface Funcionario {
    id: string;
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, "id"> {
    id: number;
    linguagemProgramacao: string;
}

const desen01: Desenvolvedor = {
    id: Date.now(),
    nome: "Dinorá de Oliveira",
    salario: 3500,
    linguagemProgramacao: "TypeScript"
}

console.log(desen01);

interface Pessoa {
    id: string | number;
    nome: string;
    cpf: string | number;
}

interface Engenheiro extends Pessoa {
    areaAtuacao: string
}

const pess01: Engenheiro = {
    id: Date.now(),
    nome: "Dinorá de Oliveira",
    cpf: "111.111.111-11",
    areaAtuacao: "Civil"
}

console.log(pess01);

const pess02: Engenheiro = {
    id: Date.now(),
    nome: "Tobias de Oliveira",
    cpf: 12112112213,
    areaAtuacao: "Mecânica"
}

console.log(pess02);
