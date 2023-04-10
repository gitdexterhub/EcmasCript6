
//Es de esta forma que podriamos acceder a los valores almancenados dentro de los arrays.

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a,b);

//Posteriormente tenemos la forma en la que se hacia anteriormente combinada con la actual.

let fruits2 = ['Apple', 'Banana'];
let [x, y] = fruits2;
console.log(x, fruits2[1]);

//TENEMOS SU USO EN OBJETOS, donde podemos acceder por nuevas variables.

let user = {username: 'Oscar', age: 34};
let {username, age} = user;
console.log(username, age);

//Para acceder a los valores de propiedad combinada con la actual.

let user2 = {username: 'Oscar', age: 34};
let {username2, age2} = user;
console.log(username2, user.age);