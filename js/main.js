// 초기 세팅
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



let backgroundStage,
  goal,
  player,
  enemies = [],
  enemy,
  enemy2,
  enemy3,
  enemy4,
  enemy5,
  donut,
  donutMinusLife,
  donutMinusLife2,
  donutMinusLife3,
  donutMinusLife4,
  donutMinusLife5,
  donutMinusLife6,
  donutPlusLife,
  donuts = [],
  missile,
  missiles = [],
  missileCollisionBlocks,
  collisionBlocks;

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
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: 32,
          y: 224,
        },
        animations: {
          idleLeft: {
            imgSrc: "img/sprite/idle_left.png",
          },
          idleRight: {
            imgSrc: "img/sprite/idle_right.png",
          },
          idleUp: {
            imgSrc: "img/sprite/idle_up.png",
          },
          idleDown: {
            imgSrc: "img/sprite/idle_down.png",
          },
          walkLeft: {
            imgSrc: "img/sprite/walk_left.png",
          },
          walkRight: {
            imgSrc: "img/sprite/walk_right.png",
          },
          walkUp: {
            imgSrc: "img/sprite/walk_up.png",
          },
          walkDown: {
            imgSrc: "img/sprite/walk_down.png",
          },
        },
      });

      enemy = new Enemy({
        imgSrc: "img/sprite/slime1.png",
        position: {
          x: 2,
          y: 1,
        },
      }),
      
      enemies.push(enemy)  
      
      donut = new Objects({
          imgSrc: "img/donut_L.png",
          position: {
            x: 8,
            y: 4,
          },
      }),
      donuts.push(donut);

      collisionBlocks = map1.chunk();

      function missile() {      
        if (stageNum === 1) {
          requestAnimationFrame(missile);
          if (timer % 80 === 0) {
            const missile = new Missile({
              imgSrc: "img/missile_vertical.png",
              position: {
                x: 64,
                y: 40,
              },
              direction: "vertical",
            });
            missiles.push(missile);
          } else cancelAnimationFrame(missile);
        }
      }

      missile();
    },
  },
  2: {
    clearStage: false,
    init: () => {
      missiles = [],
      enemies = [],

      backgroundStage = new Stage({
          imgSrc: "img/map/stage2.png",
      });

      goal = {
        position: {
          x: 2 * tile,
          y: 0,
        },
      };

      missileCollisionBlocks = {
        position: {
          x: 3 * tile,
          y: 4 * tile,
        },
      };

      enemyCollisionBlocks = [
        {
          x: tile * 7,
          y: tile * 5,
        },
        {
          x: tile * 5,
          y: tile * 5,
        },
        {
          x: tile * 5,
          y: tile * 2,
        },
        {
          x: tile * 7,
          y: tile * 2,
        },
      ];

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: 256,
          y: 224,
        },
        animations: {
          idleLeft: {
            imgSrc: "img/sprite/idle_left.png",
          },
          idleRight: {
            imgSrc: "img/sprite/idle_right.png",
          },
          idleUp: {
            imgSrc: "img/sprite/idle_up.png",
          },
          idleDown: {
            imgSrc: "img/sprite/idle_down.png",
          },
          walkLeft: {
            imgSrc: "img/sprite/walk_left.png",
          },
          walkRight: {
            imgSrc: "img/sprite/walk_right.png",
          },
          walkUp: {
            imgSrc: "img/sprite/walk_up.png",
          },
          walkDown: {
            imgSrc: "img/sprite/walk_down.png",
          },
        },
      });

      enemy = new Enemy({
        imgSrc: "img/sprite/slime1.png",
        position: {
          x: 7,
          y: 3,
        },
        isMove: true,
      });

      enemy2 = new Enemy({
        imgSrc: "img/sprite/slime2.png",
        position: {
          x: 0,
          y: 5,
        },
        isMove: false,
      })),
        (donut = new Objects({
          imgSrc: "img/donut_L.png",
          position: {
            x: 6,
            y: 6,
          },
        })),
        enemies.push(enemy, enemy2);
      donuts.push(donut);

      collisionBlocks = map2.chunk();

      function missile() {
        if (stageNum === 2) {
          requestAnimationFrame(missile);
          if (timer % 80 === 0) {
            const missile = new Missile({
              imgSrc: "img/missile_horizontal.png",
              position: {
                x: 16,
                y: 160,
              },
              direction: "horizontal",
            });
            missiles.push(missile);
            
          } else cancelAnimationFrame(missile);
        }
      }
      
      missile();
    },
  },
  3: {
    clearStage: false,
    init: () => {
      missiles = [],
      enemies = [],
        (backgroundStage = new Stage({
          imgSrc: "img/map/stage3.png",
        }));

      goal = {
        position: {
          x: 4 * tile,
          y: 0,
        },
      };

      missileCollisionBlocks = {
        position: {
          x: 2 * tile,
          y: 5 * tile,
        },
      };

      enemyCollisionBlocks = {
        rotate: {
          0 : {
            x: tile * 5,
            y: tile * 7,
          },
          1 : {
            x: tile * 3,
            y: tile * 7,
          },
          2 : {
            x: tile * 3,
            y: tile * 4,
          },
          3 : {
            x: tile * 5,
            y: tile * 4,
          },
        },
        vertical: {
          blocks : {
            0: {
              x: 0,
              y: 0,
            },
            1: {
              x: 0,
              y: tile * 4,
            }
          },
          blocks2 : {
            0: {
              x: tile * 8,
              y: 0,
            },
            1: {
              x: tile * 8,
              y: tile * 7,
            }
          },
        }
      };

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: 64,
          y: 224,
        },
        animations: {
          idleLeft: {
            imgSrc: "img/sprite/idle_left.png",
          },
          idleRight: {
            imgSrc: "img/sprite/idle_right.png",
          },
          idleUp: {
            imgSrc: "img/sprite/idle_up.png",
          },
          idleDown: {
            imgSrc: "img/sprite/idle_down.png",
          },
          walkLeft: {
            imgSrc: "img/sprite/walk_left.png",
          },
          walkRight: {
            imgSrc: "img/sprite/walk_right.png",
          },
          walkUp: {
            imgSrc: "img/sprite/walk_up.png",
          },
          walkDown: {
            imgSrc: "img/sprite/walk_down.png",
          },
        },
      });

      enemy = new Enemy({
        imgSrc: "img/sprite/slime1.png",
        position: {
          x: 0,
          y: 0,
        },
        moveDirection: "vertical",
      });
      (enemy2 = new Enemy({
        imgSrc: "img/sprite/slime2.png",
        position: {
          x: 5,
          y: 5,
        },
        moveDirection: "vertical",
      })),
        (enemy3 = new Enemy({
          imgSrc: "img/sprite/slime3.png",
          position: {
            x: 8,
            y: 7,
          },
        })),
        (donut = new Objects({
          imgSrc: "img/donut_L.png",
          position: {
            x: 2,
            y: 1,
          },
        })),
        (donutPlusLife = new Objects({
          imgSrc: "img/donut_plus.png",
          position: {
            x: 7,
            y: 0,
          },
        })),
        (donutMinusLife = new Objects({
          imgSrc: "img/donut_minus.png",
          position: {
            x: 9,
            y: 0,
          },
        })),
        donuts.push(donutPlusLife);
      donuts.push(donutMinusLife);
      donuts.push(donut);

      collisionBlocks = map3.chunk();
    },
  },
  4: {
    clearStage: false,
    init: () => {
      missiles = [],
      enemies = [],
        (backgroundStage = new Stage({
          imgSrc: "img/map/stage4.png",
        }));

      goal = {
        position: {
          x: 9 * tile,
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
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: 128,
          y: 224,
        },
        animations: {
          idleLeft: {
            imgSrc: "img/sprite/idle_left.png",
          },
          idleRight: {
            imgSrc: "img/sprite/idle_right.png",
          },
          idleUp: {
            imgSrc: "img/sprite/idle_up.png",
          },
          idleDown: {
            imgSrc: "img/sprite/idle_down.png",
          },
          walkLeft: {
            imgSrc: "img/sprite/walk_left.png",
          },
          walkRight: {
            imgSrc: "img/sprite/walk_right.png",
          },
          walkUp: {
            imgSrc: "img/sprite/walk_up.png",
          },
          walkDown: {
            imgSrc: "img/sprite/walk_down.png",
          },
        },
      });

      enemy = new Enemy({
        imgSrc: "img/sprite/slime1.png",
        position: {
          x: 1,
          y: 6,
        },
      });

      (enemy2 = new Enemy({
        imgSrc: "img/sprite/slime2.png",
        position: {
          x: 3,
          y: 2,
        },
      })),
        (enemy3 = new Enemy({
          imgSrc: "img/sprite/slime3.png",
          position: {
            x: 9,
            y: 7,
          },
        })),
        (enemy4 = new Enemy({
          imgSrc: "img/sprite/slime1.png",
          position: {
            x: 2,
            y: 0,
          },
        }));

      (donut = new Objects({
        imgSrc: "img/donut_L.png",
        position: {
          x: 4,
          y: 3,
        },
      })),
        (donutMinusLife = new Objects({
          imgSrc: "img/donut_minus.png",
          position: {
            x: 5,
            y: 5,
          },
        })),
        (donutMinusLife2 = new Objects({
          imgSrc: "img/donut_minus.png",
          position: {
            x: 6,
            y: 4,
          },
        })),
        (donutMinusLife3 = new Objects({
          imgSrc: "img/donut_minus.png",
          position: {
            x: 6,
            y: 5,
          },
        })),
        (donutMinusLife4 = new Objects({
          imgSrc: "img/donut_minus.png",
          position: {
            x: 6,
            y: 6,
          },
        })),
        (donutMinusLife5 = new Objects({
          imgSrc: "img/donut_minus.png",
          position: {
            x: 5,
            y: 6,
          },
        })),
        (donutMinusLife6 = new Objects({
          imgSrc: "img/donut_minus.png",
          position: {
            x: 7,
            y: 6,
          },
        })),
        donuts.push(donutMinusLife);
      donuts.push(donutMinusLife2);
      donuts.push(donutMinusLife3);
      donuts.push(donutMinusLife4);
      donuts.push(donutMinusLife5);
      donuts.push(donutMinusLife6);
      donuts.push(donut);

      collisionBlocks = map4.chunk();
    },
  },
  5: {
    clearStage: false,
    init: () => {
      missiles = [],
      enemies = [],
        (backgroundStage = new Stage({
          imgSrc: "img/map/stage5.png",
        }));

      goal = {
        position: {
          x: 9 * tile,
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
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: 288,
          y: 224,
        },
        animations: {
          idleLeft: {
            imgSrc: "img/sprite/idle_left.png",
          },
          idleRight: {
            imgSrc: "img/sprite/idle_right.png",
          },
          idleUp: {
            imgSrc: "img/sprite/idle_up.png",
          },
          idleDown: {
            imgSrc: "img/sprite/idle_down.png",
          },
          walkLeft: {
            imgSrc: "img/sprite/walk_left.png",
          },
          walkRight: {
            imgSrc: "img/sprite/walk_right.png",
          },
          walkUp: {
            imgSrc: "img/sprite/walk_up.png",
          },
          walkDown: {
            imgSrc: "img/sprite/walk_down.png",
          },
        },
      });

      enemy = new Enemy({
        imgSrc: "img/sprite/slime1.png",
        position: {
          x: 7,
          y: 6,
        },
      });

      (enemy2 = new Enemy({
        imgSrc: "img/sprite/slime2.png",
        position: {
          x: 7,
          y: 4,
        },
      })),
        (enemy3 = new Enemy({
          imgSrc: "img/sprite/slime3.png",
          position: {
            x: 0,
            y: 1,
          },
        })),
        (enemy4 = new Enemy({
          imgSrc: "img/sprite/slime1.png",
          position: {
            x: 3,
            y: 6,
          },
        }));

      (enemy5 = new Enemy({
        imgSrc: "img/sprite/slime2.png",
        position: {
          x: 1,
          y: 6,
        },
      })),
        (donut = new Objects({
          imgSrc: "img/donut_L.png",
          position: {
            x: 3,
            y: 0,
          },
        })),
        (donutMinusLife = new Objects({
          imgSrc: "img/donut_minus.png",
          position: {
            x: 8,
            y: 1,
          },
        })),
        (donutMinusLife2 = new Objects({
          imgSrc: "img/donut_minus.png",
          position: {
            x: 6,
            y: 3,
          },
        })),
        (donutPlusLife = new Objects({
          imgSrc: "img/donut_plus.png",
          position: {
            x: 6,
            y: 5,
          },
        })),
        donuts.push(donutPlusLife);
      donuts.push(donutMinusLife);
      donuts.push(donutMinusLife2);
      donuts.push(donut);

      collisionBlocks = map5.chunk();
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
  imgSrc: "img/donut_S.png",
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
