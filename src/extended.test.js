describe("jest-extended matchers", () => {
  test("toBeArrayOfSize", () => {
    expect(["a", "b", "c"]).toBeArrayOfSize(3);
    expect(["a", "b", "c"]).toBeArrayOfSize(4);
  });

  test("toEndWith", () => {
    expect("abc123").toEndWith("123");
    expect("abc123").toEndWith("xyz");
  });
});
