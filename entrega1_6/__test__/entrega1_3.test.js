const entrega1_3 = require("../app/entrega1_3");

let mrMock;

beforeAll(() => {
  mrMock = Math.random;
  Math.random = jest.fn(() => 0.7);
});

afterAll(() => {
  Math.random = mrMock;
});
describe("Test promise function", () => {
  test("Check function promise resolve correctly", () => {
    return entrega1_3.promise().then((result) => {
      expect(result).toEqual("Todo bien");
    });
  });

  test("Check function promise reject correctly", () => {
    return entrega1_3.promise().catch((error) => {
      expect(error).toEqual("Todo mal");
    });
  });
});
describe("Test stringChecker function", () => {
  test("Check function stringChecker calls correctly to callback when the parameter is a String", () => {
    const cb = jest.fn(); // Crea una función espía para el callback
    entrega1_3.stringChecker("Juan", cb);
    expect(cb).toHaveBeenCalledWith("Juan"); // Verifica que el callback fue llamado correctamente
  });

  test("Check function stringChecker calls correctly to callback when the parameter is not a String", () => {
    const cb = jest.fn();
    entrega1_3.stringChecker(2, cb);
    expect(cb).toHaveBeenCalledWith(2);
  });
});
describe("Test getEmployee function", () => {
  test("Should return the employee object when a valid ID is provided", () => {
    const validId = 1;
    return entrega1_3.getEmployee(validId).then((result) => {
      expect(result).toEqual({ id: 1, name: "Linux Torvalds" });
    });
  });

  test("should reject the promise when an invalid ID is provided", () => {
    const invalidId = 5;
    return entrega1_3.getEmployee(invalidId).catch((error) => {
      expect(error).toBe("Try again");
    });
  });
});

describe("Test getSalary function", () => {
  test("Should return the salary of an employee when a valid employee object is provided", () => {
    const validEmployee = { id: 2, name: "Bill Gates" };
    return entrega1_3.getSalary(validEmployee).then((result) => {
      expect(result).toBe(1000);
    });
  });

  test("should reject the promise when an invalid employee object is provided", () => {
    const invalidEmployee = { id: 4, name: "Elon Musk" };
    return entrega1_3.getSalary(invalidEmployee).catch((error) => {
      expect(error).toBe("Id is not valid");
    });
  });
});

