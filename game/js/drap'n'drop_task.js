class DragNDropTask {
  constructor() {
    this.word = vocabulary[Math.floor(Math.random()*(vocabulary.length))].word;
  }
  buildTask() {
    let task = document.createElement('div');
    task.id = 'task';
    task.classList.add('global_wrap');
    task.classList.add('grid');
    game.appendChild(task);


    let shuffledWord = '';
    function shuffle(wordToShuffle) {
        let currentLetter = wordToShuffle.length - 1;
        let randomLetter;
        while (currentLetter >= 0) {
            randomLetter = Math.floor(Math.random() * currentLetter);
            shuffledWord += wordToShuffle[randomLetter];
            wordToShuffle = wordToShuffle.slice(0, randomLetter) + wordToShuffle.slice(randomLetter + 1);
            currentLetter--;
        }
    };

    shuffle(this.word);
    while (shuffledWord === this.word) {
      shuffledWord = '';
      shuffle(this.word);
    }

    let listOfMixedLetters = document.createElement('ul');
    listOfMixedLetters.setAttribute('id', 'listOfMixedLetters');
    listOfMixedLetters.classList.add('listOfMixedLetters');
    task.appendChild(listOfMixedLetters);


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
    button.setAttribute('value', 'submit');
    button.innerHTML = 'answer';
    button.classList.add('submit_task');
    button.classList.add('drag_n_drop_button');
    task.appendChild(button);

    let word = this.word;
    button.onclick = function () {
      event.preventDefault();
      let arr = Array.from(document.getElementsByTagName('li'));
      let str = '';
      for (let i = 0; i < arr.length; i++) {
        str += arr[i].innerHTML;
      }
      if (word === str) {
        let congrats = new Congratulation();
        congrats.createCongratulations();
        let lostLifeArr = lifeOfEnemy.innerHTML.split(/\//g);
        lifeOfEnemy.innerHTML = `${lostLifeArr[0] - 10}/100`;
        lifeOfEnemy.setAttribute('style', `background-position: ${(-368 + (100 - (lostLifeArr[0] - 10)) * 3.5)}px -57px;`);
      } else {
        let lostLifeArr = lifeOfPlayer.innerHTML.split(/\//g);
        lifeOfPlayer.innerHTML = `${lostLifeArr[0] - 10}/100`;
        lifeOfPlayer.setAttribute('style', `background-position: -${(100 - (lostLifeArr[0] - 10)) * 3.5}px -11px;`);
      }
      game.removeChild(task);
    }
  }
}
