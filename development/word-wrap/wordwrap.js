const wordwrap = (text, columns) => {
    const lines = [];
    
    while (text.length > columns) {
      const pos = minPositive(text.lastIndexOf(' ', columns), columns);
  
      lines.push(text.substring(0, pos).trim());
  
      text = text.substring(pos).trim();
    }
  
    if (text.length > 0) {
      lines.push(text);
    }
  
    return lines.join('\n');
  };
  
  const minPositive = (...values) => {
    return values.filter(v => v >= 0).sort()[0];
  }; 

  module.exports = wordwrap;