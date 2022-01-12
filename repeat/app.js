//Пишем игру виселица

//prompt "запрос"

// var name = prompt("Как вас зовут?");
// console.log("Привет, " + name);
// //confirm "подвердить"
// var likesCats = confirm("Тебе нравится кошки?");
// console.log(likesCats);
// if (likesCats) {
//   console.log("Ты классная кошка!");
// } else {
//   console.log("Что ж, не проблема. Все равно ты молодец!");
// }

//alert "предупреждение"

// alert("JavaScript это здорово!");

var words = ["программа", "макака", "прекрасный", "оладушек"];
var word = words[Math.floor(Math.random() * words.length)]; // выбераем случайное слово из массива
console.log(word);
var answerArray = []; //создадим массив для заполнением "_"
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
console.log(answerArray);
var remainingLetters = word.length;
//отоброжение сотояние игры
alert(answerArray.join(" "));
