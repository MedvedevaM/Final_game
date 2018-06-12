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

    game.setAttribute('style', `background: url(img/backgrounds/background_${Math.ceil(Math.random()*7)}.png) repeat bottom / cover;`);
    player.initialize();

    let enemy = new Enemy();
    enemy.initialize();

    let skills = new Skills();
    skills.buildSkills();

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
