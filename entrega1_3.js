//Nivel 1
//Ex 1.
const promise = function (resolve, reject){
    return new Promise((res, rej) => {
        if (Math.random()  > 0.5)  {
            res(resolve());
        }else{
            rej(reject());
        }
    });
}
const correcto = () => "Todo bien";
const mal = () => "Todo mal";
promise(correcto,mal)
.then( message => console.log(message))
.catch(error => console.log(error));
//Ex 2
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
//Nivel. 2
//Ex2 1
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];
const getEmployee = id => {
    return new Promise((resolve, reject) => {
        let finder = x => x.id === id;
        if(employees.some(finder)){
            resolve(employees.find(finder));
        }else{
            reject("Id is not valid")
        }
    })
}
let zero = getEmployee(0)
.then( message => console.log(message))
.catch(error => console.log(error));
let two = getEmployee(2)
.then( message => console.log(message))
.catch(error => console.log(error));
//Ex. 2
const getSalary = obj => {
    return new Promise((resolve, reject) => {
        let finder = x => x.id === obj.id;
        if(salaries.some(finder)){ 
            resolve(salaries.find(finder).salary);
        }else{
            reject("Id is not valid")
        }
    })
}

let salaryOne = getSalary(employees[2])
.then( message => console.log(message))
.catch(error => console.log(error));

// Ex 3
//Nivel 3
//Ex 1
let employeeInfo = getEmployee(1)
.then(res => {
    console.log(`El nombre del empleado es ${res.name}`);
    return getSalary(res);
})
.then(res =>
    console.log(`Su  salario es de ${res}`))
.catch(error => console.log(error));
