const m = 5;
const k = 9;
const twoDimensionalArray = [];

for (let i = 0; i < m; i++) {
  const row = [];
  for (let j = 0; j < k; j++) {
    row.push("строка");
  }
  twoDimensionalArray.push(row);
}

for (let i = 0; i < k - 4; i++) {
  const newRow = [];
  for (let j = 0; j < k; j++) {
    newRow.push("новая строка " + (i + 1));
  }
  twoDimensionalArray.unshift(newRow);
}

for (let i = 0; i < m - 3; i++) {
  twoDimensionalArray.pop();
}

console.log(twoDimensionalArray);
