var stringWithNumbers = "a1234bcde5";
var k = 1;

function isLetter(character) {
  return /[a-zA-Z]/.test(character);
}

function isDigit(character) {
  return /[0-9]/.test(character);
}

function isEvenSum(stringWithNumbers) {
  var sum = 0;

  for (var i = 0; i < stringWithNumbers.length; i++) {
    if (isDigit(stringWithNumbers[i])) sum += Number(stringWithNumbers[i]);
  }

  return sum % 2 === 0;
}

console.log(stringWithNumbers);

if (isLetter(stringWithNumbers[k])) {
  console.log(`Символ с номером ${k} - буква.`);
} else {
  console.log(`Символ с номер ${k} - не буква`);
}

if (isEvenSum(stringWithNumbers)) {
  console.log(`Cумма цифр строки - четная.`);
} else {
  console.log(`Сумма цифр строки - нечетная.`);
}
