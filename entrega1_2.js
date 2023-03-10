//Nivel 1
//Ex. 1
const numberOne = 2;
const numberTwo = 4;
const suma = ((n, m) => n + m)(numberOne, numberTwo);
console.log(suma);
//Nivel 2
//Ex. 1
const a = (nombre) => ({ nombre: nombre });
let b = a("danny");
console.log(b.nombre);
class Persona {
  //Ex. 2
  constructor(name) {
    this.name = name;
  }
  dirNom() {
    console.log(this.name);
  }
}
let user = new Persona("Jose");
user.dirNom();
//Nivel 3
//Ex 1
class Vehiculo {
  constructor(nombre) {
    this.nombre = nombre;
    if (this.constructor === Vehiculo) {
      throw new Error("no se puede instanciar una clase abstracta");
    }
  }
  tipoMotor() {
    throw new Error("Este metodo debe ser implementado en una instancia");
  }
}

const creadorObj = (nombre) => {
  const obj = Object.create(Vehiculo.prototype);
  obj.nombre = nombre;
  return obj;
};

const moto = creadorObj("moto");
moto.tipoMotor = () => console.log("Electrico");

const coche = creadorObj("coche");
coche.tipoMotor = () => console.log("Combustión");

//const vh = new Vehiculo();

moto.tipoMotor();
console.log(moto.nombre);
coche.tipoMotor();
console.log(coche.nombre);

console.log({"vehiculo": moto instanceof Vehiculo});