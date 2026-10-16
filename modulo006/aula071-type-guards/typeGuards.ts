// Type Guard: typeof

type Alfanumerico = string | number;

function exibirTipo(a: Alfanumerico, b: Alfanumerico) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error("Argumentos inválidos! Ambos os argumentos devem ser números ou string.");
}

console.log(exibirTipo(3, 5));
console.log(exibirTipo("Tobias", " de Oliveira"));
// console.log(exibirTipo(12, " de Oliveira"));

// Type Guard: instanceof

class Carro {
    modelo: string;
    marca: string;

    constructor (modelo: string, marca: string) {
        this.modelo = modelo;
        this.marca = marca;
    }
}

class Moto {
    modelo: string;
    ano: number;

    constructor (modelo: string, ano: number) {
        this.modelo = modelo;
        this.ano = ano;
    }
}

function detalhesVeiculo(veiculo: Carro | Moto) {
    if (veiculo instanceof Carro) {
        return `O nome do carro é ${ veiculo.modelo } e a marca é a ${ veiculo.marca }`;
    } else if (veiculo instanceof Moto) {
        return `O nome da moto é ${ veiculo.modelo } e o ano é ${ veiculo.ano }`
    }
}

const carro = new Carro("Stilo", "Fiat");
console.log(detalhesVeiculo(carro));

const moto = new Moto("Fireblade Repsol", 2010);
console.log(detalhesVeiculo(moto));


// Type Guard: in

interface Animal {
    grupo: string;
}

class Peixe implements Animal {
    grupo: string;
    corPeixe: string;

    constructor (grupo: string, corPeixe: string) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}

class Passaro implements Animal {
    grupo: string;
    corPena: string;

    constructor (grupo: string, corPena: string) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}

function nadar(grupo: string) {
    console.log(`O ${ grupo } está nadando...`);
}

function voar(grupo: string) {
    console.log(`O ${ grupo } está voando...`);
}

function mover(animal: Animal) {
    if ("corPeixe" in animal) {
        nadar((animal as Peixe).grupo);
    }

    if ("corPena" in animal) {
        voar((animal as Passaro).grupo);
    }
}

mover(new Passaro("Pássaro", "azul"));
mover(new Peixe("Peixe", "prateado"));
