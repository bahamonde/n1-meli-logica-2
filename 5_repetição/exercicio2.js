let r = require("readline-sync");

let camadas = parseInt(r.question("Digite um numero ENTRE 1 e 9 para gerar uma piramide de estrelas: "))

let i = 0;
var estrelas = "";


for (let i = 0; i < camadas; i++){
    
    estrelas += "*";
    console.log(estrelas)

}
   






