// Throw Exception
function meuError(msg: string): never {
    throw new Error (msg);
}

console.log(meuError("Erro de mensagem - 01"));

function rejectMensagem() {
    return meuError("Erro de mensagem - 02");
}

console.log(rejectMensagem());

// Função que contém loopo infinito retorna o tipo 'never

const meuLoop = function() {
    while (true) {
        console.log("Xiii, travou.");
    }
}

// console.log(meuLoop());

// Tipo entre void e never

// No VSCode da professora, não dá erro de tipo da variável.
// const meuVoid: void = null;
// console.log(meuVoid);

// Dá erro (never não pode receber valor)
// const meuNever: never = null;
// console.log(meuNever);

