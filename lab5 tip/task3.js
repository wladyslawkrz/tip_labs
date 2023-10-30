const prompt = require("prompt-sync")();

const height = parseFloat(prompt("Введите значение высоты конуса: "));
const radius = parseFloat(prompt("Введите значение радиуса конуса: "));

if (isNaN(height) || isNaN(radius)) {
  console.log("Пожалуйста, введите числовые значения.");
} else {
  const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
  console.log(`Объем конуса =  ${volume}`);
}
