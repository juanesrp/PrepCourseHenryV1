   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var string= "The Henry Challenge is close!"
   var reverso=string.split(' ')
   var frasereverse=reverso.map(palabra => palabra.split('').reverse().join(''));

   console.log(frasereverse.join(' '))


   var n = 5;
   console.log(Math.floor(n/2))