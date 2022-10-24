// let fatorial = 1;
// for (let i = 1; i <= 10; i += 1) {
//     fatorial*= i;
// }
// console.log(fatorial);


let word = 'trybe';
let anagrama = [];

for (let i = 0; i < word.length; i += 1) {
    anagrama.unshift(word[i]);        
}
console.log(anagrama);