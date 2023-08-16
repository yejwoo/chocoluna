// initial setting
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const tileSize = 32;
const velocity = 1;
let timer = 0;
let gameOver;
let score = document.querySelector('.score span').innerText;
let stage = document.querySelector('.stage span').innerText;

canvas.width = tileSize * 10;
canvas.height = tileSize * 9;

// 하단 텍스트 드래그 방지
document.oncontextmenu = function() {return false;}
document.onselectstart = function() {return false;}

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

// 슬라임 이미지 바꾸는 법 수정 필요
const enemy = new Enemy({
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

let donuts = [];
donuts.push(donut);

let missiles = [];

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

const chunkedMap1 = new chunkMap(map1);
const collisionBlocks1 = chunkedMap1.tiles;

const missileCollisionBlocks = new chunkMap(missileCollisionData1);
const missileCollisionBlocks1 = missileCollisionBlocks.missileCollisionArr;

// map1 ~ map5


// render
function render() {
  timer++;
  // 1초에 60번 실행할 코드

  if (life.splitFrames.y < 3) {
    gameOver = requestAnimationFrame(render);
    c.clearRect(0, 0, canvas.width, canvas.height);
  
    // draw
    stage1.draw();
  
    donuts.forEach((donut) => donut.draw());
  
    enemy.draw();
    enemy.update();
  
    player.draw();
    player.update();
  
    if (timer % 80 === 0) {
      const missile = new Missile({
        imgSrc: "img/missile.png",
        position: {
          x: 72,
          y: 48,
        },
      });
      missiles.push(missile);
    }
  
    missiles.forEach((missile) => {
      missile.draw();
      missile.update();
    });
  
    life.draw();
    donutScore.draw();
  

  }
  
  else cancelAnimationFrame(render)
}

render();

