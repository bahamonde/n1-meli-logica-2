let r = require("readline-sync");

let nome = r.question("Qual seu nome: ");
console.log("olá " + nome);

let texto = " ";

do{
    texto = r.question("Digite algum comando ou 'tchau' para sair " )
    console.log( "Voce digitou: " + texto)

}while(texto != "tchau");


console.log("Tchau " + nome)
