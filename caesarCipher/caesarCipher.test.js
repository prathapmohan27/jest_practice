const caesarCipher = require('./caesarCipher.js');

test('one shift', () => {
  expect(caesarCipher('abcd', 1)).toBe('bcde');
});

test('work with special char', () => {
  expect(caesarCipher('a/b$%c"d', 1)).toBe('bcde');
});

test('work with a-z', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe(
    'bcdefghijklmnopqrstuvwxyza'
  );
});

test('work with a-z for 2', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 2)).toBe(
    'cdefghijklmnopqrstuvwxyzab'
  );
});

test('work with a-z for 3', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 3)).toBe(
    'defghijklmnopqrstuvwxyzabc'
  );
});

test('work with a-z for 16', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 16)).toBe(
    'qrstuvwxyzabcdefghijklmnop'
  );
});
