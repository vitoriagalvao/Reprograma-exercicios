//Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

const mercadoria = 50;
const percentual = 20;

let desconto = mercadoria * (20 / 100);
const precoAPagar = mercadoria - desconto;

console.log(desconto, precoAPagar);
