import DragNDropTask from './tasks/drap_n_drop_task';
import MathTask from './tasks/math';
import ListeningTask from './tasks/listening';
import TranslateTask from './tasks/translate_number';
export default class Skills {
  constructor() {

  }

  buildSkills() {
    let appendToMain = document.getElementById('game');
    let flexWrap = document.createElement('div');
    flexWrap.id = 'choiceOfSkills';
    flexWrap.className = 'flex flex_container';
    let wrapperSkills = document.createElement('div');
    flexWrap.appendChild(wrapperSkills);
    wrapperSkills.setAttribute('id','skill_board');
    wrapperSkills.className = 'flex wrap_skills';
    appendToMain.appendChild(flexWrap);
    flexWrap.appendChild(wrapperSkills);
    for(let i = 1;i<=7;i++) {
      let div = document.createElement('div');
      div.id = `skill_${i}`;
      div.className = `skill skill_${i}`;
      wrapperSkills.appendChild(div);
    }
  }
  addEventsOnSkills() {
    let task;
    skill_1.onclick = function () {
      task = new DragNDropTask();
      task.buildTask();
      game.removeChild(choiceOfSkills);
    }
    skill_2.onclick = function () {
      task = new MathTask();
      task.buildMathTask();
      game.removeChild(choiceOfSkills);
    }
    skill_3.onclick = function () {
      task = new AnimalTask();
      task.createAnimalTask();
      game.removeChild(choiceOfSkills);
    }
    skill_4.onclick = function () {
      task = new ListeningTask();
      task.createListening();
      game.removeChild(choiceOfSkills);
    }
    skill_5.onclick = function () {
      task = new TranslateTask();
      task.createTranslation();
      game.removeChild(choiceOfSkills);
    }
    skill_6.onclick = function () {
      task = new MatchingWords();
      task.buildTask();
      game.removeChild(choiceOfSkills);
    }
    skill_7.onclick = function () {
      task = new TranslateNumber();
      task.buildTranslateNumber();
      game.removeChild(choiceOfSkills);
    }
  }
}
