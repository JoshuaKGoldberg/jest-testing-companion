import { producer } from "./producer";

export function halfConsumer() {
  return producer() < 0.5;
}
