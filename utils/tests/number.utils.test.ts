import { maxMin, randomNumber } from 'utils/number.utils';

type TestCase = {
  controlValue?: number;
  testValue: number;
  minValue?: number;
  maxValue?: number;
};

const testCases: {
  maxMin: TestCase[];
  randomNumber: TestCase[];
} = {
  maxMin: [
    {
      controlValue: 0,
      testValue: maxMin(0, 0),
    },
    {
      controlValue: 0,
      testValue: maxMin(0, 0, 0),
    },
    {
      controlValue: 0,
      testValue: maxMin(1, 0, 0),
    },
    {
      controlValue: 0,
      testValue: maxMin(-1, 0, 0),
    },
    {
      controlValue: 1,
      testValue: maxMin(1, 10),
    },
    {
      controlValue: 1,
      testValue: maxMin(1, 10, 1),
    },
    {
      controlValue: 0,
      testValue: maxMin(1, 0, 10),
    },
    {
      controlValue: 110,
      testValue: maxMin(1, 10, 110),
    },
  ],
  randomNumber: [
    {
      controlValue: 0,
      testValue: randomNumber(0),
    },
    {
      controlValue: 0,
      testValue: randomNumber(0, 0),
    },
    {
      maxValue: 1,
      minValue: 0,
      testValue: randomNumber(1),
    },
    {
      maxValue: 200,
      minValue: 100,
      testValue: randomNumber(200, 100),
    },
  ],
};

test('max min', () => {
  testCases.maxMin.forEach(
    ({ controlValue, testValue }) =>
      controlValue && expect(testValue).toBe(controlValue)
  );
});

test('randomNumber', () => {
  testCases.randomNumber.forEach(
    ({ controlValue, testValue, maxValue, minValue }) => {
      controlValue && expect(testValue).toBe(controlValue);
      maxValue && expect(testValue).toBeLessThanOrEqual(maxValue);
      minValue && expect(testValue).toBeGreaterThanOrEqual(minValue);
    }
  );
});
