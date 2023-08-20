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

// 중복 전역변수 해결하기
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
  donutPlusLife,
  donuts = [],
  missile,
  missiles = [],
  missileCollisionBlocks,
  collisionBlocks;

// 마무리 단계 -> stages를 class로 변경하기?
let stages = {
  1: {
    clearStage: false,
    init: () => {
      backgroundStage = new Stage({
        imgSrc: "img/map/stage1.png",
      });

      goal = {
        position: {
          x: tile * 8,
          y: tile * 0,
        },
      };

      collisionBlocks = map1.chunk();

      missileCollisionBlocks = {
        position: {
          x: tile * 2,
          y: tile * 5,
        },
      };

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: tile * 1,
          y: tile * 7,
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

      (enemy = new Enemy({
        imgSrc: "img/sprite/slime1.png",
        position: {
          x: 2,
          y: 1,
        },
        moveDirection: {
          rotate: false,
          vertical: false,
          horizontal: false,
        },
      })),
        enemies.push(enemy);

      (donut = new Objects({
        imgSrc: "img/donut_L.png",
        position: {
          x: 8,
          y: 4,
        },
      })),
        donuts.push(donut);


      function missile() {
        if (stageNum === 1) {
          requestAnimationFrame(missile);
          if (timer % 80 === 0) {
            const missile = new Missile({
              imgSrc: "img/missile_vertical.png",
              position: {
                x: tile * 2,
                y: tile * 1 + 8,
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
      (missiles = []),
        (enemies = []),
        (backgroundStage = new Stage({
          imgSrc: "img/map/stage2.png",
        }));

      goal = {
        position: {
          x: tile * 2,
          y: tile * 0,
        },
      };

      collisionBlocks = map2.chunk();

      missileCollisionBlocks = {
        position: {
          x: tile * 4,
          y: tile * 5,
        },
      };

      enemyCollisionBlocks = {
        rotate: {
          0: {
            x: tile * 7,
            y: tile * 5,
          },
          1: {
            x: tile * 5,
            y: tile * 5,
          },
          2: {
            x: tile * 5,
            y: tile * 2,
          },
          3: {
            x: tile * 7,
            y: tile * 2,
          },
        },
      };

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: tile * 8,
          y: tile * 7,
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
        enemyCollisionPosition: {
          x: tile * 8 + 4,
          y: tile * 4,
        },
      });

      enemy = new Enemy({
        imgSrc: "img/sprite/slime1.png",
        position: {
          x: 7,
          y: 3,
        },
        moveDirection: {
          rotate: true,
          vertical: false,
          horizontal: false,
        },
      });

      (enemy2 = new Enemy({
        imgSrc: "img/sprite/slime2.png",
        position: {
          x: 0,
          y: 5,
        },
        moveDirection: {
          rotate: false,
          vertical: false,
          horizontal: false,
        },
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


      function missile() {
        if (stageNum === 2) {
          requestAnimationFrame(missile);
          if (timer % 80 === 0) {
            const missile = new Missile({
              imgSrc: "img/missile_horizontal.png",
              position: {
                x: tile * 0 + 8,
                y: tile * 5,
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
      (missiles = []),
        (enemies = []),
        (backgroundStage = new Stage({
          imgSrc: "img/map/stage3.png",
        }));

      goal = {
        position: {
          x: tile * 4,
          y: tile * 0,
        },
      };

      collisionBlocks = map3.chunk();

      missileCollisionBlocks = {
        position: {
          x: tile * 0,
          y: tile * 4,
        },
      };

      enemyCollisionBlocks = {
        rotate: {
          0: {
            x: tile * 5,
            y: tile * 7,
          },
          1: {
            x: tile * 3,
            y: tile * 7,
          },
          2: {
            x: tile * 3,
            y: tile * 4,
          },
          3: {
            x: tile * 5,
            y: tile * 4,
          },
        },
        vertical: {
          0: {
            x: tile * 8,
            y: tile * 0,
          },
          1: {
            x: tile * 8,
            y: tile * 8,
          },
        },
      };

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: tile * 2,
          y: tile * 7,
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
        enemyCollisionPosition: {
          x: tile * 2 - 4,
          y: tile * 6,
        },
      });

      (enemy = new Enemy({
        imgSrc: "img/sprite/slime2.png",
        position: {
          x: 5,
          y: 5,
        },
        moveDirection: {
          rotate: true,
          vertical: false,
          horizontal: false,
        },
      })),
        (enemy2 = new Enemy({
          imgSrc: "img/sprite/slime3.png",
          position: {
            x: 8,
            y: 7,
          },
          moveDirection: {
            rotate: false,
            vertical: true,
            horizontal: false,
          },
        })),
        (enemy3 = new Enemy({
          imgSrc: "img/sprite/slime1.png",
          position: {
            x: 0,
            y: 0,
          },
          moveDirection: {
            rotate: false,
            vertical: false,
            horizontal: false,
          },
        }));
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
        enemies.push(enemy, enemy2, enemy3);
      donuts.push(donutPlusLife, donutMinusLife, donut);


      function missile() {
        if (stageNum === 3) {
          requestAnimationFrame(missile);
          if (timer % 200 === 0) {
            const missile = new Missile({
              imgSrc: "img/missile_vertical.png",
              position: {
                x: tile * 0,
                y: tile * 0 + 8,
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
  4: {
    clearStage: false,
    init: () => {
      (missiles = []),
        (enemies = []),
        (backgroundStage = new Stage({
          imgSrc: "img/map/stage4.png",
        }));

      goal = {
        position: {
          x: tile * 9,
          y: tile * 0,
        },
      };

      collisionBlocks = map4.chunk();

      missileCollisionBlocks = {
        position: {
          x: tile * 8,
          y: tile * 6,
        },
      };

      enemyCollisionBlocks = {
        rotate: {
          0: {
            x: tile * 5,
            y: tile * 4,
          },
          1: {
            x: tile * 3,
            y: tile * 4,
          },
          2: {
            x: tile * 3,
            y: tile * 1,
          },
          3: {
            x: tile * 5,
            y: tile * 1,
          },
        },
        vertical: {
          0: {
            x: tile * 9,
            y: tile * 0 -32,
          },
          1: {
            x: tile * 9,
            y: tile * 8,
          },
        },
        horizontal: {
          0: {
            x: tile * 1,
            y: tile * 0,
          },
          1: {
            x: tile * 7,
            y: tile * 0,
          },
        },
      };

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: tile * 4,
          y: tile * 7,
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
        moveDirection: {
          rotate: false,
          vertical: false,
          horizontal: false,
        },
      });

      (enemy2 = new Enemy({
        imgSrc: "img/sprite/slime2.png",
        position: {
          x: 5,
          y: 2,
        },
        moveDirection: {
          rotate: true,
          vertical: false,
          horizontal: false,
        },
      })),
        (enemy3 = new Enemy({
          imgSrc: "img/sprite/slime3.png",
          position: {
            x: 9,
            y: 7,
          },
          moveDirection: {
            rotate: false,
            vertical: true,
            horizontal: false,
          },
        })),
        (enemy4 = new Enemy({
          imgSrc: "img/sprite/slime1.png",
          position: {
            x: 2,
            y: 0,
          },
          moveDirection: {
            rotate: false,
            vertical: false,
            horizontal: true,
          },
        }));

      (donut = new Objects({
        imgSrc: "img/donut_L.png",
        position: {
          x: 4,
          y: 4,
        },
      })),
        (donutMinusLife = new Objects({
          imgSrc: "img/donut_minus.png",
          position: {
            x: 5,
            y: 5,
          },
        })),
        (donutPlusLife = new Objects({
          imgSrc: "img/donut_plus.png",
          position: {
            x: 6,
            y: 4,
          },
        })),
        donuts.push(donutMinusLife, donutPlusLife, donut);
      enemies.push(enemy, enemy2, enemy3, enemy4);

      function missile() {
        if (stageNum === 4) {
          requestAnimationFrame(missile);
          if (timer % 180 === 0) {
            const missile = new Missile({
              imgSrc: "img/missile_horizontal.png",
              position: {
                x: tile * 1 + 8,
                y: tile * 6,
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
  5: {
    clearStage: false,
    init: () => {
      (missiles = []),
        (enemies = []),
        (backgroundStage = new Stage({
          imgSrc: "img/map/stage5.png",
        }));

      goal = {
        position: {
          x: tile * 9,
          y: tile * 0,
        },
      };

      collisionBlocks = map5.chunk();

      enemyCollisionBlocks = {
        rotate: {
          0: {
            x: tile * 3,
            y: tile * 5,
          },
          1: {
            x: tile * 0,
            y: tile * 5,
          },
          2: {
            x: tile * 0,
            y: tile * 0,
          },
          3: {
            x: tile * 3,
            y: tile * 0,
          },
        },
      };

      missileCollisionBlocks = {
        position: {
          x: tile * 2,
          y: tile * 5,
        },
      };

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: tile * 9,
          y: tile * 7,
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
        moveDirection: {
          rotate: false,
          vertical: false,
          horizontal: false,
        },
      });

      (enemy2 = new Enemy({
        imgSrc: "img/sprite/slime2.png",
        position: {
          x: 7,
          y: 4,
        },
        moveDirection: {
          rotate: false,
          vertical: false,
          horizontal: false,
        },
      })),
        (enemy3 = new Enemy({
          imgSrc: "img/sprite/slime3.png",
          position: {
            x: 0,
            y: 1,
          },
          moveDirection: {
            rotate: true,
            vertical: false,
            horizontal: false,
          },
        })),
        (enemy4 = new Enemy({
          imgSrc: "img/sprite/slime1.png",
          position: {
            x: 3,
            y: 6,
          },
          moveDirection: {
            rotate: false,
            vertical: false,
            horizontal: false,
          },
        }));

      (enemy5 = new Enemy({
        imgSrc: "img/sprite/slime2.png",
        position: {
          x: 1,
          y: 6,
        },
        moveDirection: {
          rotate: false,
          vertical: false,
          horizontal: false,
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
        donuts.push(donutPlusLife, donutMinusLife, donutMinusLife2, donut);
      enemies.push(enemy, enemy2, enemy3, enemy4, enemy5);

      function missile() {
        
        if (stageNum === 5) {
          requestAnimationFrame(missile);
          if (timer % 120 === 0) {
            const missile = new Missile({
              imgSrc: "img/missile_horizontal.png",
              position: {
                x: tile * 7,
                y: tile * 6,
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
};

// 이렇게 말고 하트 하나 따로 두고 세 개씩 배치하기?
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

// render
function render() {
  timer++;

  if (life.splitFrames.y < 3) {
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

    life.draw();
    donutScore.draw();

    c.save();
    c.globalAlpha = overlay.opacity;
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.restore();
  } else stages[stageNum].init();
  // 종료된 지점으로 돌아가기
}

stages[stageNum].init();
render();
