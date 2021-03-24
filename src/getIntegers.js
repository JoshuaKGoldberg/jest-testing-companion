export function getIntegers(input) {
  if (typeof input !== "string") {
    throw new Error("do we need to handle non-strings?");
  }

  if (input.includes("-")) {
    throw new Error("Not yet implemented: negative numbers");
  }

  return input.match(/\d+/i)[0];
}
