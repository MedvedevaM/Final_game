class Mathematic {
  constructor(){}
  buildMathTask() {
    let maxNum = 12,
    stillPlaying = true,
    ans,
    isCorrect = '',
    correctAns = '',
    sign,
    num1 = 0,
    num2 = 0,
    prob;
  function randInt(max) {
    return Math.floor(Math.random() * max);
  }
  function getCorrectAns(n1, sign, n2) {
    switch (sign) {
      case '+':
        return n1 + n2;
      case '\u2212':
        return n1 - n2;
      case '\xD7':
        return n1 * n2;
      case '\xF7':
        return n1 / n2;
      default:
        return false;
    }
  }
  while (stillPlaying) {
    sign = ['+', '\u2212', '\xD7', '\xF7'][randInt(4)];
    num1 = randInt(maxNum + 1);
    num2 = randInt(maxNum + 1);
    if (sign == '\u2212') num1 += num2;
    if (sign == '\xF7') {
      num2 = randInt(maxNum) + 1;
      num1 *= num2;
    }
    prob = num1 + ' ' + sign + ' ' + num2;
    if (!ans) stillPlaying = false;
    correctAns = getCorrectAns(num1, sign, num2);
    isCorrect = (correctAns == ans) ? 'Correct! ' : 'Incorrect, ' + prob + ' = ' + correctAns + '.\n';
  }
  let appendToMain = document.getElementById('game');

  let mathGlobalWrap = document.createElement('div');
  let mathWrap = document.createElement('div');
  let mathForm = document.createElement('form');
  let mathCondition = document.createElement('label');
  let mathSolve = document.createElement('input');
  let mathSubmit = document.createElement('button');
  let mathTask = document.createElement('h1');
  mathGlobalWrap.className = 'math_global_wrap';
  mathTask.className = 'math_task';
  mathTask.innerHTML= "Try to solve it";
  mathWrap.appendChild(mathTask);

  mathWrap.className = 'math_wrap';
  mathForm.className = 'math_form';

  mathCondition.className = 'condition';
  mathCondition.setAttribute('id','math');

  mathSolve.setAttribute('id','ans');
  mathSolve.setAttribute('type','text');
  mathSolve.setAttribute('autocomplete','off');
  mathSolve.className = 'answer';

  mathSubmit.className = 'button';
  mathSubmit.setAttribute('id','check_answer');
  mathSubmit.innerHTML = 'Submit';
  // document.body.appendChild(mathGlobalWrap);
  appendToMain.appendChild(mathGlobalWrap);
  mathGlobalWrap.appendChild(mathWrap);
  mathWrap.appendChild(mathForm);
  mathForm.appendChild(mathCondition);
  mathForm.appendChild(mathSolve);
  mathForm.appendChild(mathSubmit);

  let label = document.getElementById('math');
  label.innerHTML = prob+'=';
  let button = document.getElementById('check_answer');

  button.onclick = function(event) {
    let inp = document.getElementById('ans');
    if(inp.value==correctAns) {
      alert('yeah');
    }
    else {
      alert('foo');
    }
  }
}
  init() {
    this.buildMathTask();
  }
}

 let a = new Mathematic();
 a.init();
