const firstLetterCap = require('./tdd.js');

describe('String test capitalization argument', () => {

  test('if input is b output should be B', () => {
    expect(firstLetterCap('b')).toBe('B');
  });

  test('if input is basir output should be Basir', () => {
    expect(firstLetterCap('basir')).toBe('Basir');
  });

  test('if input is ba output should Ba', () => {
    expect(() => {
      firstLetterCap('');
    }).toThrow(new Error('Empty string is not allowed.'));
  });
});