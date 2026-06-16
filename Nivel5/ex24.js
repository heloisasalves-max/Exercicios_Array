// Exercício 24 — Contando notas acima da média
let notasEx24 = [6.5, 7.0, 8.5, 5.0, 9.0, 7.5];
let notasBoas = 0;

for (let i = 0; i < notasEx24.length; i++) {
    if (notasEx24[i] >= 7) {
        notasBoas++;
    }
}
console.log('Quantidade de notas boas: ' + notasBoas);
