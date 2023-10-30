function generateRandomNumbers(count) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.ceil(Math.random() * 10));
  }
  return numbers;
}

const numbersArray = generateRandomNumbers(10);

console.log("Рандомные числа: ", ...numbersArray);

let productOfEvenIndexedNumbers = 1;
let productOfOddNumbers = 1;

for (let i = 0; i < numbersArray.length; i++) {
  if (i % 2 === 0) {
    productOfEvenIndexedNumbers *= numbersArray[i];
  } else {
    if (numbersArray[i] % 2 !== 0) {
      productOfOddNumbers *= numbersArray[i];
    }
  }
}

console.log(
  `ПЭНН (произведение элементов с нечетными номерами): ${productOfEvenIndexedNumbers}`
);
console.log(
  `ПНЧЭ (произведение нечетных элементов массива): ${productOfOddNumbers}`
);
