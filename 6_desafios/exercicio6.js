array = [5, 37, 18, 59, 12, -5];




// array = [-33, -9, -7];

// var maior = -Infinity
// var menor = Infinity

// for (var i = 0; i < array.length; i++) {
//    if ( array[i] > maior ) {
//       maior = array[i];
//    }
// }


// ------------------------------------------------------------------------------------------

var maior = 0
var menor = 0
var i = 0

// for (var i = 0; i < array.length; i++) {
//     if ( array[i] > maior ) {
//        maior = array[i];
//     }
//  }



// for (var i = 0; i < array.length; i++) {
//     if ( array[i] < maior ) {
//        menor = array[i];
//     }
// }

do{
    if ( array[i] > maior ) {
    maior = array[i];
    
    }
    i++
    

}while(i < array.length)

console.log(maior)

// console.log(menor)