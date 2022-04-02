const numberToAccountingString = (number) => {
  if (number != null) {
    if (number < 0) {
      return `(${Math.abs(number)})`;
    } else {
      return number.toString();
    }
  }
};


console.log(numberToAccountingString(undefined));
console.log(numberToAccountingString(5));
console.log(numberToAccountingString(10));
console.log(numberToAccountingString(-5));