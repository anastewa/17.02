  
function findword() {
    const word1 = "ananas"; // слово, которое будем зеркалить
    const words = word1.split(''); // разделяем слово по буквам
    words.reverse(); // зеркалим буквы
    const word2 = words.join(''); // собираем буквы обратно в строку
    console.log(word2); // выводим результат
}

findword(); 

function findwordTwo() {
    const word3 = "temperature"; 
    const words4 = word3.split(''); 
    const words5 = words4.join('');
    console.log(words5); 
}

findwordTwo(); 

function findwordPalindrome() {
    const word6 = "nun"; 
    const words7 = word6.split(''); 
    const words5 = words7.join('');
    console.log(words5); 
}
findwordPalindrome()