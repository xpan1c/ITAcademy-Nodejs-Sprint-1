//Nivel 1
//Ex. 1
let nameOne = "Juan";
let nameTwo = "Olaf";
((n, m) => {
  console.log(n + " " + m);
})(nameOne, nameTwo);
//Nivel 2
//Ex. 1
const a = (nombre) => ({ nombre: nombre });
let b = a("danny");
console.log(b.nombre);
//Ex. 2
class Persona {
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
//Ex 1.
class Vehiculo {
  constructor(ruedas) {
    this.ruedas = ruedas;
    if (new.target == Vehiculo) {
      throw new TypeError("Cannot construct instances directly");
    }
  }
}
class Coche extends Vehiculo {
  constructor(ruedas) {
    super(ruedas);
  }
}
class Moto extends Vehiculo {
  constructor(ruedas) {
    super(ruedas);
  }
}
function builder(ruedas, type) {
  switch (type) {
    case "type1":
      return new Coche(ruedas);
    case "type2":
      return new Moto(ruedas);
    default:
      throw new Error("Invalid type");
  }
}
const objOne = builder(2, "type2");
const objTwo = builder(4, "type1");

console.log(objOne);
console.log(objTwo);
