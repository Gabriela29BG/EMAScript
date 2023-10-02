function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
  
  // es6
  function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
  };
  
  newFunction2();
  newFunction2('Ricardo', '23', 'CO');
  
  let hello = "Hello";
  let world = "World";
  let epicPhrase = hello + ' ' + world;
  console.log(epicPhrase);
  let epicPhrase2 = `${hello} ${world}`;
  console.log(epicPhrase2);

  //Función tradicional
function nombre (parámetros) {
  return valorRetornado
}

//Función flecha
const nombre = (parámetros) => {
  return valorRetornado
}

const porDos = num => {
  return num * 2
}

//Función tradicional
function suma (num1, num2) {
  return num1 + num2
}

//Función flecha
const suma = (num1, num2) => num1 + num2

const suma = (num1, num2) => (
  num1 + num2
)

//si solo tenemos un a sentencia y n soloparametro
const square = num => num * num;