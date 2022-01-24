const reverseString = require('./reverseString.js');

test('singe word work', () => {
  expect(reverseString('str')).toBe('rts');
});

test('with special char work', () => {
  expect(reverseString('t@!a^&c')).toBe('cat');
});

test('long  word with special char work', () => {
  expect(reverseString('fhdii#$^hdkahdfk%&%')).toBe('kfdhakdhiidhf');
});

test('work with space', () => {
  expect(reverseString(' hello')).toBe('olleh ');
});
