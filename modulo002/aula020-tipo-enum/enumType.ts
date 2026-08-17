
// !!!!!!!!!!!!!!!!!!!!!!! EVITAR O USO DESSE TIPO !!!!!!!!!!!!!!!!!!!!!!

enum Idioma {
	Portugues,
	Ingles,
	Espanhol
}

console.log(Idioma);

console.log();

enum Dia {
	Domingo = "Dom",
	Segunda = "Seg",
	Terca = "Ter",
	Quarta = "Qua",
	Quinta = "Qui",
	Sexta = "Sex",
	Sabado = "Sab"
}

console.log(Dia.Segunda);
console.log(Dia);

const enum Fruta {
	Cupuacu,
	Maracuja,
	Morango,
	Tomate
}

function fruta(f: Fruta) {
	return "Melhores frutas!!";
}

console.log(fruta(Fruta.Cupuacu));
console.log(fruta(5));
console.log(fruta(Fruta.Maracuja));
