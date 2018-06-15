class GameOver {
  constructor() {
  }
  init() {
    game.innerHTML = '';
    let wrapper = document.createElement('div');
    wrapper.id = 'gameOverWrapper';
    wrapper.classList.add('global_wrap');
    wrapper.classList.add('grid');
    game.appendChild(wrapper);

    let registationPage = document.createElement('button');
    registationPage.id = 'registation_page';
    registationPage.setAttribute('value', 'submit');
    registationPage.innerHTML = 'Registration page';
    registationPage.classList.add('game_over_button');
    wrapper.appendChild(registationPage);

    registation_page.onclick = function (event) {
      event.preventDefault();
      game.removeChild(gameOverWrapper);
      let registation = new Registration;
      registation.initialize();
    }
  }
}
