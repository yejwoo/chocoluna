// Initial setting
const start = document.querySelectorAll(".title-screen button")[0];
const howToPLAY = document.querySelectorAll(".title-screen button")[1];
const replay = document.querySelector(".game-over button");
const back = document.querySelector(".how-to-play button");
const howToScreen = document.querySelector(".how-to-play");
const titleScreen = document.querySelector(".title-screen");
const gameOver = document.querySelector(".game-over");
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const tile = 32;
const velocity = 1;
let timer = 0;
let score = 0;
let stageNum = 1;
let GAME_OVER = false;

canvas.width = tile * 10;
canvas.height = tile * 9;

const endingImg = new Stage({
  imgSrc: "img/web/ending_screen.png",
});

const donutScore = new Status({
  imgSrc: "img/assets/donut_S.png",
  position: {
    x: 262,
    y: 264,
  },
});

const overlay = {
  opacity: 0,
};

start.addEventListener("click", () => {
  canvas.style.display = "block";
  titleScreen.style.display = "none";
  howToPLAY.style.display = "block";
});

howToPLAY.addEventListener("click", () => {
  howToScreen.style.display = "block";
  titleScreen.style.display = "none";
})

back.addEventListener("click", () => {
  howToScreen.style.display = "none";
  titleScreen.style.display = "block";
})




// render
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
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.restore();
  } else {
    cancelAnimationFrame(render)
    canvas.style.display = "none";
  }
  requestAnimationFrame(render);
}

stages[stageNum].init();
render();

