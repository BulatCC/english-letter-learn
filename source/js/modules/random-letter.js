export const randomLetter = () => {
  const letterField = document.querySelector('.letter');
  const checkLetterButton = document.querySelector('.js-next-letter');
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let lettersCopy = [...letters];
  const getRandomLetter = () => {
    if (lettersCopy.length === 0) {
      lettersCopy = [...letters];
    }

    let randomElement = Math.floor(Math.random() * lettersCopy.length);
    window.letter = lettersCopy[randomElement];
    lettersCopy.splice(randomElement, 1);
    letterField.textContent = window.letter + window.letter;
  };

  getRandomLetter();
  checkLetterButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    getRandomLetter();
  });
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowRight') {
      getRandomLetter();
    }
  })
};
