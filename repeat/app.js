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
var tic = 0;
console.log(word);
var answerArray = []; //создадим массив для заполнением "_"
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var answerArray_1 = []; //проверяемый массив
console.log(answerArray);
var remainingLetters = word.length;
tic = word.length + 3;
//игровой цикл
//дз #30
console.log(tic);
while (remainingLetters > 0) {
  //показать состояние игры
  alert(answerArray.join(" "));

  //запромить варианты ответа
  //дз #2
  var guess = prompt(
    "Угадай букву или нажмите Отмена для выхода из игры."
  ).toLowerCase();
  console.log(guess);
  if (tic === 0) {
    //выходим если счетчик доходит до нуля
    alert("У вас остальсь  " + tic + " попыток игра окончена!");
    break;
    //проверка строки на if (guess === null) не верна! проверяем sring на пустоту.

    // debugger;
    //break;//Выход из игрового процесса выбивает из цикла
  } else if (guess === "") {
    alert("Вы не ввели ни одной буквы. Пожалуста, введите только одну букву.");
    alert("Увас осталось " + tic + " попытки");
    console.log(tic);
    tic--;
  } else if (guess.length !== 1) {
    alert("Пожалуста, введите только одну букву.");
    alert("У вас осталось " + tic + " попытки");
    console.log(tic);
    tic--;
  } //else if(guess){
  //   for(var i=0; i<word.length; i++){
  //     if(guess === answerArray[i] && "_"){
  //       console.log("Буква введена повторно, попробуйте еще раз");
  //     }
  //   }

  // }
  else {
    // Обновление состояния игры
    //дз #4
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        if (answerArray[j] === "_") {
          // ларчик просто открывался. Читай задание внимательно.
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    }
  }
  //Конец игрового цикла
}
//Отображение ответа и поздравление игрока
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + "'" + word + "'");
