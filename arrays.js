// // var listaDeCompras=[];

// // listaDeCompras[3]='Tomates';
// // listaDeCompras[1]='Lechuga';
// // //console.log(listaDeCompras);

// // var elementoDelArray =  listaDeCompras[1];

// // // console.log(elementoDelArray);

// // // console.log(listaDeCompras.length);

// // // Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
 console.log(nombres);

// // var colores=['Amarillo','Azul']
// // colores.push('Rojo'); //Push pone el valor al final del arreglo
// // colores.unshift('Verde');//unshift pone el valor al principio
// // colores.pop(); //Elimina el valor de la ultima posición
// // colores.shift();//Elimina el valor de la primer posición
// // console.log(colores);

// // var pintores=['Picasso','Velasquez','Van Gohg','Dali'];
// // var incluyeDali= pintores.includes('Monet');  Includes verifica si el arreglo si incluye un valor
// // console.log(incluyeDali);
// //Every
// var numeros=[7,6,8,9];
// var cumpleCondicion= numeros.every((num) => { //Every verifica si todos los elementos cumplen con unacondición
//     return num >5;
// });
// console.log(cumpleCondicion);


// //El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, 
// //dependiendo del parámetro divisor que indiquemos.

// // SPLIT
// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');

// console.log(palabraSeparada);

// //El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una 
// //misma cadena.
// // JOIN
// var palabraArreglada = palabraSeparada.join('');

// console.log(palabraArreglada);

// //El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.

// // FOREACH
// var numeros = [ 1, 2, 3, 4 ];
//numeros.forEach( (num) => { console.log(num) } )

// //El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. 
// //La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
// // MAP
// var numeros = [ 1, 2, 3, 4 ];
// var masUno = numeros.map( (num) => { return num + 1 } );

// console.log(masUno);

// FOR
// var arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

function encontrarP (string){
    var letras = string.split('')
    for(i=0;i < letras.length;i++){
        if(letras[i]==='p'){
            console.log('Se encontro la letra p')
        }
    }
}

encontrarP('Javascript');
encontrarP('pechene');
// WHILE
// var arr = [];
// while (arr.length < 5) {
//    arr.push('Morgan');
// }
// console.log(arr);

var numeros=[1,3,3]
// var resultado=0;

// for(i=0;i<numeros.length;i++){
//    suma=numeros[i];
//    resultado=suma + resultado;
   
// }
// promedio= resultado/numeros.length;
// console.log(promedio);

// numeroMasGrande=0
// for(i=0;i<numeros.length;i++){
//    if(numeroMasGrande < numeros[i]){
//       numeroMasGrande=numeros[i]
//    } 
// }
// console.log(numeroMasGrande);

// var num=980;
// var particion= num.toString();
// console.log(particion.charAt(0));

var meses= ['Enero','Febrero','Marzo','Abril','Mayo','Junio']
var Lista=[]

for(i=0;i < meses.length;i++){
    if(meses[i]==='Enero' || meses[i]==='Marzo' || meses[i]==='Noviembre'){
        Lista.push(meses[i]);
    }
}

console.log(Lista)

