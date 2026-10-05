function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
    console.log("ID do funcionário...: ", idPessoa, "Nome...: ", nome);

    if (email !== undefined) console.log("E-mail...:", email);
}

informarDadosPessoa(1, "Tobias", "tobias@hotmail.com");
informarDadosPessoa(1, "Doralice");

function pedirBebida(msg: string, mistura?: string) {
    const horaPedido: string = new Date().toLocaleTimeString();

    console.log(horaPedido, msg, mistura || "Puro");
}

pedirBebida("Café", "com açucar e leite!");

type Pessoa = {
    id: number;
    nome: string;
    email?: string;
}

interface Animal {
    especie: string;
    raca: string;
}

const animal: Animal = {
    especie: "Cachorro",
    raca: "Pastor Alemão"
};

console.log(animal);

const pessoa: Pessoa = {
    id: 1,
    nome: "Josias de Oliveira",
    email: "josias@hotmail.com"
};

const pessoa2: Pessoa = {
    id: 2,
    nome: "Doralice Cruz"
};

console.log(pessoa);
console.log(pessoa2);
