//Nivel 1
//Ex. 1
let user = "Pepe";
function userName(name) {
  console.log(name);
}
userName(user);
//Nivel 2
//Ex. 1
let nombre = "Danny";
let lastName = "Mejia";
console.log(`${nombre} ${lastName}`);
//Ex 2.
function value(){
  return 5;
}
console.log(`el valor es ${value()}`)
//Nivel 3
//Ex. 1
let arr = [];
for(let i = 0; i < 10; i++){
  arr.push(()=>{
   for(let i = 0; i < 10; i++){
      console.log(i);
    }
  })
}
arr.forEach(element =>
  element()
);
//Ex. 2
const naming = (function(nombre) {
  console.log(nombre); 
})(user);
