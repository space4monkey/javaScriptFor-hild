// var outFinction = function () {
//   console.log("Привет, мир!");
// };
// outFinction();

// var sayHelloTo = function (name) {
//   console.log("Привет, " + name + "!");
// };
// sayHelloTo("Питер");
// var drawCats = function (howManyTimes) {
//   for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " -^.^-");
//   }
// };
// drawCats(15);

// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//   for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " " + whatToDraw);
//   }
// };

// printMultipleTimes(5, "=^.^=");
// printMultipleTimes(5, "^ _ ^");

// var double = function (number) {
//   return number * 2;
// };
// console.log(double(3));
// console.log(double(3) + double(3));
// console.log(double(double(3)));

// randomWords[Math.floor(Math.ramdom() * randomWords.length)];

//генератор дразнилок

var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

// var randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];

var print = function (printTo) {
  console.log(printTo);
};
// print(pickRandomWord(randomWords));

// print(pickRandomWord(["Чарли", "Радж", "Николь", "Кейт", "Сэнди"]));

// var randomBodyParts = [
//   "глаза",
//   "нос",
//   "череп",
//   "уши",
//   "ноги",
//   "колени",
//   "попа",
// ];
// var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

// var randomInslt = [
//   "У тебя",
//   pickRandomWord(randomBodyParts),
//   "словно",
//   pickRandomWord(randomAdjectives),
//   pickRandomWord(randomWords),
// ];
// console.log(randomInslt.join(" ") + "!!!");

// var generateRandomInsult = function () {
//   var randomBodyParts = [
//     "глаза",
//     "нос",
//     "череп",
//     "уши",
//     "ноги",
//     "колени",
//     "попа",
//   ];
//   var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//   var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
//   var randomString = print(
//     "У тебя " +
//       pickRandomWord(randomBodyParts) +
//       " словно " +
//       pickRandomWord(randomAdjectives) +
//       " " +
//       pickRandomWord(randomWords) +
//       "!!!"
//   );
//   return randomString;
// };
// generateRandomInsult();

var fifthLetter = function (name) {
  if (name.length <= 4) {
    return;
  }
  return "Пятая буква вашего имени: " + name[4] + ".";
};
print(fifthLetter("Егорка"));

// Многокраное использования return вместо конструкции if...else
var medalForScore = function (score) {
  if (score <= 3) {
    return "Бронза";
  }
  if (score <= 7) {
    return "Серебро";
  }
  return "Золото";
};

print(medalForScore(8));
