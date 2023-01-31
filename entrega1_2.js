//Nivel 1
//Ex. 1
let nameOne = "Juan";
let nameTwo = "Olaf";
((n, m)=>{
    console.log(n + " " + m)
})(nameOne,nameTwo);
//Ex 2.
const a = (nombre)=> ({nombre : nombre});
let b = a("danny");
console.log(b.nombre);