function somarNums(...nums: number[]) {
    return nums.reduce((a, b) => a + b);
}

console.log(somarNums(12, 21, 41));

function listarFrutas(frase: string, ...frutas: string[]) {
    return frase + ' ' + frutas.join(", ");
}

console.log();

console.log(listarFrutas("Tobias, vá na feita e compre as seguintes frutas:",
  "\nMaçã-Vermelha = 🍎",
  "\nMaçã-Verde = 🍏",
  "\nPera = 🍐",
  "\nPessego = 🍑",
  "\nCereja = 🍒",
  "\nMorango = 🍓",
  "\nUva = 🍇",
  "\nMelancia = 🍉",
  "\nBanana = 🍌",
  "\nLimao = 🍋",
  "\nLaranja = 🍊",
  "\nAbacaxi = 🍍",
  "\nManga = 🥭",
  "\nMelao = 🍈",
  "\nKiwi = 🥝",
  "\nAbacate = 🥑",
  "\nCoco = 🥥",
));

class Produtos {
    public exibirProdutos(...produtos: string[]): void {
        produtos.forEach(p => console.log(p));
    }
}

const departamentoInformatica: Produtos = new Produtos();

console.log("Produtos do departamento de informática disponíveis no estoque:");

departamentoInformatica.exibirProdutos("Mouse", "Teclado", "Monitor", "Gabinete", "Processador");
