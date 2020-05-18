var firstName = prompt('What is your name?');
var age = prompt('How old are you?');
var job = prompt('What is your job?');
var favoriteAuthor = prompt('Who is your favorite author?');
var favoriteColor = prompt('What\'s your favorite color?');
var message = 'Hello '+ firstName + ' ! I see you ' + age + ' years old,';
var canVote;

if (age >= 18) {
  canVote = true;
  message += ' as I can see, you could vote already.';
}
else {
  canVote = false;
  message += ' as I can see, you couldn\' vote yet.';
}

message +=  ' You work as ' + job + '. I also like ' + favoriteColor + ' color. ' + favoriteAuthor + ' also one of my favorite authors.';
document.write(message);