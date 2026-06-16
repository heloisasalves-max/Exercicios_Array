// Exercício 21 — Aprovados e reprovados
let notasEx21 = [8, 5, 6, 7, 4, 9];
for (let i = 0; i < notasEx21.length; i++) {
    if (notasEx21[i] >= 6) {
        console.log('Nota ' + notasEx21[i] + ': Aprovado');
    } else {
        console.log('Nota ' + notasEx21[i] + ': Reprovado');
    }
}
