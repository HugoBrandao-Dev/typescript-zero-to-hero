// Uso de Colchetes
let frutas: string[] = ["morango", "laranja", "cupuaçu", "maracujá", "abacaxi"];
console.log(frutas[2]);

// Uso de Array Object
let animais: Array<string> = ["macaco", "leão", "onça-pintada", "arara-azul-grande"];
console.log(animais[1]);

// Adicionando mais strings com método .push
let racas: Array<string> = ["humanos", "elfos", "elfos escuros", "anões"];
console.log(racas[1]);
racas.push("orcs");
console.log(racas[4]);

// Identificar o tamanho do array - método .length
console.log("Raças cadastradas: " + racas.length);

// Operador spread
let gradesL2: Array<number> = [20,40,52];
gradesL2 = [ ...gradesL2, 61, 76 ];
console.log(gradesL2);

// Array com laço de iteração + nova forma de se declarar array.
console.log("\n=> Big Swords");
let bigSwordsL2: string[] = new Array("zweihander", "claymore", "berserker blade", "guardian sword", "sword of ipos", "heaven divider");

function funcaoItems(items: string[]) {
    for (let index = 0; index < items.length; index++) {
        console.log(bigSwordsL2[index]);
    }
}

funcaoItems(bigSwordsL2);
