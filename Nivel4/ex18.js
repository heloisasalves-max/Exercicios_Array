// Exercício 18 — Maior número
let numerosEx18 = [15, 42, 7, 89, 23, 54];
let maior = numerosEx18[0];
for (let i = 1; i < numerosEx18.length; i++) {
    if (numerosEx18[i] > maior) {
        maior = numerosEx18[i];
    }
}
console.log('O maior número é: ' + maior);
