export const maxMin = (x: number, max: number, min: number) => {
  if (x > max) return max;
  if (x < min) return min;
  return x;
};
