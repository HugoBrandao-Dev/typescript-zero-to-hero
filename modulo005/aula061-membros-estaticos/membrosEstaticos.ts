// Propriedade Estática
class Funcionario {
    static contratacoes = 0;

    constructor(
        private nome: string,
        private sobrenome: string,
        private titulo: string
    ) {
        Funcionario.contratacoes++;
    }
}

const func_01 = new Funcionario("Tobias", "de Oliveira", "Front-End Developer");
const func_02 = new Funcionario("Doralice", "Cruz", "Back-End Developer");

console.log(Funcionario.contratacoes);
console.log();

// Método Estático

class Animal {
    private static individuos = 0;

    constructor (
        private especie: string,
        private genero: string,
        private subfamilia: string
    ) {
        Animal.individuos++;
    }

    public static retornarIndividuos() {
        return Animal.individuos;
    }
}

const animal_01 = new Animal("P. tigris", "Panthera", "Panthrinae");

console.log(Animal.retornarIndividuos());
console.log();

type Raca = "Human" | "Elf" | "Dark Elf" | "Orc" | "Dwarf";

class Character {
    public nome: string;
    public raca: Raca;
    public classe: string;
    public static QTD_CHAR = 0;

    constructor(nome: string, raca: Raca, classe: string) {
        this.nome = nome;
        this.raca = raca;
        this.classe = classe;

        Character.QTD_CHAR++;
        console.log(Character.QTD_CHAR);
    }

    public showStatus(): void {
        console.log(`
            Nome: ${ this.nome }
            Raça: ${ this.raca }
            Classe: ${ this.classe }
        `)
    }
}

const char_01 = new Character("Az0g", "Orc", "Shaman");
const char_02 = new Character("Legolas", "Elf", "Silver Ranger");


