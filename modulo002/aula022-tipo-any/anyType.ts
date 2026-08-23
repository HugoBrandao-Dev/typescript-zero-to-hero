const a: any = 32;
const b: any = ["Tobias"];

const result = a + b;

// concatenará os valores das duas constantes do tipo any (não dará erro).
console.log(result);

let frase; // O any é padrão.
frase = "Uma frase qualquer.";
console.log(frase);

// => QUANDO USAR

const formulario: {
    [campoFormulario: string] : any
} = {
    nome: "Tobias",
    sobrenome: "de Oliveira",
    idade: 32
}

console.log(formulario);
