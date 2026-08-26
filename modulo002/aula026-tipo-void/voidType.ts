import chalk from "chalk";

function logError(errorMsg: string): void {
    console.log(errorMsg);
}

const msgChalk = (msg: string, letra: string) => {
    let resultChalk: string = "";

    msg.split('').forEach(l => {
        resultChalk += l.toLocaleLowerCase() === letra.toLocaleLowerCase() ? chalk.bgGreen(l) : l;
    })

    return resultChalk;
}

function qtdLetra(msg: string, letra: string) { // O próprio TS já entende o retorno (passar o mouse em cima da função).
    let cont: number = 0;

    msg.split('').forEach(l => {
        if (l.toLocaleLowerCase() === letra.toLocaleLowerCase()) {
            cont++;
        }
    })

    console.log(msgChalk(msg, letra));
    return cont;
}

logError("O campo nome é obrigatório!!");

console.log(qtdLetra("Era uma vez", 'e'));
