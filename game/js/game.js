export default class Game {
  constructor() {}
  startGame() {
    game.setAttribute('style', `background: url(img/backgrounds/background_${Math.ceil(Math.random()*7)}.png) repeat bottom / cover;`);

    let enemy = new Enemy();
    enemy.buildEnemy();

    let skills = new Skills();
    skills.buildSkills();
    skills.addEventsOnSkills();
  }
}
