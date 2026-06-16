// Exercício 20 — Quantidade de números pares
let numerosEx20 = [1, 2, 3, 4, 5, 6, 7, 8];
let contadorPares = 0;
for (let i = 0; i < numerosEx20.length; i++) {
    if (numerosEx20[i] % 2 === 0) {
        contadorPares++;
    }
}
console.log('Quantidade de números pares: ' + contadorPares);
