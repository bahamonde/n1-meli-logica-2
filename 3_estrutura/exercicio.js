//resposta aqui

var r = require("readline-sync");

var produtos = [
    {nome: "banana", tempoDeValidade: 300, congelado: true},
    {nome: "laranja", tempoDeValidade: 50, congelado: false},
    {nome: "pao de queijo", tempoDeValidade: 70, congelado: true},
    {nome: "sorvete", tempoDeValidade: 600, congelado: true}
];

var posicao = parseInt(r.question("Digite o produto que deseja (0 - banana, 1 - laranja, 2 - pao de queijo, 3 - sorvete): "));


var produtoSelecionado = produtos[posicao];

var diasParaVencer = parseInt(r.question("Digite quantos dias faltam para o vencimento do produto: "));

var porcentagem = (diasParaVencer * 100) / produtoSelecionado.tempoDeValidade;

if (porcentagem < 2){
    console.log("Descartar produto, muito proximo de vencer")
}

else if(porcentagem < 10 && produtos.congelado == false) {
    console.log("Desconto!  Produto não congelado e próximo da validade.")
}

else if (porcentagem < 5 && produtos.congelado == true) {
    console.log("Desconto! Produto congelado e próximo da validade.")

}else {
    console.log("Produto longe do vencimento.")
}





