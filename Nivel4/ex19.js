// Exercício 19 — Menor número
let numerosEx19 = [25, 5, 67, 12, 3, 44];
let menor = numerosEx19[0];
for (let i = 1; i < numerosEx19.length; i++) {
    if (numerosEx19[i] < menor) {
        menor = numerosEx19[i];
    }
}
console.log('O menor número é: ' + menor);
