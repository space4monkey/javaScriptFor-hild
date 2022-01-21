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
