// let fatorial = 1;
// for (let i = 1; i <= 10; i += 1) {
//     fatorial *= i;
// }
// console.log(fatorial);


// let word = 'trybe';
// let anagrama = [];

// for (let i = 0; i < word.length; i += 1) {
//     anagrama.unshift(word[i]);
// }
// console.log(anagrama);


// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let i = 0; i < array.length; i += 1) {
//     if (maiorPalavra.length < array[i].length) {
//         maiorPalavra = array[i];
//         console.log(`Maior palavra é ${maiorPalavra} !`);
//     }
// }
// for (let i = 0; i < array.length; i += 1) {
//     if (menorPalavra.length > array[i].length) {
//         menorPalavra = array[i];
//         console.log(`Menor palavra é ${menorPalavra} !`);
//     }
// }


let maiorPrimo = 0;

for (let numero = 2; numero <= 50; numero += 1) {
    primo = true;
    for (let divisor = 2; divisor < numero; divisor += 1) {
        if (numero % divisor === 0) {
            primo = false;
        }
    }
    if (primo) {
        maiorPrimo = numero;
}
}
console.log(maiorPrimo);