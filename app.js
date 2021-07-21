// const numberOfSiblings = 1+3;
// const numbersOfCandies = 8;
// const total = numbersOfCandies/numberOfSiblings;
// console.log(total);

// const secondInMinute = 60;
// const minetInAHour = 60;
// const secondInAHour=secondInMinute*minetInAHour;
// console.log(secondInAHour);
// const hourInDay = 24;
// const secondInADay = secondInAHour*hourInDay;
// console.log(secondInADay);
// const daysInYear=365;
// const secondInYear=secondInADay*daysInYear;
// console.log(secondInYear);
// const myAge = 32;
// const secondInMyAge=myAge*secondInYear;
// console.log(secondInMyAge);

// let hightFives = 0;
// ++hightFives;
// ++hightFives;
// --hightFives;
// console.log(hightFives);

// const x=10;
// const y=x+5;
// console.log(y);
//   var score =10;
//   score +=7;
// console.log(score);
// score -=3;
// console.log(score);

// const string = "Super Long String JavaScript";
// console.log(string.length)
// console.log(string[0])

// const string2 = "Эта длинная строка такая длинная";
// console.log(string2.slice(4));

// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

// var hadShower = true;
// var hasBacpack = false;
// console.log(hadShower && hasBacpack);
// console.log(hadShower||hasBacpack);

// var isWeekend = true;
// var needToSwerToday = !isWeekend;
// console.log(needToSwerToday);

// var isWeekend = false;
// var hadShower = true;
// var hasApple = false;
// var hasOrange = true;
// var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
// console.log(shouldGoToSchool);

// var height = 150;
// var heightRestriction=150;
// console.log(height>=heightRestriction);

// var age =11;
// var accompanied = false;
// var myAge = age>=12||accompanied;
//     console.log(myAge);

// var dinosaurs = [
//   "Тиранозавр",
//   "Велоцераптор",
//   "Стегозавр",
//   "Трицератопс",
//   "Брахиозавр",
//   "Птеранодон",
//   "Апатозавр",
//   "Диплодок",
//   "Компсогнат",
//   ["Брахиозавр", 10, 55],
// ];

// console.log(dinosaurs);

// dinosaurs[33] = "Филоцераптор";
// console.log(dinosaurs[33]);
// console.log(dinosaurs[9]);
// console.log(dinosaurs[9][0]);
// console.log(dinosaurs[9][1]);
// console.log(dinosaurs[dinosaurs.length - 1]);

// var animals = [];
// animals.push("Кот");
// animals.push("Пес");
// animals.push("Лама");

// animals.unshift("Мартышка");
// animals.unshift("Белый медьведь");
// console.log(animals);
// console.log(animals.length);
// animals.pop();
// console.log(animals);
// console.log(animals.length);
// var lastAnimal = animals.pop();
// console.log(lastAnimal);
// console.log(animals);
// animals.unshift(lastAnimal);
// console.log(animals);

// var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
// var scalyAnimals = ["Удав", "Годзилла"];
// var featherAnimals = ["Ара", "Додо"];
// var furryAnimalsAndScalyAnimals = furryAnimals.concat(
//   scalyAnimals,
//   featherAnimals
// );
// console.log(furryAnimalsAndScalyAnimals);
// console.log(scalyAnimals);
// console.log(furryAnimals);

// var colors = ["красный", "зеленый", "синий"];
// const num = colors.indexOf("синий");
// const num0 = colors.indexOf("зеленый");
// console.log(num);
// console.log(num0);
// const num1 = colors.indexOf("фиолетовый");
// console.log(num1);
// const insects = ["Пчела", "Муравей", "Пчела", "Муравей"];

// var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
// console.log(boringAnimals.join());
// console.log(boringAnimals.join("-"));
// console.log(boringAnimals.join("*"));
// console.log(boringAnimals.join(" "));
// console.log(boringAnimals.join(" и "));

// var landmarks = [];
// landmarks.push("Мой дом");
// landmarks.push("Дорожка к дому");
// landmarks.push("Мигающий фонарь");
// landmarks.push("Протикающий гидрант");
// landmarks.push("Пожарная станция");
// landmarks.push("Приют для кошек");
// landmarks.push("Моя бывшая школа");
// landmarks.push("Дом подруги");
// var wayback = landmarks.pop();
// console.log(wayback);
// console.log(landmarks);

// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());

// var ran = Math.random();
// console.log(Math.floor(ran * 4));

// var randomWords = ["Взрыв", "Пещера", "СОБАКА", "САХАР", "ВАТА"];
// var randomIndex = Math.floor(Math.random() * 5);
// console.log(randomWords[randomIndex]);

