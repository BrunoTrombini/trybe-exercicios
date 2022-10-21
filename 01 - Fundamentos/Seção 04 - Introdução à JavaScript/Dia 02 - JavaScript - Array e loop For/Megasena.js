let jogoDaPessoa = [1, 2, 3, 4, 5, 6];


let n1 = Math.floor(Math.random() * 60) +1;
let n2 = Math.floor(Math.random() * 60) +1;
let n3 = Math.floor(Math.random() * 60) +1;
let n4 = Math.floor(Math.random() * 60) +1;
let n5 = Math.floor(Math.random() * 60) +1;
let n6 = Math.floor(Math.random() * 60) +1;

let megaSena = [n1, n2, n3, n4, n5, n6];

console.log('Jogo da Pessoa = ');
for (let i = 0; i < jogoDaPessoa.length; i += 1) {
    console.log(jogoDaPessoa[i]);
}

console.log('Jogo da MegaSena = ');
for (let i = 0; i < megaSena.length; i += 1) {
    console.log(megaSena[i]);
}