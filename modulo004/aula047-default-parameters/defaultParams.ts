function descontoCompra(preco: number, desconto: number = 0.08) {
    return preco * (1 - desconto);
}

console.log("100 - 8% = " + descontoCompra(100));
console.log("100 - 50% = " + descontoCompra(100, .5));

console.log();

function exibirSaudacao(nome: string, saudar: string = "Olá") {
    return `${ saudar }, ${ nome || "Alguém" }!`;
}

console.log(exibirSaudacao("Tobias"));
console.log(exibirSaudacao("Tobias", "Oi"));

function criarUsuario(
        nome: string, 
        dataNascimento: string, 
        sexo: string = "M", 
        temVeiculo: boolean = true, 
        temCasaPropria: boolean = false
) {
    return `
Nome: ${ nome }
Data de Nascimento: ${ dataNascimento }
Sexo: ${ sexo }
Veículo: ${ temVeiculo ? "Sim" : "Não" }
Casa: ${ temCasaPropria ? "Sim" : "Não" }`}

console.log(criarUsuario("Dinorá de Oliveira", "15/10/1986", "F"));
console.log(criarUsuario("Tobias de Oliveira", "05/04/1986", undefined, false, true));
