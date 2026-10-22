// Exemplo 01: Satisfies Operator

type NomeCidade = "São Paulo" | "Rio de Janeiro" | "Belo Horizonte" | "Cuiabá";

type CidadeCoordenada = {
    x: number;
    y: number;
}

type Cidade = NomeCidade | CidadeCoordenada;

type Pessoa = {
    localNascimento: Cidade;
    residenciaAtual: Cidade;
}

const pessoa = {
    localNascimento: "Rio de Janeiro",
    residenciaAtual: {
        x: 22,
        y: 67
    }
} satisfies Pessoa;

console.log(pessoa.localNascimento.toUpperCase());

// Exemplo 02: Satisfies Operator

type Connection = {}

declare function createConnection(
    host: string,
    port: string,
    reconnect: boolean,
    poolSize: number
): Connection;

type Configuration = {
    host: string;
    port: string | number;
    tryReconnect: boolean | (() => boolean);
    poolSize ?: number
};

const config: Configuration = {
    host: "localhost",
    port: 2121,
    tryReconnect: () => true
}

function connect() {
    let { host, port, tryReconnect, poolSize } = config;

    if (typeof port === "number") port = `${ port.toString() }`;
    if (typeof tryReconnect !== "boolean") tryReconnect = tryReconnect();
    if (!poolSize) poolSize = 10;

    createConnection(host, port, tryReconnect, poolSize);
}
