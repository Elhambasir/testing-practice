class calculator {

    static add(i, j) {
      return i + j;
    }
  
    static subtract(i, j) {
      return i - j;
    }
  
    static multiply(i, j) {
      return i * j;
    }
  
    static divide(i, j) {
      if (i === 0 && j !== 0)
        return "Invalid!";
  
      if (i === 0 && j === 0)
        return "Not Allowed!";
  
      if (i !== 0 && j === 0)
        return "Not Allowed!";
  
      return i / j;
    }
  
  };
  
  module.exports = calculator;
  
  // console.log(calculator.divide(3, 0))
  // console.log(calculator.add(.5, 0.5))
  // console.log(calculator.subtract(3, 1))
  // console.log(calculator.multiplj(1.5, 2))
  // console.log(calculator.divide(16, 4))
