/************* WHILE *************/

const taxSucesso: number = 0.8; // 1 = 100% | 0.5 = 50%
let encantamentoAtual: number = 0;
let tentativas: number = 0;

while (encantamentoAtual < 20) {

    // 0 a 3 e 100% de sucesso.
    if (encantamentoAtual < 3) {
        encantamentoAtual++;
    } else {
        if (Math.random() <= taxSucesso) {
            encantamentoAtual++;
        } else {

            // Se n tiver sucesso, volta a zero
            encantamentoAtual = 0;
        }
    }

    tentativas++;
}

console.log("O item está +" + encantamentoAtual);
console.log("Foram gastos:", tentativas, "encantamentos!");

console.log();

/************* DO ... WHILE *************/

let contador: number = 0;

do {
    console.log(contador);
    contador++;
} while (contador < 10);
