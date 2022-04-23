const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  test("init with 0", () => {
    expect(cal.value).toBe(0);
  });

  test("sets", () => {
    cal.set(7);
    expect(cal.value).toBe(7);
  });

  test("clear", () => {
    cal.set(7);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  test("add", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  test("add throw Error when over 100", () => {
    expect(() => {
      cal.set(10);
      cal.add(100);
    }).toThrow();
  });

  test("subtract", () => {
    cal.set(1);
    cal.subtract(2);
    expect(cal.value).toBe(-1);
  });

  test("multiply", () => {
    cal.set(1);
    cal.multiply(3);
    expect(cal.value).toBe(3);
  });

  describe("divides", () => {
    test("0/ 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    test("1/0 === NaN", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
  });
});
