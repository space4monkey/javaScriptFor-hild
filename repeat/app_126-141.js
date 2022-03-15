// Функции

var ourFunction = function () {
  console.log("привет, мир!");
};

ourFunction();

//передача аргументов в функцию

var sayHelloTo = function (name) {
  console.log("Привет, " + name + "!");
};

sayHelloTo("Ник");
sayHelloTo("Анна");

//печатаем котиков
var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " -^.^-");
  }
};
drawCats(5);
// передача в функцию нескольких аргументов
var printMultipeTimes = function (howManyTimes, whatToDraw) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};
printMultipeTimes(2, "=^.^=");
printMultipeTimes(2, "^_^");
//возрат значения
var double = function (number) {
  //функция может принемать несколько аргументов но возращает всегда одно значение
  return number * 2;
};
var double2 = function (number) {
  return;
};
console.log(double(3));
console.log(double2());

// пример из интернета https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/return
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// expected output: 12

console.log(getRectArea(-3, 4));
// expected output: 0

//вызов функции в качестве значения
console.log(double(5) + double(6)); //22
console.log(double(double(3))); //12

//Упрощаем код с помощью функций

// randomwords[Math.floor(Math.random() * randomWords.length)];
var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};
var randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"]; //случайный массив
console.log(pickRandomWord(randomWords));
console.log(pickRandomWord(["Чарли", "Радж", "Никола", "Кейт", "Сенди"])); //массив отправленный сразу в функцию

//генератор случайных дразнилок с134

var generatoreRandomInsult = function () {
  var randomBodyParts = ["глаза", "нос", "череп"];
  var randomAdjctives = ["вонючая", "унылая", "дурацкая"];
  var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
  //соединяем случайные строки в предложение:
  var randomString =
    "У тебя " +
    pickRandomWord(randomBodyParts) +
    " слово " +
    pickRandomWord(randomAdjctives) +
    " " +
    pickRandomWord(randomWords) +
    "!!!";
  return randomString;
};

console.log(generatoreRandomInsult());
console.log(generatoreRandomInsult());
console.log(generatoreRandomInsult());

//Ранний выход из функции по return стр.136
var fifthLetter = function (name) {
  if (name.length < 5) {
    return "В имени меньше 5ть букв";
  }
  return "Пятая буква вашего имени: " + name[4] + ".";
};
console.log(fifthLetter("Igor"));
console.log(fifthLetter("IgorLapov"));

// Многократное использование returne вместо вместо конструкции if... else стр.137

var medalForScore = function (score) {
  if (score < 3) {
    return "Бронзовая";
  }
  if (score < 7) {
    return "Серебренная";
  }
  return "Золотая";
};
// тут используется return по этому гарантируется однозначный выбор
console.log(medalForScore(1));
console.log(medalForScore(6));
console.log(medalForScore(9));

// Упражнения стр.140
// #1
var add = function (x1, y1) {
  return x1 + y1;
};
var multiply = function (x2, y2) {
  return x2 * y2;
};

console.log(multiply(36325, 9824));
fu = multiply(36325, 9824);
console.log(add(fu, 777));
// #2 совподают ли массивы?

var areArraysSame = function (arr1, arr2) {
  var arr3 = [];
  var tick = arr1.length;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr3[i] += arr1[i];
      }
    }
  }
  if (tick === arr3.length) {
    return true;
  } else tick !== arr3.length;
  return false;
};

console.log(areArraysSame([1, 2, 3], [4, 5, 6, 4]));
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 3, 4], [1, 2, 4]));

//#3 "Виселица" и функции

var pickWord = function () {
  //возращеем случайно выбраное слово
  var words = ["программа", "макака", "прекрасный", "оладушек"];
  return (word = words[Math.floor(Math.random() * words.length)]);
};
var setupAnswerArray = function (word) {
  //Возращает итоговый массив для заданного слова word
  var answerArray = []; //создадим массив для заполнением "_"
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
};
var showPlayerProgress = function (answerArray) {
  //С помощью alert отображает текущее сосотояние игры
  alert(answerArray.join(" "));
};
var getGuess = function () {
  // запращивате ответ игрока с помощью prompt
  var guess = prompt(
    "Угадай букву или нажмите Отмена для выхода из игры."
  ).toLowerCase();
  console.log(guess);
  return guess;
};
var updateGameState = function (guess, word, answerArray) {
  // Обновляет answerArray согласно отвуту игрока (guess)
  // возращает число, обозначающее, сколько раз буква guess
  // встречается в слове, чтобы тожно было оновить значение
  //remainingLetters
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      //проверка на совпадение
      if (answerArray[j] === "_") {
        //проверка на повторяемость ввода.
        // ларчик просто открывался. Читай задание внимательно.
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
};
var showAnswerAndCongratultePlayer = function (answerArray) {
  // С помощью alert показывает игроку отгаданное слово
  // и поздравляет его с победой
  alert(answerArray.join(" "));
  alert("Отлично! Было загадано слово " + "'" + word + "'");
};

//загаданное слово
var word = pickWord();
// console.log(word);
// answerArray: итогововый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  //guess: ответ игрока
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуста, введите одиночную букву.");
  } else {
    //correctGuesses: колическо открытых букв
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratultePlayer(answerArray);
