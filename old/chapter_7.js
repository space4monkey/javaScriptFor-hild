var name = prompt("Как тебя зовут?");
console.log("Привет, " + name);
var likeCats = confirm("Тебе нравятся кошки?");
if (likeCats) {
  console.log("Ты классная кошка!");
} else {
  console.log("Что ж, не проблема. Все равно ты молодец!");
}
// alert("Это сдорова!");

// var words = ["программа", "макака", "прекресный", "оладушек"];
// var word = words[Math.floor(Math.random() * words.length)];
// /////////////////////////////////////////////////////////////////
// var answersArray = [];
// for (var i = 0; i < word.length; i++) {
//   answersArray[i] = "_";
// }
// var remainingLetters = word.length;
// var chanse = word.length + 3;
// ////////////////////////////////////////////////////////////////
// while (remainingLetters > 0 && chanse > 0) {
//   alert(answersArray.join(" "));
//   var guess = prompt("Угадайте букву или нажимите Отмена для выхода из игры");
//   guess = guess.toLowerCase();
//   chanse--;
//   console.log(chanse);

//   if (guess === null) {
//     break;
//   } else if (chanse == 2) {
//     alert("осталась одна попытка.");
//   } else if (guess.length !== 1) {
//     alert("Пожалусто, введите только одну букву.");
//   } else {
//     //обновляем состояние игры

//     for (var j = 0; j < word.length; j++) {
//       if (word[j] === guess && answerArray[j] === "_") {
//         answersArray[j] = guess;
//         if (answersArray) {
//           remainingLetters--;
//         }
//       }
//     }
//   }
// }

// // alert(answersArray.join(" "));
// alert("Отлично! Было загадано слово " + "'" + word + "'");
