import { randomNumber } from "./number.utils";

export function randomValue<T>(list: T[]): T {
  return list[randomNumber(list.length)];
}
