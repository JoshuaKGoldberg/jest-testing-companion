export function greet(one, two, three) {
  const name = three ? `${one} ${two[0]}. ${three}` : `${one} ${two}`;

  return `Hello, ${name}!`;
}
