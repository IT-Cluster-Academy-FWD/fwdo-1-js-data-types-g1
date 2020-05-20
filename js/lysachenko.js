var name = prompt('Як вас звати?');
var age = parseInt(prompt ('Скільки вам років?'), 10);
var work = prompt('Ким ви працюєте?')
var author = prompt('Ваш улюблений автор?')
var color = prompt('Ваш улюбленний колір?')
var canVote = age >= 18 ? 'вже дозволено' : 'ще не дозволено';

var message = 'Привіт '  + name +   ' , я бачу вам ' + age +  'років, як я бачу вам  '+ canVote + ' голосувати. Ви працюєте ' + work + '.Я теж люблю цей ' + color + ' колір. ' + author + ' теж один з улюблених моїх авторів.';  
document.write(message);