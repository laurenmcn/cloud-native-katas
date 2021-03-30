const wordwrap = require('./wordwrap');

describe('wordwrap', () => {
  test('canary verifies test infrastructure', () => {
    expect(true).toBe(true);
  });

  test('("a", 1) => "a"', () => {
    expect(wordwrap('a', 1)).toEqual('a');
  });

  test('("aa", 1) => "a_a"', () => {
    expect(wordwrap('aa', 1)).toEqual('a\na');
  });

  test('("a a", 1) => "a_a"', () => {
    expect(wordwrap('a a', 1)).toEqual('a\na');
  });

  test('("a ab a", 3) => "a_ab_a"', () => {
    expect(wordwrap('a ab a', 3)).toEqual('a\nab\na');
  });
});
