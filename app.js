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

var landmarks = [];
landmarks.push("Мой дом");
landmarks.push("Дорожка к дому");
landmarks.push("Мигающий фонарь");
landmarks.push("Протикающий гидрант");
landmarks.push("Пожарная станция");
landmarks.push("Приют для кошек");
landmarks.push("Моя бывшая школа");
landmarks.push("Дом подруги");
// var wayback = landmarks.pop();
// console.log(wayback);
// console.log(landmarks);

console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
