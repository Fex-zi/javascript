'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number🍷!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log((document.querySelector('.guess').value = 23));

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //state variable

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    //won
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🍷 Correct Number, You won!';
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;

    //too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--; //or score = score -1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😂 You Lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--; //or score = score -1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😂 You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
