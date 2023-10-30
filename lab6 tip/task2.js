const array = [];
const m = 4;
const n = 6;

for (let i = 0; i < m; i++) {
  const buffer = [];

  for (let j = 0; j < n; j++) {
    buffer.push(Math.ceil(Math.random() * 10));
  }

  array.push(buffer);
}

for (let index = 0; index < m; index++) {
  if (!(index % 2 === 0)) {
    array[index].sort((a, b) => {
      return a - b;
    });
  }
}

console.log(array);
