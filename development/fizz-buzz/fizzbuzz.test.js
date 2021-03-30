const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  test('canary verifies test infrastructure', () => {
    expect(true).toBe(true);
  });

  test('when 1 => 1', () => {
    expect(fizzbuzz(1)).toBe(1);
  });
  test('when 2 => 2', () => {
    expect(fizzbuzz(2)).toBe(2);
  });
  test('when 3 => Fizz', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });
  test('when 5 => Buzz', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });
  test('when 6 => Fizz', () => {
    expect(fizzbuzz(6)).toBe('Fizz');
  });
  test('when 15 => FizzBuzz', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });
});

