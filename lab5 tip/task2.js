const currentDate = new Date();

const formattedDate = `Месяц: ${
  currentDate.getMonth() + 1
} День: ${currentDate.getDate()} Час: ${currentDate.getHours()}`;

console.log(`Текущая дата в формате (дд.мм.гггг чч:мм): ${formattedDate}`);

const millisecondsSince1970 = Date.parse(currentDate);

console.log(
  `Количество миллисекунд, прошедших с 01.01.1970 г.: ${millisecondsSince1970}`
);

const secondsSince1970 = Math.floor(currentDate.getTime() / 1000);

console.log(
  `Количество секунд, прошедших с 01.01.1970 г.: ${secondsSince1970}`
);

const birthDate = new Date("2002-12-2");
const dayOfWeek = birthDate.getDay();
const daysOfWeekNames = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

console.log(
  `Номер дня моего рождения: ${dayOfWeek + 1}, Название дня вашего рождения: ${
    daysOfWeekNames[dayOfWeek]
  }`
);
