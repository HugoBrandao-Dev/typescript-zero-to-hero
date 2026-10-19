// Exemplo 01 - Type Assertion

function exibirPrecoFinal(preco: number, desc: number, formatado: boolean): number | string {
    const precoComDesconto: number = preco * (1 - desc);

    return formatado ? precoComDesconto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : precoComDesconto;
}

const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string;
const descontoFinal2 = <number>exibirPrecoFinal(100, 0.05, false);

console.log(descontoFinal);
console.log(descontoFinal2);

// Exemplo 02 - Type Assertion

type Humano = {
    nome: string;
    idade: number;
    idioma: string;
}

const humano = {
    idade: 36,
    idioma: "Português"
}

const humano2 = humano as Humano;

// humano não tem o atributo 'nome' e, mesmo, assim humano2 não dá erro.
// console.log(humano2.nome.toUpperCase());

// Deste modo, dá erro (como esperado).
// const humano3: Humano = humano;
