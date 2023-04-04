const firstLetterCap = (str) => {
    let makeCap;
    if (str.length === 1){
      makeCap = str[0].toUpperCase();
    } else if (str.length > 1) {
      makeCap = str.charAt(0).toUpperCase() + str.slice(1);  
    } else {
      throw new Error ('Empty string is not allowed.');
    }  
    return makeCap;
  }
  
  module.exports = firstLetterCap;