// var deportes = {
//     conBalon: ['Futbol', 'Basketball', 'Golf'],
//     sinBalon: ['Boxeo', 'Surf', 'Trekking'],
//  };

 //ACCEDER
//  var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

//  console.log(persona.edad)
// // ASIGNAR
//  persona.nombre='Martin';
//  console.log(persona.nombre);
//  persona.edad=32;
// console.log(persona.edad)

//CREAR
// var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// console.log(autos);
// //BORRAR
// delete autos.marcas;
// console.log(autos);

// var misFunciones= {
//     saludar: function(){
//         console.log('Hola');
//     },
// };
// misFunciones.saludar();

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
//console.log(atuendos);

var comidas= {};

var diferenciaDeNotaciones= function(propUno,propDos){
    comidas[propUno]=['Vegetales','Frutas'];
    comidas[propDos]=['Hamburguesa','Pizzas']
}

diferenciaDeNotaciones('Saludables','NoSaludables')
console.log(comidas)
