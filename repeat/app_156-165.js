//Отложенное выполнение кода и setTimeout стр.156
// var timeUp = function () {
//   alert("Время вышло!");
// };
// console.log(setTimeout(timeUp, 5000)); //получаем id через который можно отменить таймер

//отмена действия таймера стр.158
// var doHomeworkAlarm = function () {
//   alert("Эй! Пора делать домашку!");
// };
// var timeoutId = setTimeout(doHomeworkAlarm, 1000);
// clearTimeout(timeoutId); // отменяет действие тамера timeuotId

// //Многократный запуск кода и setInterval стр.158
// var counter = 1;
// var printMessage = function () {
//   console.log(counter);
//   counter++;
//   if (counter >= 4) {
//     clearTimeout(intervalId);
//   }
// };
// var intervalId = setInterval(printMessage, 1000); // через какой интервал времени выводить соощщение

//Анимация элементов с помощью setInterval стр.160
///////////////////////////////////////////////////////////////////////////////
// var leftOffset = 0;
// var speed = 1;
// var tik = 0;
// var moveHeading = function () {
//   $("#heading").offset({ left: leftOffset });

//   tik++;
//   if (tik >= 0 && tik < 200) {
//     leftOffset++;
//   }
//   if (tik > 200 && tik <= 400) {
//     leftOffset--;
//   }
//   if (tik == 401) {
//     tik = 0;
//   }
//   console.log(tik);
// };
// setInterval(moveHeading, 5);
///////////////////////////////////////////////////////////////////////////////
// var leftOffset = 0;

// var moveHeading = function () {
//   $("#heading").offset({ left: leftOffset });
//   $("#heading").offset({ left: leftOffset });
//   leftOffset++;
//   if (leftOffset > 200) {
//     leftOffset = 0;
//   }
// };
// setInterval(moveHeading, 30);

//Реакция на действия пользователя стр.162
//Реакция на клик
// не сработало(
// var clickHandler = function (event) {
//   console.log("Клик " + event.pageX + " " + event.pageY);
// };
// $("log").click(clickHandler);

// $("html").mousemove(function (event) {
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY,
//   });
// });
// $(document).on("mousemove", function (event) {
//   $("#log").text("pageX: " + event.pageX + ", pageY: " + event.pageY);
// });

//#1. Следом за кликом
$("html").mousemove(function (event) {
  $("#heading").offset({
    left: event.pageX,
    top: event.pageY,
  });
});
