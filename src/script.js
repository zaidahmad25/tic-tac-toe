/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */

const board = document.querySelector('.board');
const start = document.querySelector('.start');
const playerScoreEl = document.querySelector('#playerScore');
const computerScoreEl = document.querySelector('#computerScore');
const choices = ['❌', 'O'];
const boxes = [...board.children];

let index = 0;
let movesPlayer = [];
let movesComputer = [];

const player = (move) => {
  movesPlayer.push(move);
  const name = 'player';
  let verdict = false;
  let score = 0;
  console.log('player', movesPlayer);

  if (movesPlayer.length === 3) {
    if (movesPlayer[0] === 0 && movesPlayer[movesPlayer.length - 1] === 1) {
      for (const i of movesPlayer) {
        if (i === 2) {
          verdict = true;
          alert('You Win!');
          score++;
        }
      }
    } else if (movesPlayer[0] === 3 && movesPlayer[movesPlayer.length - 1] === 4) {
      for (const i of movesPlayer) {
        if (i === 5) {
          verdict = true;
          alert('You Win!');
          score++;
        }
      }
    // eslint-disable-next-line max-len
    } else if (movesPlayer[0] === 6 && movesPlayer[movesPlayer.length - 1] === 7) {
      for (const i of movesPlayer) {
        if (i === 8) {
          verdict = true;
          alert('You Win!');
          score++;
        }
      }
    // eslint-disable-next-line max-len
    } else if (movesPlayer[0] === 0 && movesPlayer[movesPlayer.length - 1] === 3) {
      for (const i of movesPlayer) {
        if (i === 6) {
          verdict = true;
          alert('You Win!');
          score++;
        }
      }
    } else if (movesPlayer[0] === 1 && movesPlayer[movesPlayer.length - 1] === 4) {
      for (const i of movesPlayer) {
        if (i === 7) {
          verdict = true;
          alert('You Win!');
          score++;
        }
      }
    } else if (movesPlayer[0] === 2 && movesPlayer[movesPlayer.length - 1] === 5) {
      for (const i of movesPlayer) {
        if (i === 8) {
          verdict = true;
          alert('You Win!');
          score++;
        }
      } if (movesPlayer[0] === 0 && movesPlayer[movesPlayer.length - 1] === 1) {
        for (const i of movesPlayer) {
          if (i === 2) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      } else if (movesPlayer[0] === 3 && movesPlayer[movesPlayer.length - 1] === 4) {
        for (const i of movesPlayer) {
          if (i === 5) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
        // eslint-disable-next-line max-len
      } else if (movesPlayer[0] === 6 && movesPlayer[movesPlayer.length - 1] === 7) {
        for (const i of movesPlayer) {
          if (i === 8) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
        // eslint-disable-next-line max-len
      } else if (movesPlayer[0] === 0 && movesPlayer[movesPlayer.length - 1] === 3) {
        for (const i of movesPlayer) {
          if (i === 6) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      } else if (movesPlayer[0] === 1 && movesPlayer[movesPlayer.length - 1] === 4) {
        for (const i of movesPlayer) {
          if (i === 7) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      } else if (movesPlayer[0] === 2 && movesPlayer[movesPlayer.length - 1] === 5) {
        for (const i of movesPlayer) {
          if (i === 8) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      } else if (movesPlayer[0] === 2 && movesPlayer[movesPlayer.length - 1] === 1) {
        for (const i of movesPlayer) {
          if (i === 0) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      } else if (movesPlayer[0] === 5 && movesPlayer[movesPlayer.length - 1] === 4) {
        for (const i of movesPlayer) {
          if (i === 3) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      // eslint-disable-next-line max-len
      } else if (movesPlayer[0] === 8 && movesPlayer[movesPlayer.length - 1] === 7) {
        for (const i of movesPlayer) {
          if (i === 6) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      // eslint-disable-next-line max-len
      } else if (movesPlayer[0] === 6 && movesPlayer[movesPlayer.length - 1] === 3) {
        for (const i of movesPlayer) {
          if (i === 0) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      } else if (movesPlayer[0] === 7 && movesPlayer[movesPlayer.length - 1] === 4) {
        for (const i of movesPlayer) {
          if (i === 1) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      } else if (movesPlayer[0] === 8 && movesPlayer[movesPlayer.length - 1] === 5) {
        for (const i of movesPlayer) {
          if (i === 2) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      } else if (movesPlayer[0] === 0 && movesPlayer[movesPlayer.length - 1] === 4) {
        for (const i of movesPlayer) {
          if (i === 8) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      } else if (movesPlayer[0] === 2 && movesPlayer[movesPlayer.length - 1] === 4) {
        for (const i of movesPlayer) {
          if (i === 6) {
            verdict = true;
            alert('You Win!');
            score++;
          }
        }
      }
    }
  }
  return { score, verdict, name };
};

const computer = (move) => {
  movesComputer.push(move);
  const name = 'computer';
  let verdict = false;
  let score = 0;

  console.log('computer', movesComputer);

  if (movesComputer.length === 3) {
    if (movesComputer[0] === 0 && movesComputer[movesComputer.length - 1] === 1) {
      for (const i of movesPlayer) {
        if (i === 2) {
          verdict = true;
          alert('You Lose :(');
          score++;
        }
      }
    } else if (movesComputer[0] === 3 && movesComputer[movesComputer.length - 1] === 4) {
      for (const i of movesComputer) {
        if (i === 5) {
          verdict = true;
          alert('You Lose :(');
          score++;
        }
      }
      // eslint-disable-next-line max-len
    } else if (movesComputer[0] === 6 && movesComputer[movesComputer.length - 1] === 7) {
      for (const i of movesComputer) {
        if (i === 8) {
          verdict = true;
          alert('You Lose :(');
          score++;
        }
      }
      // eslint-disable-next-line max-len
    } else if (movesComputer[0] === 0 && movesComputer[movesComputer.length - 1] === 3) {
      for (const i of movesComputer) {
        if (i === 6) {
          verdict = true;
          alert('You Lose :(');
          score++;
        }
      }
    } else if (movesComputer[0] === 1 && movesComputer[movesComputer.length - 1] === 4) {
      for (const i of movesComputer) {
        if (i === 7) {
          verdict = true;
          alert('You Lose :(');
          score++;
        }
      }
    } else if (movesComputer[0] === 2 && movesComputer[movesComputer.length - 1] === 5) {
      for (const i of movesComputer) {
        if (i === 8) {
          verdict = true;
          alert('You Lose :(');
          score++;
        }
      } if (movesComputer[0] === 0 && movesComputer[movesComputer.length - 1] === 1) {
        for (const i of movesComputer) {
          if (i === 2) {
            verdict = true;
            alert('You Lose :(!');
            score++;
          }
        }
      } else if (movesComputer[0] === 3 && movesComputer[movesComputer.length - 1] === 4) {
        for (const i of movesComputer) {
          if (i === 5) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
      // eslint-disable-next-line max-len
      } else if (movesComputer[0] === 6 && movesComputer[movesComputer.length - 1] === 7) {
        for (const i of movesComputer) {
          if (i === 8) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
      // eslint-disable-next-line max-len
      } else if (movesComputer[0] === 0 && movesComputer[movesComputer.length - 1] === 3) {
        for (const i of movesComputer) {
          if (i === 6) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
      } else if (movesComputer[0] === 1 && movesComputer[movesComputer.length - 1] === 4) {
        for (const i of movesComputer) {
          if (i === 7) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
      } else if (movesComputer[0] === 2 && movesComputer[movesComputer.length - 1] === 5) {
        for (const i of movesComputer) {
          if (i === 8) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
      } else if (movesComputer[0] === 2 && movesComputer[movesComputer.length - 1] === 1) {
        for (const i of movesComputer) {
          if (i === 0) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
      } else if (movesComputer[0] === 5 && movesComputer[movesComputer.length - 1] === 4) {
        for (const i of movesComputer) {
          if (i === 3) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
        // eslint-disable-next-line max-len
      } else if (movesComputer[0] === 8 && movesComputer[movesComputer.length - 1] === 7) {
        for (const i of movesComputer) {
          if (i === 6) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
        // eslint-disable-next-line max-len
      } else if (movesComputer[0] === 6 && movesComputer[movesComputer.length - 1] === 3) {
        for (const i of movesComputer) {
          if (i === 0) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
      } else if (movesComputer[0] === 7 && movesComputer[movesComputer.length - 1] === 4) {
        for (const i of movesComputer) {
          if (i === 1) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
      } else if (movesComputer[0] === 8 && movesComputer[movesComputer.length - 1] === 5) {
        for (const i of movesComputer) {
          if (i === 2) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
      } else if (movesComputer[0] === 0 && movesComputer[movesComputer.length - 1] === 4) {
        for (const i of movesComputer) {
          if (i === 8) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
      } else if (movesComputer[0] === 2 && movesComputer[movesComputer.length - 1] === 4) {
        for (const i of movesComputer) {
          if (i === 6) {
            verdict = true;
            alert('You Lose :(');
            score++;
          }
        }
      }
    }
  }
  return { score, verdict, name };
};

function clearBoxes() {
  // eslint-disable-next-line no-return-assign, no-param-reassign
  boxes.forEach((box) => box.innerHTML = '');
  movesComputer = [];
  movesPlayer = [];
}

function updateScores(obj) {
  if (obj.name === 'player' && obj.verdict === true) {
    playerScoreEl.textContent = obj.score;
  } else {
    computerScoreEl.textContent = obj.score;
  }
}

function startGame() {
  clearBoxes();
  start.textContent = 'New Game';
  boxes.forEach((box) => {
    // eslint-disable-next-line no-return-assign
    box.addEventListener('click', (e) => {
      e.target.textContent = choices[index === 1 ? index = 0 : index = 1];
      if (index === 1) {
        const p = player(boxes.indexOf(box));
        updateScores(p);
      } else {
        const c = computer(boxes.indexOf(box));
        updateScores(c);
      }
    }, { once: true });
  });
}

start.addEventListener('click', startGame);
