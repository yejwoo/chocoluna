// 좌우 누르다보면 멈추는 기능 고치기

let keys = [];

document.addEventListener("keydown", function (e) {
  // 키보드 동시 입력 방지
  keys[e.code] = true;

  if (
    (keys["ArrowLeft"] && keys["ArrowRight"]) ||
    (keys["ArrowLeft"] && keys["ArrowUp"]) ||
    (keys["ArrowLeft"] && keys["ArrowDown"]) ||
    (keys["ArrowRight"] && keys["ArrowUp"]) ||
    (keys["ArrowRight"] && keys["ArrowDown"]) ||
    (keys["ArrowUp"] && keys["ArrowDown"]) ||
    (keys["ArrowLeft"] && keys["ArrowRight"] && keys["ArrowUp"]) ||
    (keys["ArrowLeft"] && keys["ArrowRight"] && keys["ArrowDown"]) ||
    (keys["ArrowLeft"] && keys["ArrowUp"] && keys["ArrowDown"]) ||
    (keys["ArrowRight"] && keys["ArrowUp"] && keys["ArrowDown"]) ||
    (keys["ArrowLeft"] && keys["ArrowRight"] && keys["ArrowUp"] && keys["ArrowDown"])
  ) {
    player.vx = 0;
    player.vy = 0;
  }

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
