let  hora = 19;
let mensage 

if  (hora >= 6 && hora <=11){
     mensage = " Buenos Dias";}

else if (hora >=12 && hora <=18){
    mensage = " Buenas tarde";
}
else if (hora >=19 && hora<=24)
{
    mensage = "Buenas Noches";
}
else if (hora>=0 && hora <= 6){
    mensage = "durmiendo";
}              
console.log(mensage)