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
// Nivel 1
// Ex 1
const employeeDetails = async (id) => {
    let employeeObj = await getEmployee(id);
    let employeeId = await getSalary(employeeObj);
    console.log(employeeObj.name);
    console.log(employeeId);
}
employeeDetails(1);
// Ex 2
const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(console.log("data back from the server"));
    } , 2000);  
});
const twoSeconds = async () => {
    const pr = await promise();
}
// Nivel 2
// Ex 1


const doubleNumber = num => num*2;
const after2Seconds = num => new Promise ( 
    r => setTimeout( () => r(doubleNumber(num)), 2000));

(async () => {
    const result = await after2Seconds(2);
    console.log(result);
})();

const sumDoubles = async(numOne, numTwo, numThree) => {
    let one = await after2Seconds(numOne);
    let two = await after2Seconds(numTwo);
    let three = await after2Seconds(numThree);
    return one + two + three;
}
(async () => {
    const result = await sumDoubles( 1, 2, 3);
    console.log(result);
})();
/* n
const sumDouble = (numOne, numTwo, numThree) => {
    double(numOne) + double(numTwo) + double(numThree);
    return this;
}
console.log(sumDouble(2,4,6));
*/