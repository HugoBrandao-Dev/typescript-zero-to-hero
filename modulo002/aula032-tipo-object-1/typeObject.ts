const pessoa = {
    nome: "Josias",
    sobrenome: "Cruz",
    idade: 35,
    funcao: "Desenvolvedor"
}

console.log(pessoa);

function onboarding01(funcionario: { nome: string }) {
    return "Seja bem vindo(a), " + funcionario.nome;
}

console.log(onboarding01({nome: "Hugo"}));

// object nomeados

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa) {
    return (
        "Seja bem-vendo(a), " +
        pessoa.nome +
        "!" +
        " Sua função aqui na empresa será " +
        pessoa.funcao + 
        "."
    );
}

console.log(onboarding02({ nome: "Tobias", funcao: "Desenvolvedor Web Back-end" }));

// object com type alias

type PessoaType = {
    nome: string;
    funcao: string;
    linguagem: string;
}

function onboarding03(pessoa: PessoaType) {
    return (
        "Seja bem-vendo(a), " +
        pessoa.nome +
        "!" +
        " Sua função aqui na empresa será " +
        pessoa.funcao + 
        "." + 
        " Você trabalhará com a linguagem " + 
        pessoa.linguagem
    );
}

console.log(onboarding03({
    nome: "Josias Cruz",
    funcao: "Desenvolvedor Web Front-end",
    linguagem: "TypeScript"
}));

// usando optional no object

interface PessoaOptional {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string;
}

function onboarding04(pessoa: PessoaOptional) {
    return (
        "Seja bem-vendo(a), " +
        pessoa.nome +
        "!" +
        " Sua função aqui na empresa será " +
        pessoa.funcao + 
        "." + 
        " Você trabalhará com a linguagem " + 
        pessoa.linguagem +
        "." +
        (pessoa.email ? " O email informado foi " + pessoa.email : "")
    );
}

console.log(onboarding04({
    nome: "Dinorá",
    funcao: "DBA",
    linguagem: "SQL"
}));

console.log(onboarding04({
    nome: "Dinorá",
    funcao: "DBA",
    linguagem: "SQL",
    email: "dino@gmail.com"
}));
