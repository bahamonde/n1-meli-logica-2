let r = require("readline-sync");

let passos = 0
const meta = 500

while(passos < meta){
    passos += parseInt(r.question("informe a quantidade de passos: "))


}

console.log("Parabéns vc atingiu a meta: " + passos)

