var nombre = "Fausto Gómez"
var edad = 34
var profesion = "Ingeniero de sistemas"

/* var concatenacion = "Mi nombre es " + nombre + " tengo " + edad + " años " + " y soy " + profesion

var presentacion = `Mi nombre es ${nombre} tengo ${edad} años y soy ${profesion}`

var div_presentacion = document.getElementById("presentacion")

div_presentacion.innerHTML = presentacion

var div_datos = document.getElementById("datos")

div_datos.innerHTML = `<h3>Datos laborales</h3>
    <p><strong>Empresa:</strong> Ingeniería FVM</p>
    <p><strong>Tiempo Laborado:</strong>2013-2021</p>
`

if (edad >= 18) {
    div_presentacion.innerHTML += '<p>Eres Mayor de Edad</p>'
} else {
    div_presentacion.innerHTML += '<p>Eres Menor de Edad</p>'
}

for (var i = 2000; i<= 2020; i++) {
    div_datos.innerHTML += `<p>Recorrimos el año ${i}`
} 

*/
function muestraNombre (nombre, edad, profesion) {
    var misDatos = `
        Mi nombre es ${nombre} tengo ${edad} años y soy ${profesion}
    `
    return misDatos
}

function imprimir() {
    var datos = document.getElementById("presentacion")
    datos.innerHTML = muestraNombre("Fausto Gómez", 33, "Ingeniero de sistemas")
}

imprimir()

var nombres = ["Victor", "Antonio", "Joaquin"]

document.write("<h2>Listado de nombres</h2><ol>")

/*
 for (i=0; i <ol nombres.length; i++){
    document.write('<li>' + nombres[i])
} */

nombres.forEach(function(nombre) {
    document.write("<li>" + nombre)    
})
document.write("</ol>")

//Objetos

var coche = {
    modelo: "Kia Picanto",
    antiguedad: 2020,
    maxima: 160,
    mostrarDatos() {
        console.log(this.modelo, this.antiguedad, this.maxima)
    },
    fabricante: "Kia"
}

document.write(`<p> ${coche.modelo} </p>`)

coche.mostrarDatos()

//Promise - Promesas

var saludar = new Promise((resolve, reject) => {

    setTimeout(() => {
        let saludo = "Hola muy buenas a todos chavales !!!"
        saludo = false
        if (saludo){
            resolve(saludo)
        }else{
            reject('No hay saludo disponible')
        }
    }, 2000)

})

saludar.then(resultado => {
    //alert(resultado)
})
.catch(err => {
    //alert(err)
})




