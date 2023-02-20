//Nivel 1
//Ex 1.
const promise = () => {
  return new Promise((res, rej) => {
    if (Math.random() > 0.5) {
      res("Todo bien");
    } else {
      rej("Todo mal");
    }
  });
};
promise()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
//Ex 2
const stringChecker = (parametro, callback) => {
  console.log(callback(parametro));
};
const cb = (parametro) => {
  if (typeof parametro === "string") {
    return `El parametro ${parametro} es un String`;
  } else {
    return `El parametro ${parametro} no es un String`;
  }
};
stringChecker("Juan", cb);
stringChecker(2, cb);
//Nivel. 2
//Ex2 1
let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];
let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];
const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    let finder = employees.find((x) => x.id === id);
    if (finder) {
      resolve(finder);
    } else {
      reject("Try again");
    }
  });
};
getEmployee(5)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
getEmployee(2)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
//Ex. 2
const getSalary = (obj) => {
  return new Promise((resolve, reject) => {
    let finder = salaries.find((x) => x.id === obj.id);
    if (finder) {
      resolve(finder.salary);
    } else {
      reject("Id is not valid");
    }
  });
};

getSalary(employees[2])
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// Ex 3
//Nivel 3
//Ex 1
let employeeInfo = getEmployee(1)
  .then((res) => {
    console.log(`El nombre del empleado es ${res.name}`);
    return getSalary(res);
  })
  .then((res) => console.log(`Su  salario es de ${res}`))
  .catch((error) => console.log(error));

module.exports = {promise, stringChecker, getEmployee, getSalary};