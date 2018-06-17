export default class GuessWord {
	constructor(){}
	buildGuessWord() {
		let mainAppend = document.getElementById('game');
		let flexWrap = document.createElement('div');
		let wrap = document.createElement('div');

		document.body.appendChild(mainAppend);
		mainAppend.appendChild(flexWrap);
		flexWrap.appendChild(wrap);
		flexWrap.className = 'flex global_wrap';
		wrap.className = 'flex task_wrap';
		let guessName = document.createElement('h1');
		guessName.innerHTML = 'Put only single letter!';
		guessName.className = 'task_name';
		let inputGuess = document.createElement('input');
		inputGuess.className = 'insert_word';
		inputGuess.setAttribute('id','guess_word');
		inputGuess.setAttribute('type','text');
		wrap.appendChild(guessName);
		wrap.appendChild(inputGuess);
		let inputButtonGuess = document.createElement('input');
		inputButtonGuess.setAttribute('type','button');
		inputButtonGuess.setAttribute('id','button_guess');
		inputButtonGuess.className = 'submit_task';
		inputButtonGuess.setAttribute('value','Guess');
		let inputButtonQuite = document.createElement('input');
		inputButtonQuite.className = 'submit_task';
		inputButtonQuite.setAttribute('type','button');
		inputButtonQuite.setAttribute('id','quite_but');
		inputButtonQuite.setAttribute('value','Quite');
		wrap.appendChild(inputButtonGuess);
		wrap.appendChild(inputButtonQuite);
		let concedeMessage = document.createElement('p');
		concedeMessage.setAttribute('id','full_word');
		concedeMessage.className = 'concede';
		wrap.appendChild(concedeMessage);
		let answer = document.createElement('span');
		answer.setAttribute('id','answer');
		answer.className = 'guess_answer';
		wrap.appendChild(answer);

		let index = Math.floor(Math.random()*vocabulary.length);
		let randomWord = vocabulary[index].word;
		let strWord = '';
		let answerArr = [];
		function init() {
			answerArr = [];
			for (var i = 0; i < randomWord.length; i++) {
			  answerArr[i] = "______";
			}
		  document.getElementById("answer").innerHTML= answerArr.join(" ");
		}
		init();
		let checkLetter = document.getElementById('button_guess');
		checkLetter.onclick = function (event) {
			let guess = document.getElementById('guess_word').value;
			let message = '';
			if(guess.length!==1) {
				message = 'entry only single letter'
			}
			else {
				let i = 0;
				for(let i=0;i<randomWord.length;i++) {
					if(randomWord[i]===guess) {
						answerArr[i] = guess;
						message = 'Right!' + guess+'is in the answer';
					}
				}
				let remainLetter = 0;
				for(i = 0;i<randomWord.length;i++) {
					if(answerArr[i]==="______") {
						remainLetter+=1;
					}
				}
				if(remainLetter==0) {
					message = 'You guessed the word!'
				}
				if (message === "") {
					message= "Sorry, no "+guess;
				}
					document.getElementById("answer").innerHTML = answerArr.join(" ");
					document.getElementById("guess_word").value = "";
			}
		}
		let quiteBut = document.getElementById('quite_but');
		quiteBut.onclick = function(event) {
			document.getElementById('full_word').innerHTML = 'The word was\n' + randomWord;
			for (let j = 0;j<randomWord.length;j++) {
				answerArr[j] = randomWord[j];
			}
			document.getElementById("answer").innerHTML = answerArr.join(" ");
		}
	}
}
// let gues = new GuessWord();
// gues.buildGuessWord();
