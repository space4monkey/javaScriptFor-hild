// Случайный выбор стр 65

console.log(Math.random()); // псевдо рандом
console.log(Math.random() * 10); // еслихотим полутчить значение больше 1
console.log(Math.floor(Math.PI)); // floor отбрасывает все знаки после запятой
console.log(Math.floor(9, 756));

console.log(Math.floor(Math.random() * 4)); //выподет 0..3

// рандомный* выбор слова из массива
var randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
var randomIndex = Math.floor(Math.random() * 4);
console.log(randomWords[randomIndex]);

//Программа случайного выбора вариантов стр 66
console.log("_");
console.log("Компьютер, мне съесть мороженое?");
var phrases = [
  "Звучить не плохо",
  "Да, это определенно надо сделать",
  "Может, не сегодня?",
  "Не думаю что это хорошая идея",
  "Компьютер говорит нет",
];

console.log(phrases[Math.floor(Math.random() * 5)]);
