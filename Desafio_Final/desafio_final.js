// Desafio final — Sistema simples da cantina

let cantina = ['Pastel', 'Suco', 'Coxinha', 'Chocolate', 'Pão de Queijo'];

console.log('--- Produtos Iniciais da Cantina ---');
for (let i = 0; i < cantina.length; i++) {
    console.log(cantina[i]);
}

cantina.push('Bolo de Pote');

cantina.shift();

cantina[1] = 'Esfiha';

console.log('--- Lista Atualizada da Cantina ---');
for (let i = 0; i < cantina.length; i++) {
    console.log(cantina[i]);
}

console.log('Quantidade final de produtos: ' + cantina.length);

let buscaProduto = 'Coxinha';
let existeProduto = false;

for (let i = 0; i < cantina.length; i++) {
    if (cantina[i] === buscaProduto) {
        existeProduto = true;
    }
}

if (existeProduto) {
    console.log("O produto '" + buscaProduto + "' foi encontrado na lista!");
} else {
    console.log("O produto '" + buscaProduto + "' não foi encontrado na lista.");
}
