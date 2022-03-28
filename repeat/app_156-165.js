//Отложенное выполнение кода и setTimeout стр.156
// var timeUp = function () {
//   alert("Время вышло!");
// };
// console.log(setTimeout(timeUp, 5000)); //получаем id через который можно отменить таймер

//отмена действия таймера стр.158
var doHomeworkAlarm = function () {
  alert("Эй! Пора делать домашку!");
};
var timeoutId = setTimeout(doHomeworkAlarm, 1000);
clearTimeout(timeoutId); // отменяет действие тамера timeuotId

//Многократный запуск кода и setInterval стр.158
var counter = 1;
var printMessage = function () {
  console.log(counter);
  counter++;
  if (counter >= 4) {
    clearTimeout(intervalId);
  }
};
var intervalId = setInterval(printMessage, 1000); // через какой интервал времени выводить соощщение

//Анимация элементов с помощью setInterval стр.160
