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
