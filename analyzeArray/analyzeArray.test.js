const analyzeArray = require('./analyzeArray.js');

test('check analyze array', () => {
  const ans = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(ans);
});

test('check analyze array', () => {
  const ans = {
    average: 18,
    min: 1,
    max: 54,
    length: 7,
  };
  expect(analyzeArray([1, 18, 50, 4, 21, 6, 54])).toEqual(ans);
});
