const prompt = require("prompt-sync")();

const inputDate = prompt("Введите дату в формате DD.MM.YYYY:");

const dateComponents = inputDate.split(".");
const day = parseInt(dateComponents[0]);
const year = parseInt(dateComponents[2]);

function getDecadeOfMonth(day) {
  return Math.ceil(day / 10);
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(`Декада месяца: ${getDecadeOfMonth(day)}`);

console.log(`Високосный ли год: ${isLeapYear(year)}`);
