const romanNumeral = require('./roman-numerals');

describe('roman numerals', () => {
  test('canary verifies test infrastucture', () => {
    expect(true).toBe(true);
  });

  test('1 => I', () => {
    expect(romanNumeral(1)).toBe('I');
  });

  test('2 => II', () => {
    expect(romanNumeral(2)).toBe('II');
  });

  test('4 => IV', () => {
    expect(romanNumeral(4)).toBe('IV');
  });

  test('5 => V', () => {
    expect(romanNumeral(5)).toBe('V');
  });

  test('6 => VI', () => {
    expect(romanNumeral(6)).toBe('VI');
  });

  test('9 => IX', () => {
    expect(romanNumeral(9)).toBe('IX');
  });

  test('10 => X', () => {
    expect(romanNumeral(10)).toBe('X');
  });

  test('20 => XX', () => {
    expect(romanNumeral(20)).toBe('XX');
  });

  test('38 => XXXVIII', () => {
    expect(romanNumeral(38)).toBe('XXXVIII');
  });

  test('40 => XL', () => {
    expect(romanNumeral(40)).toBe('XL');
  });

  test('50 => L', () => {
    expect(romanNumeral(50)).toBe('L');
  });

  test('3548 => MMMDXLVIII', () => {
    expect(romanNumeral(3548)).toBe('MMMDXLVIII');
  });
});
