const result = {
  first: "Spongebob",
  last: "Squarepants",
  profession: "Fry Cook",
  interests: ["Karate", "Jellyfishing"],
};

describe("snapshots", () => {
  test("file", () => {
    expect(result).toMatchSnapshot();
  });

  test("inline", () => {
    expect(result).toMatchInlineSnapshot(`
      Object {
        "first": "Spongebob",
        "interests": Array [
          "Karate",
          "Jellyfishing",
        ],
        "last": "Squarepants",
        "profession": "Fry Cook",
      }
    `);
  });
});
