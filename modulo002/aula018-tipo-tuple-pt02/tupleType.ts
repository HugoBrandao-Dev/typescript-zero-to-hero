let listaCursosOnline: [string, ...string[]];
listaCursosOnline = ["SQL Completo", "Node.JS", "Curso de JavaScript"];

// <<nome>>, <<curso>>, <<semestreAtual>>, <<passou>>, <<cursosOnline>>
let cadastro: [string, string, number, boolean, ...string[]];
cadastro = ["Hugo Brandão", "Análise e Desenvolvimento de Sistemas", 2, true, ...listaCursosOnline];
console.log(cadastro);

function listarAlunos(nomes: string[], cursos: string[], anosTurmas: number[]) {
	if (nomes.length !== cursos.length || nomes.length !== anosTurmas.length) {
		throw new Error ("Há informações faltando!!!");
	}

	let result: any[] = [];

	for (let i = 0; i < nomes.length; i++) {
		result.push([nomes[i]!, cursos[i]!, anosTurmas[i]!]);
	}

	return result;
}

let result = listarAlunos([
		"Tobias",
		"Dinorá",
		"Josias",
		"Doralice"
	],
	[
		"Arquitetura",
		"Análise e Desenvolvimento de Sistemas",
		"Análise e Desenvolvimento de Sistemas",
		"Licenciatura em Matemática"
	],
	[
		2024,
		2025,
		2023,
		2026
	]);

console.log(result);

// Variações para o parâmetro
type Nome = 
	| [primeiroNome: string, sobrenome: string]
	| [primeiroNome: string, nomeMeio: string, sobrenome: string];

// A função pode receber duas formas de passagem de parâmetros.
function criarPessoa(...nome: Nome) {
	return [...nome];
}

console.log(criarPessoa("Tobias", "de", "Oliveira"));
console.log(criarPessoa("Josias", "Cruz"));
