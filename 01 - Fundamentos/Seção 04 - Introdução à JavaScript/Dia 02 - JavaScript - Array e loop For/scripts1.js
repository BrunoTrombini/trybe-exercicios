let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }


// let soma = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     soma += numbers[i];
// }
// console.log(soma);


// let soma = 0;
// let media = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     soma += numbers[i];
//     media = soma / numbers.length
// }
// console.log(media);


// let soma = 0;
// let media = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     soma += numbers[i];
//     media = soma / numbers.length
// }
// if (media > 20) {
//     console.log('valor maior que 20')
// }
// else {
//     console.log('valor menor que 20')
// }


// let maiorNumero = numbers[0]
// for (let i = 0; i < numbers.length; i += 1) {
//     if(numbers[i] > maiorNumero) {
//         maiorNumero = numbers[i]
//     }
// }
// console.log(maiorNumero);


// let valoresImpar = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 !== 0) {
//         valoresImpar += 1;
//     }
// }
//     if (valoresImpar === 0) {
//         console.log('nenhum valor ímpar encontrado')
//     }
//     else {
//         console.log(`Quantidade de números impares = ${valoresImpar}`);
//     }


let menorNumero = numbers[0]
for (let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] < menorNumero) {
        menorNumero = numbers[i]
    }
}
console.log(menorNumero);