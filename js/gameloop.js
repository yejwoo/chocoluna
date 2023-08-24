function gameOver() {
  GAME_OVER = true;
  gameOverScreen.classList.toggle("show");
  canvas.classList.toggle("show");
}

function drawText() {
  c.save()
  c.font = "16px Minecraft";
  c.fillStyle = "#3d200c";
  c.fillText(`STAGE  ${stageNum}`, 124, 277);
  c.fillText(`x ${score}`, 282, 277);
  c.restore()
}

function putOverlay() {
  c.save();
  c.globalAlpha = overlay.opacity;
  c.fillStyle = "#160900";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
}

function drawBackground() {
  c.save()
  c.fillStyle = "white";
  c.fillRect(0, 256, canvas.width, tile);
  c.restore()
  backgroundStage.draw();
}

function update() {
  chocos.forEach((choco) => {
    choco.update();
  })
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
  chocos.forEach((choco) => choco.draw());
  enemies.forEach((enemy) => {enemy.draw();});
  missiles.forEach((missile) => {missile.draw();});
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
          y: 4,
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
          y: 6,
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
          y: 1,
        },
      })),
        (chocoPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/sprite/life_plus.png",
          position: {
            x: 7,
            y: 0,
          },
        })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 9,
            y: 0,
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
          y: 4,
        },
      })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 5,
            y: 5,
          },
        })),
        (chocoPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/sprite/life_plus.png",
          position: {
            x: 6,
            y: 4,
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
          y: 0,
        },
      })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 6,
            y: 3,
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
        chocos.push(chocoPlusLife, chocoMinusLife, choco);
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
  
  chocos = [];
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