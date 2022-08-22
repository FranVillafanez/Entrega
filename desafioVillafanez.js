class Usuario {
    constructor(nombre, apellido, cargo) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.cargo = cargo
    }
}
let empleadoNombre = prompt("Ingrese su nombre")
let empleadoApellido = prompt("Ingrese su apellido")
let empleadoCargo = prompt("Ingrese su cargo")
let newUsuario = new Usuario (empleadoNombre, empleadoApellido, empleadoCargo)
console.log(newUsuario)

class Fecha {
    constructor (día, mes, horas) {
        this.dia = día,
        this.mes = mes,
        this.horas = horas
    }
}
let diaFecha = prompt("Ingrese el día de la semana trabajado")
let diaFechaNumero = parseInt(prompt("Ingrese el número del día"))
let mesFecha = prompt("Ingresa el mes")
let horasFecha = parseInt(prompt("Ingresa la cantidad de horas extra trabajadas"))
let newHorasExtra = new Fecha (diaFecha, diaFechaNumero, mesFecha, horasFecha)

console.log(newHorasExtra)

let ayudante = 300;
let redactor = 500;
let columnista = 1000;
