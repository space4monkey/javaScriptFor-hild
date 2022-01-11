// //Объекты
// var cat = {
//   legs: 3,
//   name: "Гармония",
//   color: "Черепаховый",
// };

// var dog = {
//   name: "Оладушек",
//   age: "6",
//   color: "Белый",
//   bark: "Гаф тяф!",
// };

// console.log(Object.keys(dog));
// console.log(Object.keys(cat));

// //добавление элементов обьекта

// var catVilya = {}; // пустой объект
// catVilya["legs"] = 4;
// catVilya["name"] = "Виля";
// catVilya["color"] = "Черепаховый";
// console.log(catVilya);
// //добовление элементов через точку
// var dogPersik = {};
// dogPersik.legs = 4;
// dogPersik.name = "Персик";
// dogPersik.color = "Тигровый";
// dogPersik.isAwesome = true;
// console.log(dogPersik.isBorn); // undefined такого свойства нет
// console.log("He is awesome?");
// console.log(dogPersik.isAwesome);
// //debugger;
// // Массивы Объектов стр 75

// var dinosaurs = [
//   { name: "Тираннозавр рекс", period: "Верхнемеловой" },
//   { name: "Стегозар", period: "Верхгеюрский" },
//   { name: "Платеозавр", period: "Верхгеюрский" },
// ];
// console.log(dinosaurs); //покажем массив
// console.log(dinosaurs[1]); // вызываем обьект массива
// console.log(dinosaurs[0]["name"]);
// dinosaurs[0].period;
// dinosaurs[1].period;
// // массив друзей стр 76
// var anna = {name:"Анна", age:11,luckyNumbers:[2,4,8,16] };
// var dave = {name:"Дэйв",age:5,luckyNumbers:[3,9,10]};
// var kate = {name:"Кейт",age:9,luckyNumbers:[1,2,3]};

// var friends = [anna,dave,kate];
// console.log(friends[0]);
// console.log(friends[2].name);
// console.log(friends[2].luckyNumbers[1]);
//что полезного можно сделать с обьектами
// учет долгов

//95-109
//условия и циклы
//Условные конструкции

var lemonChecken = false;
var beefWithBlackBean = true;
var sweerAndSourPork = true;

if (lemonChecken) {
  console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
  console.log("Заказываю говядину");
} else if (sweerAndSourPork) {
  console.log("Ладно, закажу свнину.");
} else {
  console.log("Что ж, остается рис с яйцом.");
}
// циклы
//while
var sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("Посчитать овец: " + sheepCounted + "!");
  sheepCounted++;
}
console.log("Хрррр");

//Цикл for
for (var sheepCounted2 = 0; sheepCounted2 < 10; sheepCounted2++) {
  console.log("Посчитать овец: " + sheepCounted2 + "!");
}
console.log("Хрррр");

//Цикл for, массивы и строки стр 105
var animals = ["Лев", "фламинго", "белый медведь", "удав"];
for (var i = 0; i < animals.length; i++) {
  console.log("В этои зоопарке есть " + animals[i] + ".");
}
//работа со строками
var name = "Ник";
for (var i = 0; i < name.length; i++) {
  console.log("в моём имени есть буква " + name[i] + ".");
}
// #1 прекрасные животные
console.log(" ");

console.log("#1 прекрасные животные");

var animals_ = ["Кот", "Рыба", "Лемур", "Варан"];
for (i = 0; i < animals_.length; i++) {
  if (i < animals_.length - 1)
    console.log(animals_[i] + " прекрасное животное" + ",");
  else {
    console.log(animals_[i] + " прекрасное животное" + ".");
  }
}
console.log(" ");

//#2 генератор случайных строк
console.log("#2 генератор случайных строк");
var alphabet = "абвгдеёжзийклмнопрстуфхцчшцъыьэюя";
//Math.floor(Math.random() * 4)
// var i = 0;
var randomString = "";
var num = 6;
var str = 8;
for (i = 0; i < str; i++) {
  //каличество этераций
  for (x = 0; x < num; x++) {
    //количество сиволов
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)]; // присвоение случайного символа
  }
  if (randomString.length == num) {
    // вывести значение только после заполнения num  символоми
    console.log(randomString);
    randomString = "";
  }
}
console.log(" ");

//#3 h4ck3r sp34k
console.log("#3 h4ck3r sp34k");
