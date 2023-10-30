const prompt = require("prompt-sync")();

const lang = prompt("Введите язык (рус, анг, бел или нем):");

const daysOfWeek = [
  {
    language: "рус",
    days: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
  },
  {
    language: "анг",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    language: "бел",
    days: [
      "Панядзелак",
      "Аўторак",
      "Серада",
      "Чацвер",
      "Пятніца",
      "Субота",
      "Нядзеля",
    ],
  },
  {
    language: "нем",
    days: [
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
      "Sonntag",
    ],
  },
];

for (let index = 0; index < daysOfWeek.length; index++) {
  if (lang === daysOfWeek[index].language) {
    console.log(daysOfWeek[index].days);
  }
}
