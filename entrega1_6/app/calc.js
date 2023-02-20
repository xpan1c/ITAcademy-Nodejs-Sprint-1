const validator = function (...numbers) {
  if (!numbers.every((number) => typeof number === "number")) {
    throw new Error("No es un numero");
  }
};
const add = function (...numbers) {
  validator(...numbers)
  return numbers.reduce((acc, cv) => acc + cv,0);
};
const subtract = function (...numbers) {
  validator(...numbers)
  return numbers.reduce((acc, cv) => acc - cv);
};
const multiply = function (...numbers) {
  validator(...numbers)
  return numbers.reduce((acc, cv) => acc * cv, 1);
};
const divide = function (...numbers) {
  validator(...numbers)
  return numbers.reduce((acc, cv) => acc / cv);
};
/*
const divide = function (...numbers) {
  let res = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (typeof numbers[index] !== "number") {
      throw new Error("No es un numero");
    }
    index === 0 ? (res = numbers[0]) : (res -= numbers[index]);
  }
  return res;
};

const multiply = function (...numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (typeof numbers[index] !== "number") {
      throw new Error("No es un numero");
    }
    index === 0 ? (res = numbers[0]) : (res *= numbers[index]);
  }
  return res;
};

const divide = function (...numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (typeof numbers[index] !== "number") {
      throw new Error("No es un numero");
    }
    index === 0 ? (res = numbers[0]) : (res /= numbers[index]);
  }
  return res;
};

*/
module.exports = { add, subtract, multiply, divide };
