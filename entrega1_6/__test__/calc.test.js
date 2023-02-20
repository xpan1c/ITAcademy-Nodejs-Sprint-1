const { add, subtract, multiply, divide } = require("../app/calc");

describe("Test add function", () => {
  test("Check add two parameters", () => expect(add(2, 4)).toBe(6));
  test("Check add more than two parameters", () =>
    expect(add(2, 4, 7)).toBe(13));
  test("Check add two negative parameters", () => expect(add(-2, -4)).toBe(-6));
  test("Check add same number, negative and positive equal zero", () =>
    expect(add(-30, 30)).toBe(0));
  test(`Throw error when you don't use numbers`, () => {
    expect(() => add("hola", true).toThrow(Error));
    expect(() => add(null, 2).toThrow(Error));
  });
});

describe("Test subtract function", () => {
  test("Check subtract two parameters", () => expect(subtract(2, 4)).toBe(-2));
  test("Check subtract more than two parameters", () =>
    expect(subtract(22, 4, 7)).toBe(11));
  test("Check subtract two negative parameters", () =>
    expect(subtract(-2, -4)).toBe(2));
  test("Check subtract same number, equal zero", () =>
    expect(subtract(30, 30)).toBe(0));
  test(`Throw error when you don't use numbers`, () => {
    expect(() => subtract("hola", true).toThrow(Error));
    expect(() => subtract(null, 2).toThrow(Error));
  });
});
describe("Test multiply function", () => {
  test("Check multiply two parameters", () => expect(multiply(2, 4)).toBe(8));
  test("Check multiply more than two parameters", () =>
    expect(multiply(22, 4, 7)).toBe(616));
  test("Check multiply even negative parameters equal positive", () =>
    expect(multiply(-2, -4)).toBe(8));
  test("Check multiply odd negative parameters equal negative", () =>
    expect(multiply(-2, -8, -4)).toBe(-64));
  test("Check multiply odd positve  and negative parameters equal negative", () =>
    expect(multiply(-2, 8)).toBe(-16));
  test("Check multiply with a zero, equal zero", () =>
    expect(multiply(30, 30, 0)).toBe(0));
  test(`Throw error when you don't use numbers`, () => {
    expect(() => multiply("hola", true).toThrow(Error));
    expect(() => multiply(null, 2).toThrow(Error));
  });
});

describe("Test divide function", () => {
  test("Check divide two parameters", () => expect(divide(4, 2)).toBe(2));
  test("Check divide more than two parameters", () =>
    expect(divide(100, 5, 2)).toBe(10));
  test("Check divide even negative parameters equal positive", () =>
    expect(divide(-10, -2)).toBe(5));
  test("Check divide odd negative parameters equal negative", () =>
    expect(divide(-100, -5, -2)).toBe(-10));
  test("Check divide odd positive  and negative parameters equal negative", () =>
    expect(divide(-8, 2)).toBe(-4));
  test("Check divide with a zero, equal infinite", () =>
    expect(divide(30, 30, 0)).toBe(Infinity));
  test(`Throw error when you don't use numbers`, () => {
    expect(() => divide("hola", true).toThrow(Error));
    expect(() => divide(null, 2).toThrow(Error));
  });
});
