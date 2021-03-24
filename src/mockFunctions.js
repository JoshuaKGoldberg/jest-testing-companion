describe("mock functions", () => {
  test("toHaveBeenCalledTimes", () => {
    const spy = jest.fn();

    spy();
    spy();

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  test("toHaveBeenCalledWith", () => {
    const spy = jest.fn();

    spy("abc");

    expect(spy).toHaveBeenCalledWith("abc");
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("b"));
    expect(spy).toHaveBeenCalledWith("nope");
  });

  test("mockImplementation", () => {
    const spy = jest.fn().mockImplementation((name) => name === "Josh");
    const result = spy("Josh");

    expect(result).toBeTrue();
  });

  test("mockReturnValue", () => {
    const spy = jest.fn().mockReturnValue("Happy!");
    const result = spy();

    expect(result).toEqual("Happy!");
  });

  test("mockResolvedValue", async () => {
    const spy = jest.fn().mockResolvedValue("Happy!");
    const result = await spy();

    expect(result).toEqual("Happy!");
  });
});
