abstract class Funcionario {
    constructor(
        private nome: string,
        private sobrenome: string
    ) {}

    abstract retornarSalario(): number;
    
    get retornarNomeCompleto(): string {
        return `${ this.nome } ${ this.sobrenome }`;
    }

    emitirContraCheque(): string {
        return `${ this.retornarNomeCompleto } - Salário: ${ this.retornarSalario().toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) }`;
    }
}

// Não se pode instanciar uma classe abstrata
// const func01 = new Funcionario();

class FuncionarioCLT extends Funcionario {
    constructor(nome: string, sobrenome: string, private salario: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const funcCLT01 = new FuncionarioCLT("Tobias", "de Oliveira", 18000);
const funcPJ01 = new FuncionarioPJ("Doralice", "Cruz", 150, 160);

console.log(funcCLT01.emitirContraCheque());
console.log(funcPJ01.emitirContraCheque());
