// 1º Uso do if ...
const contadorMax: number = 100;
let cont: number = 99;

if (cont < contadorMax) {
    cont++;
}

console.log(cont);

// 2º Uso do if ...

const permissaoIdadeDirigir: number = 18;

if (permissaoIdadeDirigir >= 18) {
    console.log(permissaoIdadeDirigir + " | Pode dirigir!!");
}


// 3º Uso do if ... else

const permissaoIdadeDirigir02: number = 16;

if (permissaoIdadeDirigir02 >= 18) {
    console.log(permissaoIdadeDirigir + " | Pode dirigir!!");
} else {
    console.log(permissaoIdadeDirigir02 + " | Não pode dirigir!!");
}

// 4º Uso do if ... else ... else if ...

let desconto: number;
let itemContador: number = 14;

if (itemContador > 0 && itemContador <= 5) {
    desconto = 5;
} else if (itemContador > 5 && itemContador <= 10) {
    desconto = 10;
} else {
    desconto = 15;
}

console.log(`Desconto de ${ desconto }%`);

// 5º Uso ternário (? :) - if ... else

const idadeVotacao: number = 18;

const podeVotar = (idadeVotacao >= 18) ? 
    "Você é elegível para votar." : 
    "Você não é elegível para votar.";

console.log(podeVotar);
