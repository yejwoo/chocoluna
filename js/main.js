// 초기 세팅
const start = document.querySelector(".title-screen button");
const titleScreen = document.querySelector(".title-screen")
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const tile = 32;
const velocity = 1;
let timer = 0;
let gameOver;

canvas.width = tile * 10;
canvas.height = tile * 9;

let score = 0;
let stageNum = 1;


// 중복 전역변수 해결하기

const life1 = new Status({
  imgSrc: "img/life_filled.png",
  position: {
    x: 40,
    y: 262,
  },
  status: {
    filled: {
      isFilled: true,
      imgSrc: "img/life_filled.png",
    },
    empty: {
      isEmpty: false,
      imgSrc: "img/life_empty.png",
    },
  },
});

const life2 = new Status({
  imgSrc: "img/life_filled.png",
  position: {
    x: 24,
    y: 262,
  },
  status: {
    filled: {
      isFilled: true,
      imgSrc: "img/life_filled.png",
    },
    empty: {
      isEmpty: false,
      imgSrc: "img/life_empty.png",
    },
  },
});

const life3 = new Status({
  imgSrc: "img/life_filled.png",
  position: {
    x: 8,
    y: 262,
  },
  status: {
    filled: {
      isFilled: true,
      imgSrc: "img/life_filled.png",
    },
    empty: {
      isEmpty: false,
      imgSrc: "img/life_empty.png",
    },
  },
});

lives.push(life1, life2, life3);

const donutScore = new Status({
  imgSrc: "img/donut_S.png",
  position: {
    x: 262,
    y: 264,
  },
});

const overlay = {
  opacity: 0,
};

// render
function render() {
  timer++;

  gameOver = requestAnimationFrame(render);
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
}

stages[stageNum].init();
render();
start.addEventListener("click", () => {
  canvas.style.display = "block"
  titleScreen.style.display = "none"
});
