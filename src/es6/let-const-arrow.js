// Declaración de variables
var nameVar; 
let nameLet;

// Asignación de variables
nameVar= "soy var";
nameLet = "soy let";

const pi  // SyntaxError: Missing initializer in const declaration.
pi = 3.14

var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// Re-declaración de variables
var nameVar = "var soy" 
console.log(nameVar) // 'var soy'

let nameLet = "let soy" // SyntaxError: Identifier 'nameLet' has already been declared.
//
const nameConst = "const soy" //SyntaxError: Identifier 'nameConst' has already been declared.

var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// Re-asignación de variables
nameVar = "otro var"
console.log(nameVar) // 'otro var'

nameLet = "otro let"
console.log(nameVar) // otro let'

nameConst = "otro const" //TypeError: Assignment to constant variable.

{
    var nameVar = "soy var"
    let nameLet = "soy let"
    }
    
    console.log(nameVar) // 'soy var'
    console.log(nameLet) // ReferenceError: nameLet is not defined

    var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

globalThis.nameVar   // 'soy var'
globalThis.nameLet   // undefined
globalThis.nameConst  // undefined

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
