function render() {
  timer++;
  
  if (!GAME_OVER) {
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = "#dcb198";
    c.fillRect(0, 256, canvas.width, tile);
    backgroundStage.draw();

    donuts.forEach((donut) => donut.draw());

    enemies.forEach((enemy) => {
      enemy.update();
      enemy.draw();
    });

    missiles.forEach((missile) => {
      missile.update();
      missile.draw();
    });

    player.update();
    player.draw();

    lives.forEach((life) => {
      life.draw();
    });

    donutScore.draw();

    c.font = "16px Minecraft";
    c.fillStyle = "#3d200c";
    c.fillText(`STAGE  ${stageNum}`, 124, 277);
    c.fillText(`x ${score}`, 282, 277);

    c.save();
    c.globalAlpha = overlay.opacity;
    c.fillStyle = "#160900";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.restore();

    if (stages[5].clearStage) {
      endingImg.draw();
    }
  } else {
  lives.forEach((life) => {
    life.update();
  });
  } 
  requestAnimationFrame(render);
}

stages[stageNum].init();
render();

function gameOver() {
  GAME_OVER = true;
  gameOverScreen.classList.toggle("show");
  canvas.classList.toggle("show");
}
