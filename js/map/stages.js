let backgroundStage,
  enemies = [],
  chocos = [],
  missiles = [],
  lives = [],
  goal,
  player,
  enemy1,
  enemy2,
  enemy3,
  enemy4,
  getChocoEffect,
  choco,
  chocoMinusLife,
  chocoPlusLife,
  missile,
  missileCollisionBlocks,
  collisionBlocks,
  playerStartPosition,
  missileInterval


function startMissiles() {
  if (missileInterval) {
    clearInterval(missileInterval);
  }

  missileInterval = setInterval(
    () => {
      if (stageNum === 1) {
        const missile = new Missile({
          imgSrc: "img/assets/missile.png",
          position: {
            x: tile * 2,
            y: tile * 2 + 8,
          },
          direction: "vertical",
        });
        missiles.push(missile);
      } else if (stageNum === 2) {
        const missile = new Missile({
          imgSrc: "img/assets/missile.png",
          position: {
            x: tile * 0 + 8,
            y: tile * 6,
          },
          direction: "horizontal",
        });
        missiles.push(missile);
      } else if (stageNum === 3) {
        const missile = new Missile({
          imgSrc: "img/assets/missile.png",
          position: {
            x: tile * 0,
            y: tile * 1 + 8,
          },
          direction: "vertical",
        });
        missiles.push(missile);
      } else if (stageNum === 4) {
        const missile = new Missile({
          imgSrc: "img/assets/missile.png",
          position: {
            x: tile * 1 + 8,
            y: tile * 7,
          },
          direction: "horizontal",
        });
        missiles.push(missile);
      } else {
        const missile = new Missile({
          imgSrc: "img/assets/missile.png",
          position: {
            x: tile * 8,
            y: tile * 2 + 8,
          },
          direction: "vertical",
        });
        missiles.push(missile);
      }
    },
    stageNum === 3 ? 3500 : stageNum === 4 ? 2500 : stageNum === 5 ? 2500 : 1500
  );
}

function stopMissiles() {
  clearInterval(missileInterval);
  missileInterval = null;
}

