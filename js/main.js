// initial setting
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const tile = 32;
const velocity = 1;
let timer = 0;
let gameOver;

canvas.width = tile * 10;
canvas.height = tile * 9;

const scoreElement = document.querySelector(".score span");
const stageElement = document.querySelector(".stage span");
let score = parseInt(scoreElement.innerText);
let stageNum = parseInt(stageElement.innerText);

let backgroundStage;
let goal;
let player;
let enemy;
let enemy2;
let donut;
let donuts = [];
let missile;
let missiles = [];
let missileCollisionBlocks;
let collisionBlocks;

let stages = {
  1: {
    clearStage: false,
    init: () => {
      backgroundStage = new Stage({
        imgSrc: "img/map/stage1.png",
      });

      goal = {
        position: {
          x: 8 * tile,
          y: 0,
        },
      };

      missileCollisionBlocks = {
        position: {
          x: 2 * tile,
          y: 5 * tile,
        },
      };

      player = new Player({
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

      (enemy = new Enemy({
        imgSrc: "img/sprite/slime1.png",
        position: {
          x: 2,
          y: 1,
        },
      })),
        (donut = new Objects({
          imgSrc: "img/donutLarge.png",
          position: {
            x: 8,
            y: 4,
          },
        })),
        donuts.push(donut);

      collisionBlocks = map1.chunk();

      
    },
  },
  2: {
    clearStage: false,
    init: () => {
      backgroundStage = new Stage({
        imgSrc: "img/map/stage2.png",
      });

      goal = {
        position: {
          x: 3 * tile,
          y: 0,
        },
      };

      missileCollisionBlocks = {
        position: {
          x: 2 * tile,
          y: 5 * tile,
        },
      };

      player = new Player({
        imgSrc: "img/sprite/idle-down.png",
        position: {
          x: 8,
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

      enemy = new Enemy({
        enemy1: {
          imgSrc: "img/sprite/slime1.png",
          position: {
            x: 7,
            y: 3,
          },
        },
        enemy2: {
          imgSrc: "img/sprite/slime1.png",
          position: {
            x: 7,
            y: 3,
          },
        },
      })

      // enemy = new Enemy({
      //   imgSrc: "img/sprite/slime1.png",
      //   position: {
      //     x: 7,
      //     y: 3,
      //   },
      // }),

      enemy2 = new Enemy({
        imgSrc: "img/sprite/slime2.png",
        position: {
          x: 0,
          y: 5,
        },
      }),

        (donut = new Objects({
          imgSrc: "img/donutLarge.png",
          position: {
            x: 6,
            y: 6,
          },
        })),
        donuts.push(donut);

      collisionBlocks = map2.chunk();

      
    },
  },
};

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

const overlay = {
  opacity: 0,
};

// 하단 텍스트 드래그 방지
document.oncontextmenu = function () {
  return false;
};
document.onselectstart = function () {
  return false;
};

// render
function render() {
  timer++;

  if (life.splitFrames.y < 3) {
    gameOver = requestAnimationFrame(render);
    c.clearRect(0, 0, canvas.width, canvas.height);

    backgroundStage.draw();

    donuts.forEach((donut) => donut.draw());

    enemy.update();
    enemy.draw();

    player.update();
    player.draw();

    if (timer % 90 === 0) {
      const missile = new Missile({
        imgSrc: "img/missile.png",
        position: {
          x: 64,
          y: 40,
        },
      });
      missiles.push(missile);
    }

    missiles.forEach((missile) => {
      missile.update();
      missile.draw();
    });

    life.draw();
    donutScore.draw();

    c.save();
    c.globalAlpha = overlay.opacity;
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.restore();
  } else cancelAnimationFrame(render);
}

stages[stageNum].init();
render();
