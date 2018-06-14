(function () {

  let registation = new Registration;
  registation.initialize();

  play_game.onclick = function (event) {
    // if (!usersName.value) {
    //   alert('Please, enter your name!');
    //   return false;
    // }

    event.preventDefault();

    let player = new Player();
    player.name = usersName.value;
    player.head = document.querySelector('.player_head').getAttribute('id');
    player.body = document.querySelector('.player_body').getAttribute('id');

    let arrayOfUsers = [];
    if(localStorage.getItem('arrayOfUsers')) {
        arrayOfUsers = JSON.parse(localStorage.getItem('arrayOfUsers'));
    }

    arrayOfUsers.push(player.name);
    localStorage.setItem("arrayOfUsers", JSON.stringify(arrayOfUsers));

    game.innerHTML = '';
    player.initialize();

    let new_game = new Game();
    new_game.startGame();

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

      if (currentPosition > window.innerWidth - 500) {
        currentPosition = 0;
        game.innerHTML = '';
        player.initialize();
        new_game = new Game();
        new_game.startGame();
      }
    }

    document.onkeydown = function (event) {
      if (event.keyCode === 39) {
        movePlayer('forward');
      } else if (event.keyCode === 37) {
        movePlayer('back');
      }
      // setInterval(animateLegs, 100);
    }

    // if (player.currentPosition > window.innerWidth - 500) {
    //   game.innerHTML = '';
    //
    //   player.initialize();
    //   new_game = new Game();
    //   new_game.startGame();
    // }
    //
    // // let enemyBody = document.getElementById('enemyBody');
    // let aim = `${window.innerWidth - 500}px`
    // if (playerBody.style.left == aim) {
    //   new_game = new Game();
    //   new_game.startGame();
    // }

    // let lostLifeArr = lifeOfPlayer.innerHTML.split(/\//g);
    // console.log('kek');
    // if (lostLifeArr[0] !== 0 && !) {
    //   console.log('kek');
    //   let explosion = new Explosion('player');
    //   explosion.buidExplosion();
    // }

    // restart.onclick = function () {
    //   if (!game.lost) {
    //     let arrayOfUsers = JSON.parse(localStorage.getItem('arrayOfUsers'));
    //     arrayOfUsers.push(user);
    //     localStorage.setItem("arrayOfUsers", JSON.stringify(arrayOfUsers));
    //   }
    //   clearInterval(game.interval);
    //   desk.innerHTML = '';
    //   game.moves = 0;
    //   game.begin();
    // }
  }

})();
