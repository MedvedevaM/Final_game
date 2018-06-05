class Player {
  constructor() {
    this.head;
    this.body;
  }

  buildPlayer() {
    let playerHead = document.createElement('div');
    playerHead.classList.add('player_head_4');
    playerHead.setAttribute('id', 'playerHead');
    game.appendChild(playerHead);

    let playerBody = document.createElement('div');
    playerBody.classList.add('player_body');
    playerBody.classList.add('player_body_4');
    playerBody.setAttribute('style', 'background-position: -20px -242px;');
    playerBody.setAttribute('id', 'playerBody');
    game.appendChild(playerBody);

    let playerLegs = document.createElement('div');
    playerLegs.classList.add('player_legs');
    playerLegs.classList.add('player_body_4');
    playerLegs.setAttribute('style', 'background-position: -22px -5px;');
    playerLegs.setAttribute('id', 'playerLegs');
    game.appendChild(playerLegs);

    function animatePlayer() {
      if (playerBody.style.bottom === '140px') {
        playerHead.style.bottom = '310px';
        playerBody.style.bottom = '135px';
      } else {
        playerHead.style.bottom = '315px';
        playerBody.style.bottom = '140px';
      }
    }
    setInterval(animatePlayer, 500);
  }

  addMoveability() {
    let currentPosition = 20;
    function movePlayer(destination) {
      let step = 10;
      if (destination === 'back') {
        if (currentPosition >= 20) {
          currentPosition -= step;
        }
        playerBody.setAttribute('style', 'background-position: -215px -242px;');
        playerHead.setAttribute('style', 'background-position: -170px 0px;');
        playerLegs.setAttribute('style', 'background-position: -420px -110px;');
      } else if (destination === 'forward') {
        if (currentPosition <= window.innerWidth - 250) {
          currentPosition += step;
        }
        playerBody.setAttribute('style', 'background-position: -20px -242px;');
        playerHead.setAttribute('style', 'background-position: 0px 0px;');
        playerLegs.setAttribute('style', 'background-position: -210px -5px;');
      }
      playerBody.style.left = `${currentPosition}px`;
      playerHead.style.left = `${currentPosition}px`;
      playerLegs.style.left = `${currentPosition}px`;
    }

    function changeDestinationOfBody(destination) {
      if (destination === 'back') {
        playerLegs.setAttribute('style', 'background-position: -27px -115px;');
      } else if (destination === 'forward') {
        playerLegs.setAttribute('style', 'background-position: -22px -5px;');
      }
      playerLegs.style.left = `${currentPosition}px`;
    }

    document.onkeydown = function (event) {
      if (event.keyCode === 39) {
        movePlayer('forward');
      } else if (event.keyCode === 37) {
        movePlayer('back');
      }
    }

    document.onkeyup = function (event) {
      if (event.keyCode === 39) {
        changeDestinationOfBody('forward');
      } else if (event.keyCode === 37) {
        changeDestinationOfBody('back');
      }
    }
  }

  initialize() {
    this.buildPlayer();
    this.addMoveability();
  }
}
