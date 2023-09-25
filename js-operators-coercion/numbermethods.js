let number1 = "5.489";
let parseIntValue = parseFloat(number1);

console.log(typeof parseIntValue);
console.log(isNaN(parseIntValue));
console.log(parseIntValue.toFixed(1));

let number2 = parseIntValue.toString();
console.log(number2, typeof number2);
