export const checkLetter = () => {
  const checkButton = document.querySelector('.js-check');
  const play = () => {
    const audio = new Audio(`audio/${window.letter}.mp3`);
    audio.play();
    checkButton.classList.add('button--disabled');
    setTimeout(()=> {
      window.removeEventListener('keydown', handleSpaceKeyPress);
      setTimeout(() => {
        checkButton.classList.remove('button--disabled');
        window.addEventListener('keydown', handleSpaceKeyPress);
      }, audio.duration * 1000);
    }, 20);
  };

  const handleSpaceKeyPress = (evt) => {
    if (evt.key === ' ') {
      play();
    }
  }

  checkButton.addEventListener('click', () => {
    play();
  });

  window.addEventListener('keydown', handleSpaceKeyPress);
};
