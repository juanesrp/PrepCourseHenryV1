function cuidadoConElConsoleLog(nombre) {
    return nombre;
    console.log(nombre);/*Lo que haya después de un return no se ejecutará*/
  }

function otraFuncion(){
return(
    "El nombre retornado por la funcion 'Cuidado con el 'cuidadoconelconsolelog' es: "
     + cuidadoConElConsoleLog('Camilo') );
}
