const calculator = require('./calc.js');

describe('Calculator unit test',() =>{

  test('divide 70 / 7 is equal 10', () => {
    expect(calculator.divide(70, 7)).toBe(10);
  });

  test('divide 0 / 1 is Invalid!', () => {
    expect(calculator.divide(0, 1)).toBe('Invalid!');
  });

  test('divide 10 / 0 is Not Allowed!', () => {
    expect(calculator.divide(10, 0)).toBe('Not Allowed!');
  });

  test('divide 0 / 0 is Not Allowed!', () => {
    expect(calculator.divide(0, 0)).toBe('Not Allowed!');
  });

  test('multiply 3 * 3 is equal to 9', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
  });

  test('multiply 54.138 * 1000 is equal to 54138', () => {
    expect(calculator.multiply(54.138, 1000)).toBe(54138);
  });

  test('multiply 325 * 85 is equal to 27625', () => {
    expect(calculator.multiply(325, 85)).toBe(27625);
  });

  test('subtract 3525 - 7185 is equal to -3660', () => {
    expect(calculator.subtract(3525, 7185)).toBe(-3660);
  });

  test('subtract 444 - (-748) is equal to 1192', () => {
    expect(calculator.subtract(444, -748)).toBe(1192);
  });

  test('subtract 325 - 9985 is equal to -9660', () => {
    expect(calculator.subtract(325, 9985)).toBe(-9660);
  });

  test('add 5 + 7 is equal to 12', () => {
    expect(calculator.add(5, 7)).toBe(12);
  });

  test('add -5 + -6 is equal to -11', () => {
    expect(calculator.add(-5, -6)).toBe(-11);
  });

  test('add 11 + -9 is equal to 2', () => {
    expect(calculator.add(11, -9)).toBe(2);
  });
  
});