// Exercício 17 — Média de notas
let notasEx17 = [7.0, 8.5, 6.0, 9.5];
let somaNotas = 0;
for (let i = 0; i < notasEx17.length; i++) {
    somaNotas += notasEx17[i];
}
let media = somaNotas / notasEx17.length;
console.log('A média é: ' + media);
