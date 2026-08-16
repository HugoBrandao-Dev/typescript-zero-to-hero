
let pessoa: [string, string, number];

pessoa = ["Hugo Brandão", "Estudante de TypeScript :)", 34];

// pessoa = [32, "Tobias de Oliveira", "TypeScript Zero to Hero"]; // Dará erro

console.log(pessoa);
console.log(pessoa[1]);

console.log();
/* ======> Tuplas em TypeScript com Spread Operator <====== */

// Tupla que receberá um número infinito de valores do tipo string
let listaFrutas: [string, ...string[]];
listaFrutas = ["abacaxi", "maracujá", "morango", "cupuaçu"];

console.log(listaFrutas[3]);
console.log(listaFrutas);
console.log(...listaFrutas);

console.log();
/* ======> Tuplas em TypeScript com Labels (labeled) <====== */

let cadastro: [nome: string, profissao: string, qtdCursos: number];
cadastro = ["Hugo Brandão", "Desenvolvedor Web", 6];

console.log(cadastro);
