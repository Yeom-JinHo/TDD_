const fetchProduct = require("../async.js");

describe("async", () => {
  test("async success", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  test("async fail", async () => {
    let product;
    try {
      product = await fetchProduct("error");
    } catch (e) {
      expect(e).toMatch("network error");
    }
  });
});
