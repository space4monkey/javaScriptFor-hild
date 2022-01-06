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
//--//
//учет долгов

var owedMoney = {};
owedMoney["Джимми"] = 5;
owedMoney["Анна"] = 7;
owedMoney["Элис"];
console.log(owedMoney[2]);
owedMoney["Джимми"] += 3;
console.log(owedMoney["Джимми"]);
console.log(owedMoney);

//хранение информации о фильмах
var movies = {
  "В поисках Немо": {
    relaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерес", "Александра Гоулд"],
    format: "DVD",
  },
  "Звездные войны ХХХ": {
    relaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерес", "Александра Гоулд"],
    format: "DVD",
  },
  "Гарри Потер и Кубок огня": {
    relaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерес", "Александра Гоулд"],
    format: "DVD",
  },
};

console.log(movies["В поисках Немо"]);
console.log(movies["В поисках Немо"].actors);
console.log(movies["В поисках Немо"].format);

var cars = {
  relaseDate: 2006,
  duration: 117,
  actors: ["Альберт Брукс", "Эллен Дедженерес", "Александра Гоулд"],
  format: "Blu-ray",
};

console.log(movies);
movies["Тачки"] = cars; //добовляем еще один фильм
console.log(Object.keys(movies));

//упражнения
//#2
var myCrazyObject = {
  name: "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула",
};
console.log(Object.keys(myCrazyObject));

console.log(myCrazyObject["some array"][2].number); //решение
