// Fuencion constructor  de objectos de tipo casa
function persona (nombre,apellido,direcion){
 this .nombre =nombre;
 this.apellido = apellido;
 this.direcion=direcion;
 this.Nombrecompleto = function(){
     return this.nombre+""+this.apellido
 }
} 
let edificio = new persona('Apartamento','256','villa mella')
let casisa = new persona('calderon','joder tio','pelito');
console.log(casisa,edificio);
 