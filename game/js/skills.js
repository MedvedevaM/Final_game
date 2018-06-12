class Skills {
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
    let firstSkill = document.createElement('div');

    let secondSkill = document.createElement('div');
    let thirdSkill = document.createElement('div');
    let fourSkill = document.createElement('div');
    firstSkill.className = "skill first_spell";
    secondSkill.className = "skill second_spell";
    thirdSkill.className = "skill third_spell";
    fourSkill.className = "skill four_spell";

    firstSkill.setAttribute('id','skill_one');
    secondSkill.setAttribute('id','skill_two');
    thirdSkill.setAttribute('id','skill_three');
    fourSkill.setAttribute('id','skill_four');
    wrapperSkills.appendChild(firstSkill);
    wrapperSkills.appendChild(secondSkill);
    wrapperSkills.appendChild(thirdSkill);
    wrapperSkills.appendChild(fourSkill);
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
