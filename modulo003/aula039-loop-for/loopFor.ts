const nome: string = "hugo";
let nomeTransformado = "";
const letraProcurada = 'o';

/******************** FOR COM VARIÁVEL DE CONTROLE ********************/

for (let i = 0; i < nome.length; i++) {
    const letra: string = nome[i]!;

    // Se indice for PAR, maíuscula.
    if (i % 2 == 0) {
        nomeTransformado += letra.toLocaleUpperCase();
    } else {
        nomeTransformado += letra;
    }
}

console.log(nomeTransformado);
nomeTransformado = "";

/******************** FOR COM VARIÁVEL DE CONTROLE, MAS INVERTIDA ********************/

// Vai de traz para frente na string
for (let i = nome.length - 1; i >= 0; i--) {
    const letra: string = nome[i]!;

    // Se indice for IMPAR, mainuscula.
    if (i % 2 == 1) {
        nomeTransformado += letra.toLocaleUpperCase();
    } else {
        nomeTransformado += letra;
    }
}

console.log(nomeTransformado);
nomeTransformado = "";

/******************** FOR OF ********************/

/*
FOR ... OF pega o valor
*/

// Transforma em uppercase somente a letra que está sendo procurada.
for (const c of nome.split('')) {
    let letra: string = c.toLocaleLowerCase();

    if (letra === letraProcurada) {
        nomeTransformado += letra.toLocaleUpperCase();
    } else {
        nomeTransformado += letra;
    }
}

console.log(nomeTransformado);
nomeTransformado = "";

/******************** FOR IN ********************/

/*
FOR IN pega o indice do array
*/

// Retira a letra procurada do nome
for (const i in nome.split('')) {
    const letra = nome[i]!.toLocaleLowerCase();

    if (letra !== letraProcurada) {
        nomeTransformado += letra;
    }

}

console.log(nomeTransformado);
