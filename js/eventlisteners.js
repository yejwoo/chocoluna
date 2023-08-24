// Keyboard events

let keys = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
};

document.addEventListener("keydown", (e) => {
  if(clickStart) {    
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

let clickStart = false;
startBtn.addEventListener("click", () => {
  clickStart = true;
  
  canvas.classList.toggle("show");
  titleScreen.classList.toggle("show");
  gameStartSong.muted = true;
  if (soundOn.style.display === "block") {
    themeSong.play();
    themeSong.loop = true;
  }
});

howToPLAYBtn.addEventListener("click", () => {
  howToScreen.classList.toggle("show");
  titleScreen.classList.toggle("show");
});

backBtn.addEventListener("click", () => {
  howToScreen.classList.toggle("show");
  titleScreen.classList.toggle("show");
});


// Sound events


soundOn.addEventListener("click", () => {
  soundOn.style.display = "none";
  soundOff.style.display = "block";
  gameStartSong.muted = true;
});

soundOff.addEventListener("click", () => {
  soundOff.style.display = "none";
  soundOn.style.display = "block";
  gameStartSong.play();
  gameStartSong.muted = false;
  gameStartSong.loop = true;
});

