class Enemy {
  constructor() {
    this.name;
    this.head = Math.ceil(Math.random()*4);
    this.body = Math.ceil(Math.random()*4);
    this.weapon = Math.ceil(Math.random()*3);
    // this.weapon = 1;
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
    enemyWeapon.classList.add('enemy_weapon');
    enemyWeapon.classList.add(`enemy_weapon_${this.weapon}`);
    enemyWeapon.setAttribute('id', 'enemyLegs');
    game.appendChild(enemyWeapon);
    function animateEnemy() {
      if (enemyHead.style.bottom === '325px') {
        enemyHead.style.bottom = '320px';
        enemyWeapon.style.bottom = '125px';
      } else {
        enemyHead.style.bottom = '325px';
        enemyWeapon.style.bottom = '130px';
      }
    }
    setInterval(animateEnemy, 500);
  }

  
  initialize() {
    this.buildEnemy();
  }
}
