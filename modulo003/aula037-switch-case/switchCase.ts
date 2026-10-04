const raca: string = "Orc"
let descricaoRaca: string;

const moeda: number = 10;
let descricaoMoeda: string;

switch (raca) {
    case "humano":
        descricaoRaca = "São a raça mais equilibrada do jogo, sem grandes fraquezas ou especializações extremas. Possuem a maior quantidade de vida (HP) e recuperação física, além de grande versatilidade para assumir qualquer papel, seja como guerreiros, tanques ou magos.";
        break;
    case "elfo":
        descricaoRaca = "Rápidos e ágeis, destacam-se pela maior velocidade de ataque físico, movimento e conjuração de magias (Cast Speed). Têm alta taxa de evasão e acerto crítico, porém possuem menor dano físico bruto e menor quantidade de vida.";
        break;
    case "elfo negro":
        descricaoRaca = "Focados em poder ofensivo puro, possuem a maior força física (STR) e o maior poder mágico (INT) de todo o jogo. Causam danos devastadores tanto em combate corpo a corpo quanto com magias, mas compensam isso com baixa vitalidade e defesa física reduzida.";
        break;
    case "Orc":
        descricaoRaca = "Possuem a maior quantidade de vida (HP) e mana (MP), além de uma excelente resistência física e física elemental. Embora ataquem e se movam de forma mais lenta, seus guerreiros e xamãs causam dano consistente e oferecem aprimoramentos (buffs) valiosos para grupo.";
        break;
    case "Anões":
        descricaoRaca = "Raça voltada exclusivamente para o combate físico e a economia do jogo, sem classes mágicas. Têm a maior capacidade de carga do inventário e são os únicos capazes de coletar materiais extras de monstros (Spoil) e fabricar equipamentos avançados (Craft).";
        break;
    default:
        descricaoRaca = "OPS! A raça não existe";
        break;
}

console.log(descricaoRaca);
console.log();

switch (moeda) {
    case 1:
        descricaoMoeda = "A moeda de R$ 0,01 tinha na cor cobre. Mas ela não existe mais :(";
        break;
    case 5:
        descricaoMoeda = "Tem nas cores prateada e cobre. R$ 0,05, atualmente, é o menor falor possível";
        break;
    case 10:
        descricaoMoeda = "Tem nas cores cobre e prata. R$ 0,10 é a mais comum de todas as moedas";
        break;
    case 25:
        descricaoMoeda = "A moeda de R$ 0,25 é a mais feia que tem :( Também pode ser encontrada nas cores prata e cobre";
        break;
    case 50:
        descricaoMoeda = "A única moeda que existe somente em uma cor (prateada) é a de R$ 0,50";
        break;
    case 100:
        descricaoMoeda = "Como você sabia que para chegar aqui precisava digitar 100? :O. Bom, essa moeda pode ser entrada nas cores prateada ou prateada com cobre no centro.";
        break;
    default:
        descricaoMoeda = "A moeda que você quer não existe. Talvez seja de R$ 0,01 centavo. Será que é ???";
}

console.log(descricaoMoeda);
