class Congratulation {
  constructor(){}
  createCongratulations() {
    let mainAppend = document.getElementById('game');
    let animWrap = document.createElement('div');
    let text = document.createElement('p');
    let block = document.createElement('div');
    animWrap.className = 'flex global_wrap';
    block.setAttribute('id','anim');
    block.className = 'flex slide task_wrap';
    mainAppend.appendChild(animWrap);
    // document.body.appendChild(animWrap);
    animWrap.appendChild(block);
    text.className = 'congrats-text';
    text.innerHTML = 'Congratulations!!!';
    block.appendChild(text);
  }
}
// let a = new Congratulation();
// a.createCongratulations();
