//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

const kmPercorridos = 7000;
const quantidadeDeDias = 10;

const carro = 60;
const kmRodado = 0.15;

let diasTotal = kmPercorridos * kmRodado;
let kmTotal = quantidadeDeDias * carro;
let totalAPagar = diasTotal + kmTotal;
console.log(totalAPagar);
