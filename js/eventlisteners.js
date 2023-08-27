// Keyboard events

let keys = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
};

document.addEventListener("keydown", (e) => {
  if (clickStart) {
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



// Sound
const soundOnBtn = document.querySelector(".audio img:first-child");
const soundOffBtn = document.querySelector(".audio img:last-child");


let soundOn = true;
soundOnBtn.addEventListener("click", () => {
  // Turn off the sound effects and song
  soundOn = false;
  soundOnBtn.style.display = "none";
  soundOffBtn.style.display = "block";

  // themeSong off
  themeSong.pause();
  themeSong.loop = false;
});

soundOffBtn.addEventListener("click", () => {
  // Turn on the sound effects and song
  soundOn = true;
  soundOnBtn.style.display = "block";
  soundOffBtn.style.display = "none";
  volumeOnSound.play();
  themeSong.currentTime = 0;
});
