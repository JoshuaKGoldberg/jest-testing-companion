describe("value matchers", () => {
  test("stringContaining", () => {
    expect("hello").toEqual(expect.stringContaining("ell"));
    expect("hello").toEqual(expect.stringContaining("bye"));
  });

  test("stringMatching", () => {
    expect("hello").toEqual(expect.stringMatching(/ell/));
    expect("hello").toEqual(expect.stringMatching(/bye/));
  });

  test("objectContaining", () => {
    expect({ happy: true, name: "Josh" }).toEqual(
      expect.objectContaining({
        happy: true,
      })
    );

    expect({ happy: true, name: "Josh" }).toEqual(
      expect.objectContaining({
        happy: false,
      })
    );
  });

  test("these work recursively, too!", () => {
    expect({ happy: true, name: "Josh" }).toEqual(
      expect.objectContaining({
        happy: true,
        name: expect.stringContaining("osh"),
      })
    );

    expect({ happy: true, name: "Josh" }).toEqual(
      expect.objectContaining({
        happy: true,
        name: expect.stringContaining("nope"),
      })
    );
  });
});
