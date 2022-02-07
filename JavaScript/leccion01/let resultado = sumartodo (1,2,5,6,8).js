


let resultado = sumartodo (5, 4, 10, 15, 20,82,85);
console.log (resultado);

function sumartodo()
{
    let sumar  = 0;

   for  (let i = 0; i < arguments.length; i++){

        sumar += arguments[i];

    }  
   return sumar;
}
 