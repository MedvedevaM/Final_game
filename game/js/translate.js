class Translate {
  constructor(){}
  createTranslation() {
    let translateTask = document.createElement('div');
    translateTask.className = 'global_task_wrapper';
    let appendToGame = document.getElementById('game');
    appendToGame.appendChild(translateTask);
    let translateWrap = document.createElement('div');
    translateTask.appendChild(translateWrap);
    translateWrap.className = 'translate_wrap';

    let taskName = document.createElement('h1');
    taskName.className = 'english_task';
    taskName.innerHTML = 'Try translate it';
    translateWrap.appendChild(taskName);
    let translateForm = document.createElement('form');
    translateForm.className = 'translate_form';
    translateWrap.appendChild(translateForm);
    let engWord = document.createElement('label');
    engWord .className = 'eng_word';
    engWord.setAttribute('id','eng');
    translateForm.appendChild(engWord);
    let rusTrans = document.createElement('input');
    rusTrans.setAttribute('id','translate');
    rusTrans.setAttribute('type','text');
    rusTrans.setAttribute('autocomplete','off');
    rusTrans.className = 'trans_word';
    translateForm.appendChild(rusTrans);
    let transSubmit = document.createElement('button');
    transSubmit.className = 'translation';
    transSubmit.setAttribute('id','check_translate');
    transSubmit.innerHTML = 'Submit';
    translateForm.appendChild(transSubmit);
    let cashIndex = Math.floor(Math.random()*vocabulary.length);
    let engInput = vocabulary[cashIndex].word;
    let translate = vocabulary[cashIndex].translate;
    let label = document.getElementById('eng');
    label.innerHTML = engInput;

    let button = document.getElementById('check_translate');
    button.onclick = function(event) {
      let input = document.getElementById('translate').value;
      if(translate.indexOf(input)!=-1) {
      alert('ypa');
      }
      else {
      alert('foo');
      }
    }
  }
  init() {
    this.createTranslation();
  }
}
// let a = new Translate();
// a.init();
