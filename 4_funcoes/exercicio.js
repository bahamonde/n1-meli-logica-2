//resposta aqui

var resp = require("readline-sync");

function soma (V1,V2) {
    var r = (V1+V2)
    return (r)
}

function subtracao (V1,V2) {
    var r = (V1-V2)
    return (r)
}

function multiplicacao (V1,V2) {
    var r = (V1*V2)
    return (r)
}

function divisao (V1,V2) {
    var r = (V1/V2)
    return (r)
}


var operacao = (resp.question("Digite o a operacao que deseja realizar (soma,subtracao, multiplicacao ou divisao): "));

var V1 = parseInt(resp.question("Digite o primeiro valor: "));

var V2 = parseInt(resp.question("Digite o segundo valor: "));

switch (operacao){
    case "soma":
        console.log(soma(V1,V2));
    break;
    case "subtracao":
        console.log(subtracao(V1,V2));
    break;
    case "multiplicacao":
        console.log(multiplicacao(V1,V2));
    break;
    case "divisao":
        console.log(divisao(V1,V2));
    break;
    default:
        console.log("Operacao invalida");
}
