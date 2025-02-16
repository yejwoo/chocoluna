const MOVEMENT_MAPS = {
  KeyA: { velocity: [-1, 0], sprites: { move: 'walkLeft', idle: 'idleLeft' } },
  KeyD: { velocity: [1, 0], sprites: { move: 'walkRight', idle: 'idleRight' } },
  KeyW: { velocity: [0, -1], sprites: { move: 'walkUp', idle: 'idleUp' } },
  KeyS: { velocity: [0, 1], sprites: { move: 'walkDown', idle: 'idleDown' } }
};

let keys = Object.fromEntries(Object.keys(MOVEMENT_MAPS).map(key => [key, false]));

document.addEventListener("keydown", (e) => {
  if (clickStart && MOVEMENT_MAPS[e.code]) {
    keys[e.code] = true;
    const { velocity: [x, y], sprites: { move } } = MOVEMENT_MAPS[e.code];
    player.vx = x * velocity;
    player.vy = y * velocity;
    player.switchSprite(move);
  }
});

document.addEventListener("keyup", (e) => {
  if (MOVEMENT_MAPS[e.code]) {
    keys[e.code] = false;
    const { velocity: [x, y], sprites: { idle } } = MOVEMENT_MAPS[e.code];
    
    if ((!keys.KeyA && player.vx < 0) || (!keys.KeyD && player.vx > 0)) {
      player.vx = 0;
      player.switchSprite(idle);
    }
    if ((!keys.KeyW && player.vy < 0) || (!keys.KeyS && player.vy > 0)) {
      player.vy = 0;
      player.switchSprite(idle);
    }
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
