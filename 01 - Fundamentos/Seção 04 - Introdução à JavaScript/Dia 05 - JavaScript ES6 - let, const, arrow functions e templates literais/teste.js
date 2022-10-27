// function userInfo() {
//     let userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//     console.log(userEmail);
// }
// userInfo();

// if (true) {
//     // inicio do escopo do if
//     const userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20

// Com o template literals

// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');


let pessoa = {
    nome: 'Bruno',
    sobrenome: 'Trombini',
    anoDeNascimento: 1985
}
console.log(`Aluno ${pessoa.nome} ${pessoa.sobrenome}
Idade ${2022 - pessoa.anoDeNascimento}`);