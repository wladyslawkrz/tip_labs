const str = "абвгдеёжзийклмнопрстуф";

const indexesToAlert = [13, 15, 16, 17, 18, 20];

let charsToAlert = [];

indexesToAlert.forEach((index) => {
  charsToAlert.push(str[index - 1]);
});

stringToAlert = charsToAlert.join("-");

alert(stringToAlert);
