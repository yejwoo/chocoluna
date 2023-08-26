function gameOver() {
  GAME_OVER = true;
  themeSong.pause();
  gameOverSound.play();
  gameOverScreen.classList.toggle("show");
  canvas.classList.toggle("show");
}

function drawText() {
  c.save();
  c.font = "10px pixeled";
  c.fillStyle = "#200e02";
  c.fillText(`STAGE  ${stageNum}`, 124, 16);
  c.fillText(`x ${score}`, 282, 14);
  c.restore();
}

function putOverlay() {
  c.save();
  c.globalAlpha = overlay.opacity;
  c.fillStyle = "#160900";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
}

function update() {
  chocos.forEach((choco) => {
    choco.update();
  });
  enemies.forEach((enemy) => {
    enemy.update();
  });
  missiles.forEach((missile) => {
    missile.update();
  });
  if (choco.getItem) getChocoEffect.update();

  player.update();
}

function render() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  backgroundStage.draw();
  chocos.forEach((choco) => choco.draw());
  enemies.forEach((enemy) => {
    enemy.draw();
  });
  missiles.forEach((missile) => {
    missile.draw();
  });

  if (choco.getItem) getChocoEffect.draw();

  player.draw();
  lives.forEach((life) => {
    life.draw();
  });
  chocoScore.draw();
  drawText();
  putOverlay();
}

function gameOverReset() {
  GAME_OVER = false;
  buttonClickSound.play();
  themeSong.play();
  gameOverScreen.classList.toggle("show");
  canvas.classList.toggle("show");

  // reset player position
  player.position.x = stages[stageNum].playerStartPosition.x;
  player.position.y = stages[stageNum].playerStartPosition.y;
  player.switchSprite("idleDown");

  // reset choco
  if ((chocos = [])) {
    if (stageNum === 1) {
      score = 0;

      (choco = new Objects({
        id: "score",
        imgSrc: "img/sprite/choco_sprite.png",
        position: {
          x: 8,
          y: 5,
        },
      })),
        chocos.push(choco);
    } else if (stageNum === 2) {
      score = 1;
      (choco = new Objects({
        id: "score",
        imgSrc: "img/sprite/choco_sprite.png",
        position: {
          x: 6,
          y: 7,
        },
      })),
        chocos.push(choco);
    } else if (stageNum === 3) {
      score = 2;
      (choco = new Objects({
        id: "score",
        imgSrc: "img/sprite/choco_sprite.png",
        position: {
          x: 2,
          y: 2,
        },
      })),
        (chocoPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/sprite/life_plus.png",
          position: {
            x: 7,
            y: 1,
          },
        })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 9,
            y: 1,
          },
        })),
        chocos.push(choco, chocoPlusLife, chocoMinusLife);
    } else if (stageNum === 4) {
      score = 3;
      (choco = new Objects({
        id: "score",
        imgSrc: "img/sprite/choco_sprite.png",
        position: {
          x: 4,
          y: 5,
        },
      })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 5,
            y: 6,
          },
        })),
        (chocoPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/sprite/life_plus.png",
          position: {
            x: 6,
            y: 5,
          },
        })),
        chocos.push(chocoMinusLife, chocoPlusLife, choco);
    } else {
      score = 4;
      (choco = new Objects({
        id: "score",
        imgSrc: "img/sprite/choco_sprite.png",
        position: {
          x: 3,
          y: 1,
        },
      })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 6,
            y: 4,
          },
        })),
        (chocoPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/sprite/life_plus.png",
          position: {
            x: 6,
            y: 6,
          },
        })),
        chocos.push(chocoPlusLife, chocoMinusLife, choco);
    }
  }
}

function gameEndReset() {
  buttonClickSound.play();
  lives.forEach((life) => {
    life.update();
  });

  stageNum = 1;
  score = 0;
  stages[5].clearStage = false;

  GAME_OVER = false;
  gameEndScreen.classList.toggle("show");
  canvas.classList.toggle("show");

  chocos = [];
  enemies = [];
  missiles = [];

  stages[1].init();
  init();
}

function init() {
  timer++;
  animation = requestAnimationFrame(init);

  if (!GAME_OVER) {
    update();
    render();
  } else {
    lives.forEach((life) => {
      life.update();
    });
  }
}

// Start
// Buttons
const startBtn = document.querySelector(".title-screen button");
const replayOnGameOverBtn = document.querySelector(".game-over button");
const replayOnGameEndBtn = document.querySelector(".game-end button");
let clickStart = false;
startBtn.addEventListener("click", () => {
  buttonClickSound.play();
  themeSong.play();
  themeSong.loop = true;
  clickStart = true;
  canvas.classList.toggle("show");
  titleScreen.classList.toggle("show");
});

// Replay
replayOnGameOverBtn.addEventListener("click", gameOverReset);
replayOnGameEndBtn.addEventListener("click", gameEndReset);

// Game init
stages[stageNum].init();
init();
