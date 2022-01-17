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

  //игровой цикл
  while(remainingLetters>0){
    //показать состояние игры
    alert(answerArray.join(" "));

    //запромить варианты ответа
    //дз #2
  var guess = prompt("Угадай букву или нажмите Отмена для выхода из игры.").toLowerCase();
 
  if (guess === null){
    //Выход из игрового процесса
    break;
  }else if (guess.length !== 1){alert("Пожалуста, введите только одну букву.");
  }else{//Обновление состояния игры
    for(var j=0; j<word.length; j++){
      if (word[j] === guess){
        answerArray[j]=guess;
        remainingLetters--;
      }
    }
  }
  //Конец игрового цикла
}
//Отображение ответа и поздравление игрока
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);











