const k = 5;
const m = 8;
const twoDimensionalArray = [];

for (let i = 0; i < k; i++) {
  const row = [];
  for (let j = 0; j < m; j++) {
    const randomValue =
      Math.random() < 0.5 ? Math.floor(Math.random() * 100) : "строка";
    row.push(randomValue);
  }
  twoDimensionalArray.push(row);
}

const resultArray = [];

for (let i = 0; i < k; i++) {
  resultArray.push(twoDimensionalArray[i].join(", "));
}

twoDimensionalArray.reverse();

const joinedArray = resultArray.join(", ");

console.log(joinedArray);

console.log(twoDimensionalArray);
