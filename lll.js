  
function findword() {
    const word1 = "ananas"; // слово, которое будем зеркалить
    const words = word1.split(''); // разделяем слово по буквам
    words.reverse(); // зеркалим буквы
    const word2 = words.join(''); // собираем буквы обратно в строку
    console.log(word2); // выводим результат
}

function findPalindrome2(word) {
    word = word.toString();
    const reversedWord = word.split('').reverse().join('');
   if (word.toUpperCase() === reversedWord.toUpperCase()) {
        console.log(word + '- это палиндром');
    } else {
        console.log(word + " - это не палиндром");
    }
}
//ghjdthrf
findPalindrome2("temperature"); 
findPalindrome2('radar');
findPalindrome2('Mam');
findPalindrome2(12321);
findPalindrome2(123);
