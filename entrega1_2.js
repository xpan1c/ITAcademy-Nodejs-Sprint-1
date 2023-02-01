//Nivel 1
//Ex. 1
let nameOne = "Juan";
let nameTwo = "Olaf";
((n, m)=>{
    console.log(n + " " + m)
})(nameOne,nameTwo);
//Nivel 2
//Ex. 1
const a = (nombre)=> ({nombre : nombre});
let b = a("danny");
console.log(b.nombre);
//Ex. 2
class Persona {
    constructor(name){
        this.name = name;
    }
    dirNom(){
        console.log(this.name);
    }
}
let user = new Persona("Jose");
user.dirNom();
//Nivel 3
//Ex 1.

