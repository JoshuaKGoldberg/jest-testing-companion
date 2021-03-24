describe("arrayContainsThree", () => {
  it("works", () => {
    expect(arrayContainsThree([1, 2, 3])).toBeTrue();
    expect(arrayContainsThree([2, 4, 6])).toBeFalse();
  });
});
