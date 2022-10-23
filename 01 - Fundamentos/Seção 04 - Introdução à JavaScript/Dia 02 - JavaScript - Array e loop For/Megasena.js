let jogoDaPessoa = [1, 2, 3, 4, 5, 6];


let n1 = Math.floor(Math.random() * 60) +1;
let n2 = Math.floor(Math.random() * 60) +1;
let n3 = Math.floor(Math.random() * 60) +1;
let n4 = Math.floor(Math.random() * 60) +1;
let n5 = Math.floor(Math.random() * 60) +1;
let n6 = Math.floor(Math.random() * 60) +1;

let megaSena = [n1, n2, n3, n4, n5, n6];

console.log('Jogo da Pessoa = ');
for (let iJogo = 0; iJogo < jogoDaPessoa.length; iJogo += 1) {
    console.log(jogoDaPessoa[iJogo]);
}

console.log('Jogo da MegaSena = ');
for (let iMega = 0; iMega < megaSena.length; iMega += 1) {
    console.log(megaSena[iMega]);
}

let acertos = 0;

for (let iJogo = 0; iJogo < jogoDaPessoa.length; iJogo += 1) {
    for (let iMega = 0; iMega < megaSena.length; iMega += 1) {
        if (jogoDaPessoa[iJogo] == megaSena[iMega]) {
            acertos += 1;
        }
    }
}

console.log("Você acertou", acertos, "número(s)")