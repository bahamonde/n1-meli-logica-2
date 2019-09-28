const r = require("readline-sync");


let precoDolar = parseInt(r.question("Digite preco do dolar em reais: "))
let reais = parseInt(r.question("Digite quantos reais voce tem para trocar por dolar : "))

let resultado = reais / precoDolar;

console.log("1 dolar custa "+ precoDolar + " reais")

console.log("A troca de "+ reais + " reais vai retormar " + resultado + " dolares")


