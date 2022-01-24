const capitalize = require('./capitalize.js');

test('Work with single Word', () => {
  expect(capitalize('str')).toBe('Str');
});

test('work with capital word', () => {
  expect(capitalize('HELLO')).toBe('Hello');
});

test('work with multiple sentence', () => {
  expect(capitalize('hello world')).toBe('Hello World');
});
