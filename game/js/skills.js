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
    flexWrap.className = 'flex flex_container';
    let wrapperSkills = document.createElement('div');
    flexWrap.appendChild(wrapperSkills);
    wrapperSkills.setAttribute('id','skill_board');
    wrapperSkills.className = 'flex wrap_skills';
    appendToMain.appendChild(flexWrap);
    flexWrap.appendChild(wrapperSkills);
    for(let i = 1;i<=8;i++) {
      let div = document.createElement('div');
      div.id = `skill_${i}`;
      div.className = `skill skill_${i}`;
      wrapperSkills.appendChild(div);
    }
  }
  addEventsOnSkills() {
    let task;
    skill_one.onclick = function () {
      task = new DragNDropTask();
      task.buildTask();
    }
    skill_two.onclick = function () {
      task = new MathTask();
      task.buildMathTask();
    }
    skill_three.onclick = function () {
      task = new ListeningTask();
      task.createListening();
    }
    skill_four.onclick = function () {
      task = new TranslateTask();
      task.createTranslation();
    }
  }
}
// let skill = new Skills();
// skill.buildSkills();
