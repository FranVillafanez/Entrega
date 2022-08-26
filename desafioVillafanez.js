// Plantilla para crear un usuario
class Usuario {
    constructor(nombre, apellido, cargo) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.cargo = cargo
    }
}
// Arreglo para registrar un usuario y fecha
let registro = []
// Cuántos registros desea
let numeroRegistros = parseInt(prompt("Ingrese el número de registros que desea completar"))
// Condicional
for (let index = 0; index <= 10; index++) {
    cargaUsuario()
}
// Datos para recolectar y crear un usuario
function cargaUsuario(registro) {
    let empleadoNombre = prompt("Ingrese su nombre")
    let empleadoApellido = prompt("Ingrese su apellido")
    let empleadoCargo = prompt("Ingrese su cargo")
    let newUser = new Usuario (empleadoNombre, empleadoApellido, empleadoCargo)
    registro.push(newUser);
    console.log("Se agregó el usuario ", newUser)
}
// Cargar la fecha
class Fecha {
    constructor (día, mes, horas) {
        this.dia = día,
        this.mes = mes,
        this.horas = horas
    }
}
// Arreglo para registrar la fecha
let registroFecha = []
// Datos para recolectar la fecha
function name(registroFecha) {
    let diaFecha = prompt("Ingrese el día de la semana trabajado")
    let diaFechaNumero = parseInt(prompt("Ingrese el número del día"))
    let mesFecha = prompt("Ingresa el mes")
    let horasFecha = parseInt(prompt("Ingresa la cantidad de horas extra trabajadas"))
    let newDate = new Fecha (diaFecha, diaFechaNumero, mesFecha, horasFecha)
    registroFecha.pusch(newDate);
    console.log("Se agregó la fecha ", newDate)
}

