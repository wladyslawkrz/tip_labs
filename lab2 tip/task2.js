const digits = [13, 15, 16, 17, 18, 20];

digitsString = digits.join("");

let numbersFromDigits = [];

for (let i = 1; i < 5; i++) {
  numbersFromDigits.push(Number(digitsString.slice((i - 1) * 3, i * 3)));
}

var result =
  ((numbersFromDigits[0] / numbersFromDigits[1]) * numbersFromDigits[2]) %
  numbersFromDigits[3];

alert(
  `${numbersFromDigits[0]} * ${numbersFromDigits[1]} + ${numbersFromDigits[2]} % ${numbersFromDigits[3]} = ${result}`
);
