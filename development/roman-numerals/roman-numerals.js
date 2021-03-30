const numerals = [
    {number: 1, symbol: 'I'},
    {number: 4, symbol: 'IV'},
    {number: 5, symbol: 'V'},
    {number: 9, symbol: 'IX'},
    {number: 10, symbol: 'X'},
    {number: 40, symbol: 'XL'},
    {number: 50, symbol: 'L'},
    {number: 90, symbol: 'XC'},
    {number: 100, symbol: 'C'},
    {number: 400, symbol: 'CD'},
    {number: 500, symbol: 'D'},
    {number: 900, symbol: 'CM'},
    {number: 1000, symbol: 'M'},
  ].sort((a, b) => b.number - a.number);
  
  const romanNumeral = (num) => {
    const result = [];
  
    numerals.forEach(numeral => {
      if (num / numeral.number >= 1) {
        const val = Math.floor(num / numeral.number);
  
        for (let i = 0; i < val; i++) {
          result.push(numeral.symbol);
        }
  
        num = num % numeral.number;
      }
    });
  
    return result.join('');
  };

  module.exports = romanNumeral;