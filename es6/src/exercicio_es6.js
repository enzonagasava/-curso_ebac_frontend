const alunos = [
    { nome: 'Stefany', nota: 8 },
    { nome: 'Gustavo', nota: 5 },
    { nome: 'Ricardo', nota: 6 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Joana', nota: 4 }
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}
console.log(alunosAprovados(alunos));