// var phrases = [
//   "Звучит неплохо",
//   "Да, это определенно надо сделать",
//   "Не думаю, что это хорошая идея",
//   "Может, не сегодня?",
//   "Компьютер говорит нет",
// ];
// var randomIndex = Math.floor(Math.random() * 5);
// console.log(phrases[randomIndex]);

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
// var randomBodyPart = Math.floor(Math.random() * (randomBodyParts.length - 1));
// var randomAdjective = Math.floor(Math.random() * (randomAdjectives.length - 1));
// var randomWord = Math.floor(Math.random() * (randomWords.length - 1));
// var randomInsult =
//   "У тебя " +
//   randomBodyParts[randomBodyPart] +
//   " словно " +
//   randomAdjectives[randomAdjective] +
//   " " +
//   randomWords[randomWord] +
//   "!!!";
// var randomInslt = [
//   "У тебя",
//   randomBodyParts[randomBodyPart],
//   "словно",
//   randomAdjectives[randomAdjective],
//   randomWords[randomWord],
// ];
// console.log(randomInslt.join(" ") + "!!!");

// var cat = {
//   legs: 3,
//   "full name": "Гармония Филомена Уси-Пусечка Морган",
//   color: "Черепаховый",
// };
// console.log(cat["full name"]);
// console.log(cat.color);
// console.log(Object.keys(cat));

// var pusyCat = {};
// // pusyCat["legs"] = 3;
// // pusyCat["name"] = "Гармония";
// // pusyCat["color"] = "Черепховый";
// pusyCat.legs = 3;
// pusyCat.name = "Гармония";
// pusyCat.color = "Черепховый";
// console.log(pusyCat);

// var dog = { name: "Оладушек", legs: 4, IsAwesome: true };
// console.log(dog.isBrown);
// console.log(dog.name);

//Массивы объектов
// var dinosaurs = [
//   { name: "Тиранозавр рекс", period: "Верхнемеловой" },
//   { name: "Стегозавр", period: "Верхнеюрский" },
//   { name: "Платозавр", period: "Трисовый" },
// ];
// console.log(dinosaurs[0]);
// console.log(dinosaurs[0]["name"]);
// console.log(dinosaurs[1]["period"]);
// console.log(dinosaurs[0].name);

// var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
// var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
// var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

// var friends = [anna, dave, kate];

// console.log(friends[1]);
// console.log(friends[2].luckyNumbers);
// console.log(friends[0].luckyNumbers[1]);

// var owedMoney = {};
// owedMoney["Джимми"] = 5;
// owedMoney["Анна"] = 7;
// owedMoney["Элис"];
// console.log(owedMoney);
// console.log(owedMoney["Джимми"]);
// owedMoney["Джимми"] += 3;
// console.log(owedMoney);

// var movies = {
//   "В поисках Немо": {
//     releaseDate: 2003,
//     duration: 100,
//     actors: ["Алберт Брукс", "Эллен Дедженерес", "Аександр Гоулд"],
//     format: "DVD",
//   },
//   "Звезные войны: Эпизод 6 - Возращение бомжа": {
//     releaseDate: 1983,
//     duration: 134,
//     actors: ["Марк Хэммилл", "Харисон Форд", "Аександр Гоулд"],
//     format: "DVD",
//   },
//   Гарипоттер: {
//     releaseDate: 2000,
//     duration: 154,
//     actors: ["Марк Хэммилл", "Харисон Форд", "Аександр Гоулд"],
//     format: "Blu-ray",
//   },
// };

// var findingNemo = movies["В поисках Немо"];
// console.log(findingNemo.duration);
// console.log(findingNemo.format);
// console.log(findingNemo.actors);
// console.log(movies);

// var cars = {
//   releaseDate: 2006,
//   duration: 117,
//   actors: ["Марк Хэммилл", "Харисон Форд", "Аександр Гоулд"],
//   format: "Blu-ray",
// };

// movies["Тачки"] = cars;

// console.log(Object.keys(movies));
// //#1
// var scores = {
//   Маским: 0,
//   Наташа: 1,
//   Дима: 0,
// };
// console.log(Object.keys(scores));
// console.log(scores);
// scores["Маским"] += 1;
// console.log(scores);

// //#2
// var myCrazyObject = {
//   name: "Нелепый объект",
//   "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
//   "random animal": "Банановая акула",
// };
// console.log(Object.keys(myCrazyObject));
// console.log(myCrazyObject["some array"][2].number);

//условия и циклы

var name = "Николай";
console.log("Привет, " + name);
if (name.length > 6) {
  console.log("Ну и длинное же утебя имечко!");
}
