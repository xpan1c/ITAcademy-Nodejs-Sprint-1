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
class Abstract{
    constructor() {
        if(new.target == Abstract){
            throw new TypeError("Cannot construct instances directly");
        }  
    }
}
const ab = new Abstract();
console.log(ab);
class TypeOne extends Abstract{
    constructor(){
        super();
    }
}
class TypeTwo extends Abstract{
    constructor() {
        super();
    }
}
function builder(type){
    switch(type){
        case "type1":
            return new TypeOne();
        case "type2":
            return new TypeTwo();
        default:
            throw new Error("Invalid type");
    }
    return new Abstract();
}
const objOne = builder("type1");
console.log(objOne);

