'use strict';

const books = document.querySelectorAll('.book');
const body = document.querySelector('body');
const titelOfBook3 = books[4].querySelector('a');
const ad = document.querySelector('.adv');
const listOfBook2 = books[0].querySelectorAll('li');
const listOfBook5 = books[5].querySelectorAll('li');
const listOfBook6 = books[2].querySelectorAll('li');
const newChapter = document.createElement('li');


books[0].before(books[1]);
books[0].after(books[4]);
books[5].after(books[2]);
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
titelOfBook3.textContent = 'Книга 3. this и Прототипы Объектов'
ad.remove();

listOfBook2[3].after(listOfBook2[6]);
listOfBook2[6].after(listOfBook2[8]);
listOfBook2[9].after(listOfBook2[2]);

listOfBook5[3].before(listOfBook5[9]);
listOfBook5[4].after(listOfBook5[2]);
listOfBook5[7].after(listOfBook5[5]);

newChapter.textContent = 'Глава 8: За пределами ES6';
listOfBook6[8].after(newChapter);
