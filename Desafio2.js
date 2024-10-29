//Dia Da semana

diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// Positivo ou negativo
let numero = prompt('Digite um número: ');
if (numero > 0) {
    alert('O número é positivo.');
}else {if (numero < 0) 
    alert('O número é negativo.');


}

//Pontuação

let pontuacao = 20

if (pontuacao => 100){
    console.log('Parabéns você ganhou.');
} else{
    console.log('Tente outra vez.');
}

// Saldo

let saldo = 1000
alert(`Seu saldo é R$${saldo}`);

// Nome

let nome = prompt('Qual o seu nome');
alert(`Seja bem vindo ${nome}`);
