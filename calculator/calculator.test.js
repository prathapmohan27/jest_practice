const calculator = require('./calculator.js');

test('sum two value', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('work with string value', () => {
  expect(calculator.sum('1', 2)).toBe(3);
});

test('multiple two value', () => {
  expect(calculator.mul('1', 2)).toBe(2);
});

test('multiple two value', () => {
  expect(calculator.mul('1', 2)).toBe(2);
});

test('sub two value', () => {
  expect(calculator.sub(5, 2)).toBe(3);
});

test('div two value', () => {
  expect(calculator.divide(10, 0)).toBeNull();
});
