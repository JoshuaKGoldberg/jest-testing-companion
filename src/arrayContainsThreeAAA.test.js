describe("arrayContainsThree", () => {
  it("returns true when the array includes 3", () => {
    // Arrange
    const values = [1, 2, 3];

    // Act
    const result = arrayContainsThree(values);

    // Assert
    expect(result).toBeTrue();
  });

  it("returns false when the array does not include 3", () => {
    // Arrange
    const values = [2, 4, "banana"];

    // Act
    const result = arrayContainsThree(values);

    // Assert
    expect(result).toBeFalse();
  });
});
