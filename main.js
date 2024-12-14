import './css/estilos-1.css'

// ! Ejercicio 1:

let nombre  = 'Ian Franco'
let apellido  = 'Fariña Núñez'
let edad  = 18
let pais  = 'Argentina'
let conocimientos  = ['HTML', 'CSS']

console.log(nombre, apellido, edad, pais, conocimientos[0], conocimientos[1])

let edadAnterior = edad
edad = 19

conocimientos.push('JavaScript')

console.log(nombre, apellido, edad, pais, conocimientos[0], conocimientos[1], conocimientos[2])

// ! Ejercicio 2:

let marca = 'Chevrolet Corsa'
let velocidad = '250km/h'
let stock = 5
let modelo = ['Corsa Classic', 'Corsa II', 'Open Corsa']

let vehiculo = 'vehículo:'
let info = `Datos del ${vehiculo}`

console.log(info)
console.log('Marca:', marca)
console.log('Velocidad:', velocidad)
console.log('Stock:', stock)

for (let m = 0; m < modelo.length; m++) {
    console.log('modelo ' + m + ':'  + modelo[m])
}

// ! Ejercicio 3

let velocidadCoche = prompt('Velocidad actual')

if (velocidadCoche >= 60 ) {
    console.log('Necesitas bajar la velocidad')
} else {
    console.log('Buena velocidad, ¡sigue así!')
}

// ! Ejercicio 4

let sueldo = prompt('Ingrese su sueldo')

if (sueldo <= 40000) {
    console.log('Tu sueldo es muy bajo :(')
} else if (sueldo <= 60000) {
    console.log('Tu sueldo es bueno!')
} else if (sueldo <= 80000) {
    console.log('Tu sueldo es muy bueno!')
} else if (sueldo == 100000) {
    console.log('Tu sueldo es excelente :)')
}

// ! Ejercicio 5

let fechaNac = prompt('Ingrese su fecha de nacimiento:')

let edadAprox = 2024 - fechaNac

console.log('Usted tiene: ', edadAprox, ' años.')

// ! Ejercicio 6

let n = prompt('Ingrese un número entero para saber su tabla de multiplicar:')

for (let i = 1; i <= 10; i++) {
    let resultado = n * i
    console.log(n + ' x ' + i + ' = ' + resultado)
}

// ! Ejercicio 7 

let num = prompt('Ingrese un número entero:')

if ((num / 2 ) * 2 === num) {
    console.log('El número ' + num + ' es par')
    console.warn('El número ' + num + ' es par')
} else {
    console.log('El número ' + num + ' es impar')
    console.warn('El número ' + num + ' es impar')
}