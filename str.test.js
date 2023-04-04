const str = require('./str.js');

describe('string reverse function argument', () => {
  test('reverse the string basir to risab', () => {
    expect(str('basir')).toBe('risab');
  });
});

describe('string reverse function argument', () => {
    test('reversed of string elham is mahle', () => {
      expect(str('elham')).toBe('mahle');
    });
  });
  
  describe('string reverse function argument', () => {
    test('reversed of string ahmadi is idamha', () => {
      expect(str('ahmadi')).toBe('idamha');
    })
  });
  
  describe('string reverse function argument', () => {
    test('reversed of string basir elham ahmadi is idamha mahle risab', () => {
      expect(str('basir elham ahmadi')).toBe('idamha mahle risab');
    })
  });