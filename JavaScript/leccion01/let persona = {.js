let persona = {
 nombre : ' calderon',
 Apellido : "pelito",
 Direccion: 'Villa mella',
 edad : '25',
 NombreEmpleado:function(){
    return thi.nombre + ""+this.Apellido;
 }
}

console.log(persona.NombreEmpleado) 
console.log(persona['Apellido']);


for (propiedad in persona){
    console.log(persona  );
    console.log(persona [propiedad])
    


}
 