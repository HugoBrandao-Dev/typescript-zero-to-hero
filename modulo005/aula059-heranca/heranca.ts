class Animal {
    mover(distancia = 0) {
        console.log(`Animal se moveu...: ${ distancia } metros.`);
    }
}

class Cachorro extends Animal {
    latir() {
        console.log("Au, Au!");
    }
}

const cachorro = new Cachorro();
cachorro.latir();
cachorro.mover(15);
cachorro.latir();


class Pessoa {

    /*
    Não se difere da forma tradicional de criação da classe.

    Não precisa da atribuição, ficando:
    constructor(private nome: string, private sobrenome: string) {}
    */
    constructor(private nome: string, private sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    retornarNomeCompleto(): string {
        return `${ this.nome } ${ this.sobrenome }`;
    }

    apresentarPessoa(): string {
        return `Meu nome é ${ this.nome } ${ this.sobrenome }`;
    }
}

class Funcionario extends Pessoa {
    constructor (nome: string, sobrenome: string, private funcao: string) {
        super(nome, sobrenome);
        this.funcao = funcao;
    }

    retornarNomeCompleto_02(): string {
        return super.apresentarPessoa() + `. Sou ${ this.funcao }`;
    }
}

const funcionario = new Funcionario("Tobias", "de Oliveira", "Desenvolvedor de Software");
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCompleto());
console.log(funcionario.retornarNomeCompleto_02());
