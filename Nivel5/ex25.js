// Exercício 25 — Lista de tarefas
let tarefas = ['Estudar JS', 'Lavar a louça', 'Ir à academia', 'Ler um livro', 'Fazer o jantar'];

console.log('--- Lista Inicial de Tarefas ---');
for (let i = 0; i < tarefas.length; i++) {
    console.log(tarefas[i]);
}

tarefas.push('Trabalhar no projeto');

console.log('--- Lista Atualizada ---');
for (let i = 0; i < tarefas.length; i++) {
    console.log(tarefas[i]);
}
