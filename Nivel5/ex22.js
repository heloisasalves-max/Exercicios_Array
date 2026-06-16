// Exercício 22 — Procurando um produto
let produtosEx22 = ['Pastel', 'Suco', 'Coxinha', 'Chocolate'];
let produtoBuscadoEx22 = 'Coxinha';
let encontradoEx22 = false;

for (let i = 0; i < produtosEx22.length; i++) {
    if (produtosEx22[i] === produtoBuscadoEx22) {
        encontradoEx22 = true;
    }
}

if (encontradoEx22) {
    console.log('Produto encontrado!');
} else {
    console.log('Produto não encontrado.');
}
