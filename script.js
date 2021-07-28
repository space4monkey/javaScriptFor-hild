// var name = prompt("Как тебя зовут?");
// console.log("Привет, " + name);
// var likeCats = confirm("Тебе нравятся кошки?");
// if (likeCats) {
//   console.log("Ты классная кошка!");
// } else {
//   console.log("Что ж, не проблема. Все равно ты молодец!");
// }
// alert("Это сдорова!");
var words = ["программа", "макака", "прекресный", "оладушек"];
var word = words[Math.floor(Math.random() * words.length)];
var answersArray = [];
for (var i = 0; i < word.length; i++) {
  answersArray[i] = "_";
}
var remainingLetters = word.length;
alert(answersArray.join(""));
var guess = prompt("Угадайте букву или нажимите Отмена для выхода из игры");
if (guess===null){
  break;
}else if(guess.length !==1){
  alert('Пожалусто, введите только одну букву.');
} else{
  //обновляем состояние игры
  for
}