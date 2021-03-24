import { consumer } from "./consumer";

jest.mock("./producer", () => {
  return {
    producer: () => 0.5,
  };
});

describe("consumer", () => {
  it("returns true when the input is greater than the producer's", () => {
    const result = consumer(1);

    expect(result).toBeTrue();
  });

  it("returns false when the input is less than than the producer's", () => {
    const result = consumer(0.5);

    expect(result).toBeFalse();
  });
});
