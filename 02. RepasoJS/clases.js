class Coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo
        this.velocidad = velocidad
        this.antiguedad = antiguedad
    }

    aumentarVelocidad(){
        this.velocidad += 1
    }

    reducirVelocidad() {
        this.velocidad -= 1
    }
}

var coche1 = new Coche("BMW", 200, 2017)
var coche2 = new Coche("Audi", 350, 2020)
var coche3 = new Coche("Honda", 200, 2018)

console.log(coche1)
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
console.log(coche1)