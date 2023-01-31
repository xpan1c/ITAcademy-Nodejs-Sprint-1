//Nivel 1
//Ex. 1
let user = "pepe";
function userName(name) {
  console.log(name);
}
userName(user);
//Nivel 2
//Ex. 1
let name = "Danny";
let lastName = "Mejia";
console.log(`${name} ${lastName}`);
//Ex 2.
function value(){
  return 5;
}
console.log(`el valor es ${value()}`)
//Nivel 3
//Ex. 1
let arr = [];
for(let i = 0; i < 9; i ++){
  arr.push(function(){
    console.log(i);
  })
}
for(let i = 0; i < arr.length; i++){
  console.log(i)
}
/*
const  arr = function(){
  for
  return i;
}*/
//Ex. 2