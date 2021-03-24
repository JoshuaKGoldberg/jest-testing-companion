/** @type Map<number, number> */
const cache = new Map();

/**
 * @param {number} i
 * @returns The fibonacci number at index `i`.
 * @see https://en.wikipedia.org/wiki/Fibonacci_number
 */
export function fibonacci(i) {
  if (i <= 1) {
    return i;
  }

  const cached = cache.get(i);
  if (cached !== undefined) {
    return cached;
  }

  const value = fibonacci(i - 1) + fibonacci(i - 2);
  cache.set(i, value);
  return value;
}
