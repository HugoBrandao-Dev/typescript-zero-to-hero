interface Pessoa01 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string; // Pode DECLARAR, mas depois não pode modificar.
}

function onboarding01(pessoa: Pessoa01) {
    return (
        "Seja bem-vindo(a) " +
        pessoa.nome +
        "!" + 
        " Sua função aqui na empresa será " +
        pessoa.funcao +
        "." +
        " Você trabalhará com a linguagem " +
        pessoa.linguagem +
        "."
    );
}

console.log(onboarding01({
    nome: "Doralice",
    funcao: "Cruz",
    linguagem: "C# (C Sharp)",
    email: "dora@yahoo.com"
}))

const pessoa: Pessoa01 = {
    nome: "Hugo",
    funcao: "Desenvolvedor Web - Back-end",
    linguagem: "C# (C Sharp)",
    email: "hugo@bol.com.br"
}

// pessoa.email = "testando@gmail.com";

// Tipo de extensões (heranças)

interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filha extends Mae, Pai {
    idade: number;
}

const filha: Filha = {
    nome: "Tobias",
    sobrenome: "Oliveira",
    idade: 35
}

console.log(filha);

// Tipos de Interseções

interface Cachorro {
    tipo: string;
    latindo: boolean;
}

interface Gato {
    tipo: string;
    miando: boolean
}

type Animal = Cachorro & Gato;

const animal: Animal = {
    tipo: "Nome de cachorro",
    miando: true,
    latindo: true
}

console.log(animal);

// Generic Objects

type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: boolean;
}

const usuario: Usuario = {
    nome: 'Josias Cruz',
    email: 'josias@hotmail.com'
}

const admin: Admin = {
    nome: "Doralice Cruz",
    email: "dora_cruz@yahoo.com",
    admin: true
}

/*
function acessarSistema(usuario: Usuario): Usuario {
    return usuario;
}

console.log(acessarSistema(usuario));
*/

// <T> - Índica que é uma função genérica, podendo usar qualquer letra, mas o mais recomendado é o T.
function acessarSistema<T>(usuario: T): T {
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));
