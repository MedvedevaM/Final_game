class Congratulation {
  constructor(){}
  createCongratulations() {
    let animWrap = document.createElement('div');
    let text = document.createElement('p');
    let block = document.createElement('div');
    let appendCongrats = document.getElementById('game');
    appendCongrats.appendChild(animWrap);
    animWrap.className = 'slide_wrapper';
    block.setAttribute('id','anim');
    block.className = 'slide_right'

    animWrap.appendChild(block);
    text.className = 'congrats-text';
    text.innerHTML = 'Congratulations!!!';
    block.appendChild(text);
  }
  init() {
   this.createCongratulations();
  }
}
// let a = new Congratulation();
// a.init();
