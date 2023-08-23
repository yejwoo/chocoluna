function gameOver() {
  GAME_OVER = true;
  gameOverScreen.classList.toggle("show");
  canvas.classList.toggle("show");
}

function drawScore() {
  c.font = "16px Minecraft";
  c.fillStyle = "#3d200c";
  c.fillText(`STAGE  ${stageNum}`, 124, 277);
  c.fillText(`x ${score}`, 282, 277);
}

function putOverlay() {
  c.save();
  c.globalAlpha = overlay.opacity;
  c.fillStyle = "#160900";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
}

function drawBackground() {
  c.fillStyle = "#dcb198";
  c.fillRect(0, 256, canvas.width, tile);
  backgroundStage.draw();
}

function update() {
  enemies.forEach((enemy) => {
    enemy.update();
  });
  missiles.forEach((missile) => {
    missile.update();
  });
  player.update();
}

function render() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  donuts.forEach((donut) => donut.draw());
  enemies.forEach((enemy) => {
    enemy.draw();
  });
  missiles.forEach((missile) => {
    missile.draw();
  });
  player.draw();
  lives.forEach((life) => {
    life.draw();
  });
  donutScore.draw();
  drawScore();
  putOverlay();
}

function gameOverReset() {
  GAME_OVER = false;
  gameOverScreen.classList.toggle("show");
  canvas.classList.toggle("show");

  // reset player position
  player.position.x = stages[stageNum].playerStartPosition.x;
  player.position.y = stages[stageNum].playerStartPosition.y;
  player.switchSprite("idleDown");

  // reset donut
  if ((donuts = [])) {
    if (stageNum === 1) {
      score = 0;

      (donut = new Objects({
        id: "score",
        imgSrc: "img/assets/donut_L.png",
        position: {
          x: 8,
          y: 4,
        },
      })),
        donuts.push(donut);
    } else if (stageNum === 2) {
      score = 1;
      (donut = new Objects({
        id: "score",
        imgSrc: "img/assets/donut_L.png",
        position: {
          x: 6,
          y: 6,
        },
      })),
        donuts.push(donut);
    } else if (stageNum === 3) {
      score = 2;
      (donut = new Objects({
        id: "score",
        imgSrc: "img/assets/donut_L.png",
        position: {
          x: 2,
          y: 1,
        },
      })),
        (donutPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/assets/donut_plus.png",
          position: {
            x: 7,
            y: 0,
          },
        })),
        (donutMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/assets/donut_minus.png",
          position: {
            x: 9,
            y: 0,
          },
        })),
        donuts.push(donut, donutPlusLife, donutMinusLife);
    } else if (stageNum === 4) {
      score = 3;
      (donut = new Objects({
        id: "score",
        imgSrc: "img/assets/donut_L.png",
        position: {
          x: 4,
          y: 4,
        },
      })),
        (donutMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/assets/donut_minus.png",
          position: {
            x: 5,
            y: 5,
          },
        })),
        (donutPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/assets/donut_plus.png",
          position: {
            x: 6,
            y: 4,
          },
        })),
        donuts.push(donutMinusLife, donutPlusLife, donut);
    } else {
      score = 4;
      (donut = new Objects({
        id: "score",
        imgSrc: "img/assets/donut_L.png",
        position: {
          x: 3,
          y: 0,
        },
      })),
        (donutMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/assets/donut_minus.png",
          position: {
            x: 6,
            y: 3,
          },
        })),
        (donutPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/assets/donut_plus.png",
          position: {
            x: 6,
            y: 5,
          },
        })),
        donuts.push(donutPlusLife, donutMinusLife, donut);
    }
  }
}

function gameEndReset() {
  lives.forEach((life) => {
    life.update();
  });
  
  stageNum = 1;
  score = 0;
  stages[5].clearStage = false;

  GAME_OVER = false;
  gameEndScreen.classList.toggle("show");
  canvas.classList.toggle("show");
  
  donuts = [];
  enemies = [];
  missiles = [];

  stages[1].init()
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


// Replay
replayOnGameOverBtn.addEventListener("click", gameOverReset)
replayOnGameEndBtn.addEventListener("click", gameEndReset)

// Game init
stages[stageNum].init();
init();