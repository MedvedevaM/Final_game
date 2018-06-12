class Congratulation {
  constructor(){}
  createCongratulations() {
    let mainAppend = document.getElementById('game');
    let animWrap = document.createElement('div');
    let text = document.createElement('p');
    let block = document.createElement('div');
    animWrap.className = 'global_wrap';
    block.setAttribute('id','anim');
    block.className = 'slide task_wrap';
    mainAppend.appendChild(animWrap);
    // document.body.appendChild(animWrap);
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
