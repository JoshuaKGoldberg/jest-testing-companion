import { halfConsumer } from "./halfConsumer";

let mockProduced;

jest.mock("./producer", () => {
  return {
    producer: () => mockProduced,
  };
});

describe("halfConsumer", () => {
  it("returns true when the produced number is less than 0.5", () => {
    mockProduced = 0.25;

    const result = halfConsumer();

    expect(result).toBeTrue();
  });

  it("returns false when produced number is greater than 0.5", () => {
    mockProduced = 0.75;

    const result = halfConsumer();

    expect(result).toBeFalse();
  });
});
