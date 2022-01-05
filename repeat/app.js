//Объекты
var cat = {
  legs: 3,
  name: "Гармония",
  color: "Черепаховый",
};

var dog = {
  name: "Оладушек",
  age: "6",
  color: "Белый",
  bark: "Гаф тяф!",
};

console.log(Object.keys(dog));
console.log(Object.keys(cat));

//добавление элементов обьекта

var catVilya = {}; // пустой объект
catVilya["legs"] = 4;
catVilya["name"] = "Виля";
catVilya["color"] = "Черепаховый";
console.log(catVilya);
//добовление элементов через точку
var dogPersik = {};
dogPersik.legs = 4;
dogPersik.name = "Персик";
dogPersik.color = "Тигровый";
dogPersik.isAwesome = true;
console.log(dogPersik.isBorn); // undefined такого свойства нет
console.log("He is awesome?");
console.log(dogPersik.isAwesome);
//debugger;
// Массивы Объектов стр 75

var dinosaurs = [
  { name: "Тираннозавр рекс", period: "Верхнемеловой" },
  { name: "Стегозар", period: "Верхгеюрский" },
  { name: "Платеозавр", period: "Верхгеюрский" },
];
console.log(dinosaurs); //покажем массив
console.log(dinosaurs[1]); // вызываем обьект массива
console.log(dinosaurs[0]["name"]);
dinosaurs[0].period;
dinosaurs[1].period;
// массив друзей стр 76
