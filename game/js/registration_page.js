class Abat {
constructor(){}
inita() {
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

  }

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
}
let qw = new Abat();
qw.inita();
