// Exercício 23 — Verificando nota baixa
let notasEx23 = [7.5, 8.0, 5.5, 9, 6.5];
let temNotaBaixa = false;

for (let i = 0; i < notasEx23.length; i++) {
    if (notasEx23[i] < 6) {
        temNotaBaixa = true;
    }
}

if (temNotaBaixa) {
    console.log('Existe nota abaixo da média.');
} else {
    console.log('Todas as notas estão boas.');
}
