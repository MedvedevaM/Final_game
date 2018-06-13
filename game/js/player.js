class Player {
  constructor() {
    this.name;
    this.head;
    this.body;
    this.killedEnemies;
  }

  buildPlayer() {
    let playerName = document.createElement('p');
    playerName.innerHTML = this.name;
    playerName.classList.add('characters_name');
    playerName.classList.add('player_name');
    game.appendChild(playerName);

    let lifeOfPlayer = document.createElement('div');
    lifeOfPlayer.id = 'lifeOfPlayer';
    lifeOfPlayer.classList.add('quantity_of_lost_life');
    lifeOfPlayer.classList.add('quantity_of_lost_life_of_player');
    lifeOfPlayer.innerHTML = '100/100';
    game.appendChild(lifeOfPlayer);

    let playerHead = document.createElement('div');
    playerHead.classList.add(`player_head_${this.head}`);
    playerHead.setAttribute('id', 'playerHead');
    game.appendChild(playerHead);

    let playerBody = document.createElement('div');
    playerBody.classList.add('player_body');
    playerBody.classList.add(`player_body_${this.body}`);
    playerBody.setAttribute('id', 'playerBody');
    game.appendChild(playerBody);

    let playerLegs = document.createElement('div');
    playerLegs.classList.add('player_legs');
    playerLegs.classList.add(`player_body_${this.body}`);
    playerLegs.setAttribute('style', 'background-position: -22px -5px;');
    playerLegs.setAttribute('id', 'playerLegs');
    game.appendChild(playerLegs);

    function animatePlayer() {
      if (playerBody.style.bottom === '137px') {
        playerHead.style.bottom = '307px';
        playerBody.style.bottom = '132px';
      } else {
        playerHead.style.bottom = '312px';
        playerBody.style.bottom = '137px';
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
        playerLegs.setAttribute('style', 'background-position: -415px -110px;');
      } else if (destination === 'forward') {
        let enemyBody = document.getElementById('enemyBody');
        if (!enemyBody) {
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


    // function animateLegs() {
    //   if (playerBody.style.backgroundPosition === '-215px -242px') {
    //     if (playerLegs.style.backgroundPosition === '-415px -110px') {
    //       playerLegs.setAttribute('style', 'background-position: -210px -115px;');
    //     } else {
    //       playerLegs.setAttribute('style', 'background-position: -415px -110px;');
    //     }
    //   }
    //   if (playerBody.style.backgroundPosition === '-20px -242px') {
    //     if (playerLegs.style.backgroundPosition === '-210px -5px') {
    //       playerLegs.setAttribute('style', 'background-position: -406px -5px;');
    //     } else {
    //       playerLegs.setAttribute('style', 'background-position: -210px -5px;');
    //     }
    //   }
    //   playerLegs.style.left = `${currentPosition}px`;
    // }

    document.onkeydown = function (event) {
      if (event.keyCode === 39) {
        movePlayer('forward');
      } else if (event.keyCode === 37) {
        movePlayer('back');
      }
      // setInterval(animateLegs, 100);
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
