
let person = {name: 'Oscar', age: 28};
let country = 'MX';

let data = { ...person, country} 
//De esta forma podemos almacenar la nueva variable como una propiedad de peron.

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3)

//Esta funcion recibe los parametros ...values recibe los 3 ultimos ya que el primero lo recibe num
//Luego podemos iclsuo operar con estos valores.

