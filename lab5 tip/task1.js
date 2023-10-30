function cos(x) {
  return Math.cos(x);
}

const array = [];
for (let i = 1; i <= 14; i++) {
  array.push(cos(i));
}

console.log("Массив, заполненный с помощью cos(x):");
console.log(array);

array.sort((a, b) => b - a);

console.log("Отсортированный массив в порядке убывания:");
console.log(array);
