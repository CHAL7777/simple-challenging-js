'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 12;
// document.querySelector('.guess').value = 23;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
  document.querySelector('.message').textContent = message;
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';

  let secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('start guessing');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '12rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = 'no number';
    displayMessage('no number');
  }
  //  --------------------------------------------------------
  else if (guess === secretNumber) {
    displayMessage('correct');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'too high' : 'too low';
      score--;
      displayMessage(guess > secretNumber ? 'too high' : 'too low');
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost';
    }
  }

  // -----------------------------------------------
  // else if (guess > secretNumber) {

  //     // ----------------------------------------------
  // } else if (guess < secretNumber) {
  //     if (score > 0) {
  //         document.querySelector('.message').textContent = 'too low';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //     }
  // ----------------------------------------------
  // else {
  //     document.querySelector('.message').textContent = 'you lost';
  //     // score--;
  //     // document.querySelector('.score').textContent = score;
  // }
  // document.querySelector('.message').textContent = 'too low';
  // score--;
  // document.querySelector('.score').textContent = score;
  // }
});
// let secretNumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.message').textContent = 'no number';

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = document.querySelector('.guess').value;
// if (!guess) {
//     document.querySelector('.message').textContent = 'no number';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'you got it';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//   } else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'too high';
//     score--;
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'too low';
//     score--;
//   }
// });
// let score = 20;
// let secretNumber = Math.trunc(Math.random() * 20 + 1);
// let highscore = 0;

// document.querySelector('.again').addEventListener('click', function () {
//   document.querySelector('.message').textContent = 'start guessing';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '16rem';
//   document.querySelector('.score').textContent = 20;
//   document.querySelector('.guess').value = '';
// });

// document.querySelector('.number').textContent = '?';
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   if (!guess) {
//     document.querySelector('.message').textContent = 'its not number';
//   }
//   // --------------------------------------------
//   else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'you got it';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   }
//   // ------------------------------------------------
//   else if (guess > secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost';
//     }
//   }
//   // -----------------------------------------------
//   else if (guess < secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost';
//     }
//   }
// });
