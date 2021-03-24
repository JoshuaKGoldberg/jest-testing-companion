import { getIntegers } from "./getIntegers";

describe("getIntegers", () => {
  it("parses integers from letters when the input is a string", () => {
    const result = getIntegers("a1b2c3d");
    expect(result).toBe("123");
  });

  it.skip("parses a negative integers when the input is negative", () => {
    const result = getIntegers("-ab12");
    expect(result).toBe("-12");
  });

  it.todo("Do we need to handle non-strings?");
});
