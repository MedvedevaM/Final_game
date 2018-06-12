class TranslateTask {
  constructor(){}
  createTranslation() {
    let mainAppend = document.getElementById('game');
    let translateTask = document.createElement('div');
    translateTask.className = 'flex global_wrap';
    mainAppend.appendChild(translateTask);
    let translateWrap = document.createElement('div');
    translateTask.appendChild(translateWrap);
    translateWrap.className = 'flex task_wrap';

    let taskName = document.createElement('h1');
    taskName.className = 'task';
    taskName.innerHTML = 'Try translate it';
    translateWrap.appendChild(taskName);
    let translateForm = document.createElement('form');
    translateForm.className = 'flex task_form';
    translateWrap.appendChild(translateForm);
    let engWord = document.createElement('label');
    engWord .className = 'task_random';
    engWord.setAttribute('id','eng');
    translateForm.appendChild(engWord);
    let rusTrans = document.createElement('input');
    rusTrans.setAttribute('id','translate');
    rusTrans.setAttribute('type','text');
    rusTrans.setAttribute('autocomplete','off');
    rusTrans.className = 'insert_word';
    translateForm.appendChild(rusTrans);
    let transSubmit = document.createElement('button');
    transSubmit.className = 'submit_task';
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
      event.preventDefault();
      let input = document.getElementById('translate').value;
      if(translate.indexOf(input)!=-1) {
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
    }
  }
}
// let a = new TranslateTask();
// a.createTranslation();
