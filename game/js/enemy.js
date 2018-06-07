class Enemy {
  constructor() {
    this.name;
    this.head = Math.ceil(Math.random()*4);
    this.body = Math.ceil(Math.random()*4);
    // this.weapon = Math.ceil(Math.random()*3);
    this.weapon = 1;
  }

  buildEnemy() {
    let enemyHead = document.createElement('div');
    enemyHead.classList.add('enemy_head');
    enemyHead.classList.add(`enemy_body_${this.head}`);
    enemyHead.setAttribute('id', 'enemyHead');
    game.appendChild(enemyHead);

    let enemyBody = document.createElement('div');
    enemyBody.classList.add('enemy_body');
    enemyBody.classList.add(`enemy_body_${this.body}`);
    enemyBody.setAttribute('id', 'enemyBody');
    game.appendChild(enemyBody);

    let enemyLegs = document.createElement('div');
    enemyLegs.classList.add('enemy_legs');
    enemyLegs.classList.add(`enemy_body_${this.body}`);
    enemyLegs.setAttribute('id', 'enemyLegs');
    game.appendChild(enemyLegs);


    let enemyWeapon = document.createElement('div');
    enemyWeapon.classList.add('enemy_legs');
    enemyWeapon.classList.add(`enemy_weapon_${this.weapon}`);
    enemyWeapon.setAttribute('id', 'enemyLegs');
    game.appendChild(enemyWeapon);
    // function animateEnemy() {
    //   if (enemyBody.style.bottom === '140px') {
    //     enemyHead.style.bottom = '310px';
    //     enemyBody.style.bottom = '135px';
    //   } else {
    //     enemyHead.style.bottom = '315px';
    //     enemyBody.style.bottom = '140px';
    //   }
    // }
    // setInterval(animateEnemy, 500);
  }

  addMoveability() {
    let currentPosition = 20;
    function moveEnemy(destination) {
      let step = 10;
      if (destination === 'back') {
        if (currentPosition >= 20) {
          currentPosition -= step;
        }
        enemyBody.setAttribute('style', 'background-position: -215px -242px;');
        enemyHead.setAttribute('style', 'background-position: -170px 0px;');
        enemyLegs.setAttribute('style', 'background-position: -420px -110px;');
      } else if (destination === 'forward') {
        if (currentPosition <= window.innerWidth - 250) {
          currentPosition += step;
        }
        enemyBody.setAttribute('style', 'background-position: -20px -242px;');
        enemyHead.setAttribute('style', 'background-position: 0px 0px;');
        enemyLegs.setAttribute('style', 'background-position: -210px -5px;');
      }
      enemyBody.style.right = `${currentPosition}px`;
      enemyHead.style.right = `${currentPosition}px`;
      enemyLegs.style.right = `${currentPosition}px`;
    }

    function changeDestinationOfBody(destination) {
      if (destination === 'back') {
        enemyLegs.setAttribute('style', 'background-position: -27px -115px;');
      } else if (destination === 'forward') {
        enemyLegs.setAttribute('style', 'background-position: -22px -5px;');
      }
      enemyLegs.style.left = `${currentPosition}px`;
    }

    // document.onkeydown = function (event) {
    //   if (event.keyCode === 39) {
    //     movePlayer('forward');
    //   } else if (event.keyCode === 37) {
    //     movePlayer('back');
    //   }
    // }
    //
    // document.onkeyup = function (event) {
    //   if (event.keyCode === 39) {
    //     changeDestinationOfBody('forward');
    //   } else if (event.keyCode === 37) {
    //     changeDestinationOfBody('back');
    //   }
    // }
  }

  initialize() {
    this.buildEnemy();
  }
}
