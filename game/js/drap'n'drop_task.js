

let containerOfWord = document.createElement('div');
game.appendChild(containerOfWord);

let words = ['pen', 'air', 'cheburek', 'sasha', 'sos', 'panda'];
let word = vocabulary[Math.floor(Math.random()*words.length)].word;
let shuffledWord = '';

function shuffle() {
  let wordToShuffle = word;
    let currentLetter = wordToShuffle.length - 1;
    let randomLetter;
    while (currentLetter >= 0) {
        randomLetter = Math.floor(Math.random() * currentLetter);
        shuffledWord += wordToShuffle[randomLetter];
        wordToShuffle = wordToShuffle.slice(0, randomLetter) + wordToShuffle.slice(randomLetter + 1);
        currentLetter--;
    }
};

shuffle();
while (shuffledWord === word) {
  shuffledWord = '';
  shuffle();
}

let listOfMixedLetters = document.createElement('ul');
listOfMixedLetters.setAttribute('id', 'listOfMixedLetters');
listOfMixedLetters.classList.add('listOfMixedLetters');
containerOfWord.appendChild(listOfMixedLetters);


let shuffledWordLength = shuffledWord.length;
for (let i = 0; i < shuffledWordLength; i++) {
  let liWithLetter = document.createElement('li');
  liWithLetter.innerHTML = shuffledWord[i];
  listOfMixedLetters.appendChild(liWithLetter);
}

$(function() {
    $( "#listOfMixedLetters" ).sortable();
    $( "#listOfMixedLetters" ).disableSelection();
  });

let button = document.createElement('button');
game.appendChild(button);

button.onclick = function () {
  let arr = Array.from(document.getElementsByTagName('li'));

  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += arr[i].innerHTML;
  }
  if (word === str) {
    console.log('получилось')
  } else {
    console.log('не получилось')
  }
}
