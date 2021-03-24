describe("intentional expectation failures", () => {
  test("toBe", () => {
    expect("hello").toBe("hello");
    expect("hello").toBe("goodbye");
  });

  test("toEqual", () => {
    expect(["abc", "def", "ghi"]).toEqual(["abc", "def", "ghi"]);
    expect(["abc", "def", "ghi"]).toEqual(["abc", "xyz", "ghi"]);
  });

  describe("toContain", () => {
    test("array", () => {
      expect(["abc", "def", "ghi"]).toContain("def");
      expect(["abc", "def", "ghi"]).toContain("xyz");
    });

    test("string", () => {
      expect("abc123").toContain("c1");
      expect("abc123").toContain("z9");
    });
  });
});
