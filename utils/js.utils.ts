

export const maxMin = (x: number, max: number, min: number = 0) => {
  if (x > max) return max;
  if (x < min) return min;
  return x;
};

export function randomNumber(max: number, min: number = 0) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randomValue<T>(list: T[]): T {
  return list[randomNumber(list.length)];
}
