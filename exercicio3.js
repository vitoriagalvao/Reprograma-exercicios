//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

const jantar = 100;
const taxa = 10;

const valorGarcon = jantar * (10 / 100);
let valorAserPago = valorGarcon + jantar;
console.log(valorAserPago);
