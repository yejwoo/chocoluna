// initial setting
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const tileSize = 32;
const velocity = 1;
let score = 0;

canvas.width = tileSize * 10;
canvas.height = tileSize * 9;

// game objects
// creating instance and render
const stage1 = new Stage({
  imgSrc: "img/map/stage1.png",
});

const player = new Player({
  imgSrc: "img/sprite/idle-down.png",
  position: {
    x: 1,
    y: 7,
  },
  animations: {
    idleLeft: {
      imgSrc: "img/sprite/idle-left.png",
    },
    idleRight: {
      imgSrc: "img/sprite/idle-right.png",
    },
    idleUp: {
      imgSrc: "img/sprite/idle-up.png",
    },
    idleDown: {
      imgSrc: "img/sprite/idle-down.png",
    },
    walkLeft: {
      imgSrc: "img/sprite/walk-left.png",
    },
    walkRight: {
      imgSrc: "img/sprite/walk-right.png",
    },
    walkUp: {
      imgSrc: "img/sprite/walk-up.png",
    },
    walkDown: {
      imgSrc: "img/sprite/walk-down.png",
    },
  },
});

const enemy1 = new Enemy({
  imgSrc: "img/sprite/slime1.png",
  position: {
    x: 2,
    y: 1,
  },
});

const donut = new Objects({
  imgSrc: "img/donutLarge.png",
  position: {
    x: 8,
    y: 4,
  },
});

const missile = new Missile({
  imgSrc: "img/missile.png",
  position: {
    x: 72,
    y: 48,
  },
});

// 5초마다 자동으로 생성 후 배열에 넣기
// let missileArr = [];
// missileArr.push(missile);


const life = new Status({
  imgSrc: "img/heart.png",
  position: {
    x: 8,
    y: 262,
  },
  splitFrames: {
    y: 0,
  },
});

const donutScore = new Status({
  imgSrc: "img/donutSmall.png",
  position: {
    x: 262,
    y: 264,
  },
  splitFrames: {
    y: 0,
  },
});

const cm1 = new chunkMap(map1);
const chunkedMap1 = cm1.tiles;
// map1 ~ map5


// font
const myFont = new FontFace("myFont", "url(src/Minecraft.ttf)");
myFont.load().then((font) => {
  document.fonts.add(font);
  c.font = "16px myFont";
  c.fillStyle = "Black";
  c.fillText(`x ${score}`, 284, 277);
});

// render
function render() {
  requestAnimationFrame(render);
  c.clearRect(0, 0, canvas.width, canvas.height);

  // draw
  stage1.draw();

  enemy1.update();
  enemy1.draw();

  donut.draw();

  player.update();
  player.draw();

  life.draw();
  donutScore.draw();

  cm1.draw(); // 이름 고치삼




  c.fillText(`x ${score}`, 284, 277);
}

render();
