import { fibonacci } from "./fibonacci";

describe("fibonacci", () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
  ])("when given %i returns %i", (i, expected) => {
    const result = fibonacci(i);

    expect(result).toBe(expected);
  });

  it("does not explode when given a very high number", () => {
    const result = fibonacci(50);

    expect(result).toBe(12586269025);
  });
});
