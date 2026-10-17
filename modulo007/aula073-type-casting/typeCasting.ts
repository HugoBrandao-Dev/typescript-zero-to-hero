// Type Casting: "as"
const nome: unknown = "Tobias";
console.log((nome as string).length);

// Type Casting: <>
const carro = "Corolla";
// const tamanhoString: number = (<string>carro).length;
console.log(`O tamanho da palavra \'${ carro }\' é ${ (<string>carro).length }`)
