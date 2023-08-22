// Keyboard events

let keys = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
};

document.addEventListener("keydown", (e) => {
  keys[e.code] = true;

  if (keys.ArrowLeft) {
    player.vx = -velocity;
    player.switchSprite("walkLeft");
  }
  if (keys.ArrowRight) {
    player.vx = velocity;
    player.switchSprite("walkRight");
  }
  if (keys.ArrowUp) {
    player.vy = -velocity;
    player.switchSprite("walkUp");
  }
  if (keys.ArrowDown) {
    player.vy = velocity;
    player.switchSprite("walkDown");
  }
});

document.addEventListener("keyup", (e) => {
  keys[e.code] = false;

  if (!keys.ArrowLeft && player.vx < 0) {
    player.vx = 0;
    player.switchSprite("idleLeft");
  }
  if (!keys.ArrowRight && player.vx > 0) {
    player.vx = 0;
    player.switchSprite("idleRight");
  }
  if (!keys.ArrowUp && player.vy < 0) {
    player.vy = 0;
    player.switchSprite("idleUp");
  }
  if (!keys.ArrowDown && player.vy > 0) {
    player.vy = 0;
    player.switchSprite("idleDown");
  }
});

// Button click events

start.addEventListener("click", () => {
  canvas.classList.toggle("show");
  titleScreen.classList.toggle("show");
  gameStart.muted = true;
  if (soundOn.style.display === "block") {
    theme.play();
    theme.loop = true;
  }
});

howToPLAY.addEventListener("click", () => {
  howToScreen.classList.toggle("show");
  titleScreen.classList.toggle("show");
});

back.addEventListener("click", () => {
  howToScreen.classList.toggle("show");
  titleScreen.classList.toggle("show");
});

// Sound events

soundOn.addEventListener("click", () => {
  soundOn.style.display = "none";
  soundOff.style.display = "block";
  gameStart.muted = true;
});

soundOff.addEventListener("click", () => {
  soundOff.style.display = "none";
  soundOn.style.display = "block";
  gameStart.play();
  gameStart.muted = false;
  gameStart.loop = true;
});

tryAgain.addEventListener("click", () => {
  // after click "TRY AGAIN" button
  // close gameOverScreen and show canvas
  gameOverScreen.classList.toggle("show");
  canvas.classList.toggle("show");

  // reset player position
  player.position.x = stages[stageNum].playerStartPosition.x;
  player.position.y = stages[stageNum].playerStartPosition.y;
  player.switchSprite("idleDown");

  // GAME_OVER equals false
  GAME_OVER = false;
  
});
