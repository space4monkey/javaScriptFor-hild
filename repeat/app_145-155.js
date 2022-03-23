//поиск элементов DOM стр 146-148
// var headingElement = document.getElementById("main-heading");
// console.log(headingElement.innerHTML);
// var newHeadingText = prompt("Введите новый заголовок:");
// console.log(newHeadingText);
// headingElement.innerHTML = newHeadingText;

//Работа с деревом DOM через jQuery стр 149-148
// var newHeadingText = prompt("Введите новый заголовок:");
// $("#main-heading").text(newHeadingText);

//Создание новых элементов через jQuery
// $("body").append("<p>Это новый параграф</p>");

// for (var i = 0; i < 3; i++) {
//   var hobby = prompt("Назови одно из своих хобби!");
//   $("body").append("<p>" + hobby + "</p>");
// }

//Анимация элементов средствами jQuery
// $("h1").fadeOut(3000); // исчезновение текста

//Цепной вызов и анимация на jQuery
// .fadeOut() - постепеннное ослабление*
// .fadeIn() - постепенное уселение*
// $("#main-he1").text("Этот текст скоро исчезнет").fadeOut(3000); // .text() заменяет текст
// $("#main-he2").fadeOut(3000).fadeIn(2000); // цепная анимация
// $("#main-he3").slideUp(1000).slideDown(1000);
// $("#main-he4").fadeIn(3000);
// $("#main-he5").slideUp(1000).slideDown(1000);
// $("#main-he6").fadeOut(1000);
// $("#main-he6").fadeIn(1000);

// for (var i = 0; i < 5; i++) {
//   $("#main-he7").slideUp(1000).slideDown(1000);
// }
// $("#main-he8").show(1000).hide(1000);

//Упражнения
//#1. Перечисо\лить своих друзей (и сделать из лудшими!)
var myFrands = ["Дима", "Максим", "Миша", "Наташа", "Павел"];

for (var i = 0; i < myFrands.length; i++) {
  $("body").append("<p>" + myFrands[i] + "</p>");
}

$("#main-he1").text("Мои друзья");
$("p").hide().fadeIn(3000);
$("p").append(" лучший!");

//#2. Мигающий заголовок
