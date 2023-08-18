let keys = {}

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  keys[e.code] = true;

  switch (e.code) {
    case "ArrowLeft":
      player.vx = -velocity;
      player.switchSprite("walkLeft");
      break;
    case "ArrowRight":
      player.vx = velocity;
      player.switchSprite("walkRight");
      break;
    case "ArrowUp":
      player.vy = -velocity;
      player.switchSprite("walkUp");
      break;
    case "ArrowDown":
      player.vy = velocity;
      player.switchSprite("walkDown");
      break;
  }
});

document.addEventListener("keyup", function (e) {
  keys[e.code] = false;

  switch (e.code) {
    case "ArrowLeft":
      player.vx = 0;
      player.switchSprite("idleLeft");
      break;

    case "ArrowRight":
      player.vx = 0;
      player.switchSprite("idleRight");
      break;

    case "ArrowUp":
      player.vy = 0;
      player.switchSprite("idleUp");
      break;

    case "ArrowDown":
      player.vy = 0;
      player.switchSprite("idleDown");
      break;
  }
});
