import { producer } from "./producer";

export function consumer(input) {
  return input > producer();
}
