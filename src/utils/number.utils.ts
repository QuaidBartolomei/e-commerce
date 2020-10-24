export const maxMin = (x: number, max: number, min: number) => {
  if (x > max) return max;
  if (x < min) return min;
  return x;
};

export function randomNumber(max: number, min: number = 0) {
  return Math.floor(Math.random() * max);
}