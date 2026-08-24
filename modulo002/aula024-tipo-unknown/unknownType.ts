let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = "Josias Cruz";

console.log(valorVariavel);

let valor: unknown = "josias";
/*
Não se pode criar um valor tipado que recebe uma valor de 
uma variável do tipo unknown.
*/
/*
let receptorValor1: boolean = valor;
let receptorValor2: string = valor;
let receptorValor3: number = valor;
let receptorValor5: any[] = valor;
*/
let receptorValor4: any = valor;

console.log(receptorValor4);

let meuAny: any;
let meuUnknown: unknown;

console.log(meuAny.toFixed(2));

// Faz a verificação do tipo ANTES de gerar um erro
// console.log(meuUnknown.toFixed(2));

// Força a verificação
if (typeof meuUnknown === "number") {
	console.log(meuUnknown.toFixed(2));
}
