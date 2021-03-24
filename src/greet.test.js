import { greet } from "./greet";

describe("greet", () => {
  it("does not include a middle initial when not given a middle name", () => {
    const result = greet("Josh", "Goldberg");

    expect(result).toBe("Hello, Josh Goldberg!");
  });

  it("does includes a middle initial when not given a middle name", () => {
    const result = greet("Josh", "Kevin", "Goldberg");

    expect(result).toBe("Hello, Josh K. Goldberg!");
  });
});
