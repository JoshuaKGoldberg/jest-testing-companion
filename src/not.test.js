describe("intentional .not expectation failures", () => {
  test("toBe", () => {
    expect("hello").not.toBe("goodbye");
    expect("hello").not.toBe("hello");
  });

  test("toEqual", () => {
    expect(["abc", "def", "ghi"]).not.toEqual(["abc", "xyz", "ghi"]);
    expect(["abc", "def", "ghi"]).not.toEqual(["abc", "def", "ghi"]);
  });

  describe("toContain", () => {
    test("array", () => {
      expect(["abc", "def", "ghi"]).not.toContain("xyz");
      expect(["abc", "def", "ghi"]).not.toContain("def");
    });

    test("string", () => {
      expect("abc123").not.toContain("z9");
      expect("abc123").not.toContain("c1");
    });
  });
});
