    // // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    // let pessoa = {
    //     nome: 'Henri',
    //     idade: 20
    //   }
    //   pessoa = {
    //     nome: 'Luna',
    //     idade: 19
    //   } // Altere essa estrutura para corrigir o erro.
    //   console.log('Nome:', pessoa.nome);
    //   console.log('Idade:', pessoa.idade);


    // function numeroAleatorio() {
    //   return Math.random()
    // }
    // const numeroAleatorio = () => Math.random();
    // console.log(numeroAleatorio());


    // function hello(nome) {
    //   return `Olá, ${nome}!`
    // }
    // const hello = nome => `Olá, ${nome}!`
    // let nome = 'Ivan';
    // console.log(hello(nome));


    // function nomeCompleto(nome, sobrenome) {
    //   return `${nome} ${sobrenome}`
    // }
    // const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
    // let nome = 'Ivan';
    // let sobrenome = 'Pires';
    // console.log(nomeCompleto(nome, sobrenome));


    let speed = 90;
    // const speedCar = (speed) => {
    //   if (speed >= 120) {
    //     return `Você ultrapassou o limite de velocidade`;
    //   } else {
    //     return `Você está na velocidade permitida`;
    //   }
    // };
    const speedCar = (speed) => (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
    console.log(speedCar(speed));