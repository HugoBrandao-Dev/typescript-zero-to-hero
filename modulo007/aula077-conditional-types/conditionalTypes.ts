// Exemplo 01 - Conditional Types

type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
}

type EnderecoPessoa = {
    enderecoSecundario: string;
    cidade: string;
    pais: string;
}

type Empresa = {
    nome: string;
    cnpj: number;
}

type EnderecoEmpresa = {
    localizacao: "rua" | "avenida" | "praça";
}

// Verifica se T (tipo passsado) tem a propriedade endereço do tipo string
type EnderecoFinal<T> = T extends { endereco: string } ? EnderecoPessoa : EnderecoEmpresa;

// Pessoa será passado para T do EnderecoFinal.
const enderecoPessoa: EnderecoFinal<Pessoa> = {
    enderecoSecundario: "Rua 2",
    cidade: "São Paulo",
    pais: "Brasil"
}

const enderecoEmpresa: EnderecoFinal<Empresa> = {
    localizacao: "rua"
}

console.log(enderecoPessoa);
console.log(enderecoEmpresa);

// Exemplo 02 - Corditional Types

type FormatoArquivo = "png" | "jpg" | "gif" | "svg" | "mp4" | "mp3";

type FiltrarArquivoAudio<T> = T extends "mp4" | "mp3" ? T : never;

type ArquivoAudio = FiltrarArquivoAudio<FormatoArquivo>;

// Dá erro, pq "gif" não é audio;
// const arquivoAudio: ArquivoAudio = "gif";
const arquivoAudio2: ArquivoAudio = "mp4";

console.log(arquivoAudio2);
