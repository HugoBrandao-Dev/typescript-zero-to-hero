// Named function
function somarNumeros(a: number, b: number): number {
    return a + b;
}

console.log(somarNumeros(4,3));

// Funcao anonima (Function Expression)

const multiplicar = function(a: number, b: number): number {
    return a * b;
};

console.log(multiplicar(9, 8));

// Funcao Flexa (Arrow Function Expression)

const dividir = (a: number, b: number): any => {
    return b == 0 ? "ERRO: Divisão por 0!" : a / b;
}

// Function constructor

console.log(dividir(3, 0));

const tudoMaiusculo = new Function("msg", "return msg.toUpperCase()");

console.log(tudoMaiusculo("Tobias"));