let stages = {
  1: {
    playerStartPosition: {
      x: 32,
      y: 256,
    },
    init: () => {
      score = 0;

      backgroundStage = new Stage({
        imgSrc: "img/map/stage1.png",
      });

      goal = {
        position: {
          x: tile * 8,
          y: tile * 1,
        },
      };

      collisionBlocks = map1.chunk();

      missileCollisionBlocks = {
        position: {
          x: tile * 2,
          y: tile * 6,
        },
      };

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: tile * 1,
          y: tile * 8,
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
          damaged: {
            imgSrc: "img/sprite/damaged.png",
          },
        },
        enemyCollisionPosition: {
          1: {
            x: tile * 1,
            y: tile * 6,
          },
        },
      });

      (enemy1 = new Enemy({
        id: 1,
        imgSrc: "img/sprite/missile_bear.png",
        position: {
          x: 2,
          y: 2,
        },
        moveDirection: {
          rotate: false,
          vertical: false,
          horizontal: false,
        },
      })),
        enemies.push(enemy1);

      (choco = new Objects({
        id: "score",
        imgSrc: "img/sprite/choco_sprite.png",
        position: {
          x: 8,
          y: 5,
        },
        getItem: false,
        getItemStartTime: 0,
      })),
        (getChocoEffect = new Objects({
          imgSrc: "img/sprite/get_choco.png",
          position: {
            x: 8,
            y: 5,
          },
        }));

      chocos.push(choco);
      startMissiles();
    },
  },
  2: {
    playerStartPosition: {
      x: 256,
      y: 256,
    },
    init: () => {
      (enemies = []),
        (chocos = []),
        (backgroundStage = new Stage({
          imgSrc: "img/map/stage2.png",
        }));

      goal = {
        position: {
          x: tile * 2,
          y: tile * 1,
        },
      };

      collisionBlocks = map2.chunk();

      missileCollisionBlocks = {
        position: {
          x: tile * 4,
          y: tile * 7,
        },
      };

      enemyCollisionBlocks = {
        rotate: {
          0: {
            x: tile * 7,
            y: tile * 6,
          },
          1: {
            x: tile * 5,
            y: tile * 6,
          },
          2: {
            x: tile * 5,
            y: tile * 3,
          },
          3: {
            x: tile * 7,
            y: tile * 3,
          },
        },
      };

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: tile * 8,
          y: tile * 8,
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
          damaged: {
            imgSrc: "img/sprite/damaged.png",
          },
        },
        enemyCollisionPosition: {
          1: {
            x: tile * 8 + 4,
            y: tile * 5,
          },
          2: {
            x: tile * 0,
            y: tile * 5 - 4,
          },
        },
      });

      enemy1 = new Enemy({
        id: 1,
        imgSrc: "img/sprite/dance_bear.png",
        position: {
          x: 7,
          y: 4,
        },
        moveDirection: {
          rotate: true,
          vertical: false,
          horizontal: false,
        },
      });

      (enemy2 = new Enemy({
        id: 2,
        imgSrc: "img/sprite/missile_bear.png",
        position: {
          x: 0,
          y: 6,
        },
        moveDirection: {
          rotate: false,
          vertical: false,
          horizontal: false,
        },
      })),
        (choco = new Objects({
          id: "score",
          imgSrc: "img/sprite/choco_sprite.png",
          position: {
            x: 6,
            y: 7,
          },
        })),
        (getChocoEffect = new Objects({
          imgSrc: "img/sprite/get_choco.png",
          position: {
            x: 6,
            y: 7,
          },
        }));

      enemies.push(enemy1, enemy2);
      chocos.push(choco);
      stopMissiles();
      startMissiles();
    },
  },
  3: {
    playerStartPosition: {
      x: 64,
      y: 256,
    },
    init: () => {
      (missiles = []),
        (enemies = []),
        (chocos = []),
        (backgroundStage = new Stage({
          imgSrc: "img/map/stage3.png",
        }));

      goal = {
        position: {
          x: tile * 4,
          y: tile * 1,
        },
      };

      collisionBlocks = map3.chunk();

      missileCollisionBlocks = {
        position: {
          x: tile * 0,
          y: tile * 5,
        },
      };

      enemyCollisionBlocks = {
        rotate: {
          0: {
            x: tile * 5,
            y: tile * 8,
          },
          1: {
            x: tile * 3,
            y: tile * 8,
          },
          2: {
            x: tile * 3,
            y: tile * 5,
          },
          3: {
            x: tile * 5,
            y: tile * 5,
          },
        },
        vertical: {
          0: {
            x: tile * 8,
            y: tile * 1,
          },
          1: {
            x: tile * 8,
            y: tile * 9,
          },
        },
      };

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: tile * 2,
          y: tile * 8,
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
          damaged: {
            imgSrc: "img/sprite/damaged.png",
          },
        },
        enemyCollisionPosition: {
          1: {
            x: tile * 2,
            y: tile * 7,
          },
          2: {
            x: tile * 6,
            y: tile * 7,
          },
          3: {
            x: tile * 1,
            y: tile * 2,
          },
        },
      });

      (enemy1 = new Enemy({
        id: 1,
        imgSrc: "img/sprite/dance_bear.png",
        position: {
          x: 5,
          y: 6,
        },
        moveDirection: {
          rotate: true,
          vertical: false,
          horizontal: false,
        },
      })),
        (enemy2 = new Enemy({
          id: 2,
          imgSrc: "img/sprite/jump_bear.png",
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
          id: 3,
          imgSrc: "img/sprite/missile_bear.png",
          position: {
            x: 0,
            y: 1,
          },
          moveDirection: {
            rotate: false,
            vertical: false,
            horizontal: false,
          },
        }));
      (choco = new Objects({
        id: "score",
        imgSrc: "img/sprite/choco_sprite.png",
        position: {
          x: 2,
          y: 2,
        },
      })),
        (chocoPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/sprite/life_plus.png",
          position: {
            x: 7,
            y: 1,
          },
        })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 9,
            y: 1,
          },
        })),
        (getChocoEffect = new Objects({
          imgSrc: "img/sprite/get_choco.png",
          position: {
            x: 2,
            y: 2,
          },
        }));

      enemies.push(enemy1, enemy2, enemy3);
      chocos.push(chocoPlusLife, chocoMinusLife, choco);
      stopMissiles();
      startMissiles();
    },
  },
  4: {
    playerStartPosition: {
      x: 128,
      y: 256,
    },
    init: () => {
      (missiles = []),
        (enemies = []),
        (chocos = []),
        (backgroundStage = new Stage({
          imgSrc: "img/map/stage4.png",
        }));

      goal = {
        position: {
          x: tile * 9,
          y: tile * 1,
        },
      };

      collisionBlocks = map4.chunk();

      missileCollisionBlocks = {
        position: {
          x: tile * 8,
          y: tile * 7,
        },
      };

      enemyCollisionBlocks = {
        rotate: {
          0: {
            x: tile * 5,
            y: tile * 5,
          },
          1: {
            x: tile * 3,
            y: tile * 5,
          },
          2: {
            x: tile * 3,
            y: tile * 2,
          },
          3: {
            x: tile * 5,
            y: tile * 2,
          },
        },
        vertical: {
          0: {
            x: tile * 9,
            y: tile * 1 - 32,
          },
          1: {
            x: tile * 9,
            y: tile * 9,
          },
        },
        horizontal: {
          0: {
            x: tile * 1,
            y: tile * 1,
          },
          1: {
            x: tile * 7,
            y: tile * 1,
          },
        },
      };

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: tile * 4,
          y: tile * 8,
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
          damaged: {
            imgSrc: "img/sprite/damaged.png",
          },
        },
        enemyCollisionPosition: {
          1: {
            x: tile * 2,
            y: tile * 6,
          },
          2: {
            x: tile * 2,
            y: tile * 2,
          },
          3: {
            x: tile * 4,
            y: tile * 2,
          },
          4: {
            x: tile * 8,
            y: tile * 4,
          },
        },
      });

      enemy1 = new Enemy({
        id: 1,
        imgSrc: "img/sprite/missile_bear.png",
        position: {
          x: 1,
          y: 7,
        },
        moveDirection: {
          rotate: false,
          vertical: false,
          horizontal: false,
        },
      });

      enemy2 = new Enemy({
        id: 2,
        imgSrc: "img/sprite/jump_bear2.png",
        position: {
          x: 2,
          y: 1,
        },
        moveDirection: {
          rotate: false,
          vertical: false,
          horizontal: true,
        },
      });

      (enemy3 = new Enemy({
        id: 3,
        imgSrc: "img/sprite/dance_bear.png",
        position: {
          x: 5,
          y: 3,
        },
        moveDirection: {
          rotate: true,
          vertical: false,
          horizontal: false,
        },
      })),
        (enemy4 = new Enemy({
          id: 4,
          imgSrc: "img/sprite/jump_bear.png",
          position: {
            x: 9,
            y: 8,
          },
          moveDirection: {
            rotate: false,
            vertical: true,
            horizontal: false,
          },
        })),
        (choco = new Objects({
          id: "score",
          imgSrc: "img/sprite/choco_sprite.png",
          position: {
            x: 4,
            y: 5,
          },
        })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 5,
            y: 6,
          },
        })),
        (chocoPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/sprite/life_plus.png",
          position: {
            x: 6,
            y: 5,
          },
        })),
        (getChocoEffect = new Objects({
          imgSrc: "img/sprite/get_choco.png",
          position: {
            x: 4,
            y: 5,
          },
        }));

      chocos.push(chocoMinusLife, chocoPlusLife, choco);
      enemies.push(enemy1, enemy2, enemy3, enemy4);

      stopMissiles();
      startMissiles();
    },
  },
  5: {
    clearStage: false,
    playerStartPosition: {
      x: 288,
      y: 256,
    },
    init: () => {
      (missiles = []),
        (enemies = []),
        (chocos = []),
        (backgroundStage = new Stage({
          imgSrc: "img/map/stage5.png",
        }));

      goal = {
        position: {
          x: tile * 1,
          y: tile * 1,
        },
      };

      collisionBlocks = map5.chunk();

      enemyCollisionBlocks = {
        rotate: {
          0: {
            x: tile * 3,
            y: tile * 6,
          },
          1: {
            x: tile * 0,
            y: tile * 6,
          },
          2: {
            x: tile * 0,
            y: tile * 1,
          },
          3: {
            x: tile * 3,
            y: tile * 1,
          },
        },
        horizontal: {
          0: {
            x: tile * 0 - tile,
            y: tile * 7,
          },
          1: {
            x: tile * 6,
            y: tile * 7,
          },
        },
      };

      missileCollisionBlocks = {
        position: {
          x: tile * 8,
          y: tile * 9,
        },
      };

      player = new Player({
        imgSrc: "img/sprite/idle_down.png",
        position: {
          x: tile * 9,
          y: tile * 8,
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
          damaged: {
            imgSrc: "img/sprite/damaged.png",
          },
        },
        enemyCollisionPosition: {
          1: {
            x: tile * 7,
            y: tile * 3,
          },
          2: {
            x: tile * 0,
            y: tile * 6,
          },
          3: {
            x: tile * 5,
            y: tile * 7,
          },
          4: {
            x: tile * 5,
            y: tile * 8,
          },
        },
      });

      enemy = new Enemy({
        id: 1,
        imgSrc: "img/sprite/missile_bear.png",
        position: {
          x: 8,
          y: 2,
        },
        moveDirection: {
          rotate: false,
          vertical: false,
          horizontal: false,
        },
      });
      (enemy2 = new Enemy({
        id: 2,
        imgSrc: "img/sprite/dance_bear.png",
        position: {
          x: 0,
          y: 2,
        },
        moveDirection: {
          rotate: true,
          vertical: false,
          horizontal: false,
        },
      })),
        (enemy3 = new Enemy({
          id: 3,
          imgSrc: "img/sprite/jump_bear2.png",
          position: {
            x: 0,
            y: 7,
          },
          moveDirection: {
            rotate: false,
            vertical: false,
            horizontal: true,
          },
        })),
        (enemy4 = new Enemy({
          id: 4,
          imgSrc: "img/sprite/jump_bear.png",
          position: {
            x: 5,
            y: 8,
          },
          moveDirection: {
            rotate: false,
            vertical: false,
            horizontal: true,
          },
        }));

      (choco = new Objects({
        id: "score",
        imgSrc: "img/sprite/choco_sprite.png",
        position: {
          x: 3,
          y: 1,
        },
      })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 6,
            y: 6,
          },
        })),
        (chocoPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/sprite/life_plus.png",
          position: {
            x: 6,
            y: 4,
          },
        })),
        (getChocoEffect = new Objects({
          imgSrc: "img/sprite/get_choco.png",
          position: {
            x: 3,
            y: 1,
          },
        }));

      chocos.push(chocoPlusLife, chocoMinusLife, choco);
      enemies.push(enemy, enemy2, enemy3, enemy4);

      stopMissiles();
      startMissiles();
    },
  },
};
