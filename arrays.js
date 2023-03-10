// var listaDeCompras=[];

// listaDeCompras[3]='Tomates';
// listaDeCompras[1]='Lechuga';
// //console.log(listaDeCompras);

// var elementoDelArray =  listaDeCompras[1];

// // console.log(elementoDelArray);

// // console.log(listaDeCompras.length);

// // Lenght
// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
// console.log(nombres);

// var colores=['Amarillo','Azul']
// colores.push('Rojo'); //Push pone el valor al final del arreglo
// colores.unshift('Verde');//unshift pone el valor al principio
// colores.pop(); //Elimina el valor de la ultima posición
// colores.shift();//Elimina el valor de la primer posición
// console.log(colores);

// var pintores=['Picasso','Velasquez','Van Gohg','Dali'];
// var incluyeDali= pintores.includes('Monet');  Includes verifica si el arreglo si incluye un valor
// console.log(incluyeDali);

var numeros=[7,6,8,9];
var cumpleCondicion= numeros.every((num) => { //Every verifica si todos los elementos cumplen con unacondición
    return num >5;
});
console.log(cumpleCondicion);