// Type Annotations para variáveis
let nome:string = "Tobias de Oliveira";
console.log(nome);

// Type Annotations para arrays
let animais:string[] = ["Elefante", "Girafa", "Leão", "Humano"];
console.log(animais);

// Type Annotations para Objetos
let carro: {
    marca:string;
    modelo:string;
    ano:string;
    preco:number;
}

carro = {
    marca: "Chevrolet",
    modelo: "Cruze J300",
    ano: "2015",
    preco: 120000
}
console.log(carro);

// Type Annotation para funções
function multi(num1:number, num2:number) {
    return num1 + num2;
}

console.log(multi(4,6));
