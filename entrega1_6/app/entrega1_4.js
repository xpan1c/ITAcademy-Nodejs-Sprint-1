// Funciones y variables de la entrega1_3
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
    const finder = (x) => x.id === id;
    if (employees.some(finder)) {
      resolve(employees.find(finder));
    } else {
      reject("Id is not valid");
    }
  });
};
const getSalary = (obj) => {
  return new Promise((resolve, reject) => {
    const finder = (x) => x.id === obj.id;
    if (salaries.some(finder)) {
      resolve(salaries.find(finder).salary);
    } else {
      reject("Id is not valid");
    }
  });
};
// Nivel 1
// Ex 1
const employeeDetails = async (id) => {
  try {
    const employeeObj = await getEmployee(id);
    const employeeId = await getSalary(employeeObj);
    console.log(employeeObj.name);
    console.log(employeeId);
  } catch (error) {
    console.log(error);
  }
};
employeeDetails(1);
// Ex 2
const promised = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("data back from the server"));
    }, 2000);
  });
const getData = async () => await promised();
// Nivel 2
// Ex 1

const after2SecondsPromise = (num) =>
  new Promise((res, rej) => {
    setTimeout(() => res(num * 2), 2000);
    if (!num || typeof num !== "number") {
      rej("Necesitas un numero y que sea diferente de cero");
    }
  });

const after2Seconds = async (num) => {
  try {
    const c = await after2SecondsPromise(num);
    console.log(c);
  } catch (error) {
    console.log(error);
  }
};
after2Seconds(1);

const sumDoubles = async (numOne, numTwo, numThree) => {
  try {
    const a = await after2SecondsPromise(numOne + numTwo + numThree);
    console.log(a);
  } catch (error) {
    console.log(error);
  }
};
sumDoubles(3, 3, 3);
// Nivel  3
// Ex 1
employeeDetails(5);
after2Seconds(0);
after2Seconds("hola");
after2Seconds(null);
sumDoubles(0, 0, 0);
sumDoubles(0, 1, "0");

module.exports = {getData, promised}