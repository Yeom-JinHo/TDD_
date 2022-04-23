const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("it create empty", () => {
    expect(stack.size()).toBe(0);
  });

  test("allows to push item", () => {
    stack.push("🥕");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    test("thorws an error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });

    test("basic pop", () => {
      stack.push("🥕");
      stack.push("🔥");

      expect(stack.pop()).toBe("🔥");
      expect(stack.size()).toBe(1);
    });
  });

  describe("peek", () => {
    test("thorws an error if stack is empty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("Stack is empty");
    });

    test("basic peek", () => {
      stack.push("🥕");
      stack.push("🔥");

      expect(stack.peek()).toBe("🔥");
      expect(stack.size()).toBe(2);
    });
  });
});
