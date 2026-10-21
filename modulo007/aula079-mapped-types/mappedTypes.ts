type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
};

type UsuarioOpcional = {
    nome ?: string;
    endereco ?: string;
    telefone ?: string;
    idade ?: number;
};

type UsuarioLeitura = {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly idade: number;
    readonly apelido: string;
}

// ################################### MappedType

type UsuarioMappedTypeOpcional = {

    // O '?' torna as propriedades do novo tipo opcionais
    [P in keyof Usuario]?: Usuario[P]
}

const usuarioMappedTypeOpcional: UsuarioMappedTypeOpcional = {
    nome: "Tobias de Oliveira",
    endereco: "Rua Oliveira"
}

console.log(usuarioMappedTypeOpcional);

type UsuarioMappedTypeReadonlyKeyof = {

    // readonly torna as propriedades do novo tipo "somente leitura"
    readonly [P in keyof Usuario]: Usuario[P]
}

const usuarioMappedTypeReadonly: UsuarioMappedTypeReadonlyKeyof = {
    nome: "Dinorá",
    endereco: "Rua da dinorá",
    telefone: "22311111111",
    idade: 43
}

console.log(usuarioMappedTypeReadonly);

// As propriedades são readonly
// usuarioMappedTypeReadonly.nome = "Josias";

type UsuarioMappedTypeReadonlySimbolo = Readonly<Usuario>;

const usuarioMappedTypeReadonlySimbolo: UsuarioMappedTypeReadonlySimbolo = {
    nome: "Doralice",
    endereco: "Bairro Dora",
    telefone: "21911111111",
    idade: 54
}

console.log(usuarioMappedTypeReadonlySimbolo);
