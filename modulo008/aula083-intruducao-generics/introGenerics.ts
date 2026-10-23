// Exemplo 01: Generics

function retornarElementosRandomicos<T>(items: T[]): T {
    const itemRandomico: number = Math.floor(Math.random() * items.length);
    return items[itemRandomico];
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroRandomico = retornarElementosRandomicos<number>(numeros);
console.log(numeroRandomico);

const estados = ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia", "Amazonas"];
const estadoRandomico = retornarElementosRandomicos<string>(estados);
console.log(estadoRandomico);

// Exemplo 02: Generics

function exibirElementos<T>(array: T[]): void {
    array.forEach(el => console.log(el));
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const states: string[] = ["Acre", "Mato Grosso", "Mato Grosso do Sul", "Sergipe"];

console.log();

exibirElementos<number>(numbers);
exibirElementos<string>(states);
