class Listen {
  constructor(){}
  createListening() {
    let mainAppend = document.getElementById('game');
    let mainContent = document.createElement('div');
    mainContent.setAttribute('id','component');
    mainContent.className = 'global_wrap';
    mainAppend.appendChild(mainContent);
    let form = document.createElement('form');
    form.className = 'enter_word';
    let speakInput = document.createElement('input');
    let wordInput = document.createElement('input');
    let button = document.createElement('button');
    let myArray = ["APPLES","BANANAS","PEARS"];
    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    let keybordButton = document.createElement('div');
    let iconKeyboard = document.createElement('i');
    let popup = document.createElement('div');
    let task = document.createElement('h1');
    let wrapInput = document.createElement('div');
    wrapInput.appendChild(task);
    wrapInput.appendChild(form);
    wrapInput.className = 'task_wrap';

    task.className = 'task';
    task.innerHTML = 'Enter the word you heard';
    mainContent.appendChild(wrapInput);
    speakInput.setAttribute('id','speak');
    speakInput.className = 'listen_word';
    speakInput.setAttribute('type','button');
    speakInput.setAttribute('value','Play');
    keybordButton.appendChild(iconKeyboard);
    keybordButton.className = 'virtual-keyboard-hook';
    keybordButton.setAttribute('data-target-id','type-word');
    keybordButton.setAttribute('data-keyboard-mapping','qwerty');
    iconKeyboard.className = 'fa fa-keyboard-o';
    iconKeyboard.setAttribute('aria-hidden','true');
    button.innerHTML = 'Submit';
    form.appendChild(speakInput);
    form.appendChild(wordInput);
    form.appendChild(button);
    form.appendChild(keybordButton);

    wordInput.setAttribute('id','type-word');
    wordInput.className = 'insert_word';
    wordInput.setAttribute('type','text');
    wordInput.setAttribute('autocomplete','off');

    wordInput.setAttribute('virtual-keyboard','');
    wordInput.className = 'insert_word';
    button.setAttribute('id','check');
    button.className = 'submit_task';
    button.setAttribute('type','submit')

    let a = document.getElementById('type-word');

    speak.onclick = function(event) {
      responsiveVoice.speak(randomItem);
    }
    check.onclick = function (event) {
      event.stopPropagation();
    let text = document.getElementById('type-word').value.toUpperCase();
    if(myArray.indexOf(text)!=-1) {
      alert('congratulate');
    }
    else {
        alert('Try again');
      }
    }
  }
  init() {
    this.createListening();
  }
}
// let a = new Listen();
// a.init();
