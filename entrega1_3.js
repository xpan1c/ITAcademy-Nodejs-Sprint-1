//Nivel 1
//Ex 1.
function a(variable){
    return new Promise((resolve, reject) => {
        if (typeof variable === 'string')  {
            resolve("This argument is a String");
        }else{
            reject("This argument is not a String");
        }
    });
}

a(2)
.then( message => console.log(message))
.catch(error => console.log(error));

a("a")
.then( message => console.log(message))
.catch(error => console.log(error));
//Ex. 2
const stringChecker  = (parametro,callback)=>{
    console.log(callback(parametro));
}
const cb = parametro =>{
    if(typeof parametro === 'string'){
        return `El parametro ${parametro} es un String`;
    }else{
        return `El parametro ${parametro} no es un String`;
    }
}; 
stringChecker("Juan", cb);
stringChecker(2, cb);

