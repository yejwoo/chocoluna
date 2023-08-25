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
  playerStartPosition;

let stages = {
  1: {
    playerStartPosition: {
      x: 32,
      y: 224,
    },
    init: () => {
      score = 0;

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
          damaged: {
            imgSrc: "img/sprite/damaged.png",
          },
        },
        enemyCollisionPosition: {
          1: {
            x: tile * 1,
            y: tile * 5,
          },
        },
      });

      (enemy1 = new Enemy({
        id: 1,
        imgSrc: "img/sprite/missile_bear.png",
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
        enemies.push(enemy1);

      (choco = new Objects({
        id: "score",
        imgSrc: "img/sprite/choco_sprite.png",
        position: {
          x: 8,
          y: 4,
        },
        getItem: false,
        getItemStartTime: 0,
      })),
      
      getChocoEffect = new Objects ({
        imgSrc: "img/sprite/get_choco.png",
        position: {
          x:8,
          y:4,
        },
      })

        chocos.push(choco);



      function missile() {
        if (stageNum === 1) {
          requestAnimationFrame(missile);
          if (timer % 90 === 0) {
            const missile = new Missile({
              imgSrc: "img/assets/missile.png",
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
    playerStartPosition: {
      x: 256,
      y: 224,
    },
    init: () => {
      (missiles = []),
        (enemies = []),
        (chocos = []),
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
          damaged: {
            imgSrc: "img/sprite/damaged.png",
          },
        },
        enemyCollisionPosition: {
          1: {
            x: tile * 8 + 4,
            y: tile * 4,
          },
          2: {
            x: tile * 0,
            y: tile * 4,
          },
        },
      });

      enemy1 = new Enemy({
        id: 1,
        imgSrc: "img/sprite/dance_bear.png",
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
        id: 2,
        imgSrc: "img/sprite/missile_bear.png",
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

        (choco = new Objects({
          id: "score",
          imgSrc: "img/sprite/choco_sprite.png",
          position: {
            x: 6,
            y: 6,
          },
        })),

        getChocoEffect = new Objects ({
          imgSrc: "img/sprite/get_choco.png",
          position: {
            x:6,
            y:6,
          },
        })
  


        enemies.push(enemy1, enemy2);
      chocos.push(choco);

      function missile() {
        if (stageNum === 2) {
          requestAnimationFrame(missile);
          if (timer % 90 === 0) {
            const missile = new Missile({
              imgSrc: "img/assets/missile.png",
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
    playerStartPosition: {
      x: 64,
      y: 224,
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
            x: tile * 6,
            y: tile * 6,
          },
          3: {
            x: tile * 1,
            y: tile * 1,
          },
        },
      });

      (enemy1 = new Enemy({
        id: 1,
        imgSrc: "img/sprite/dance_bear.png",
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
            y: 0,
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
          y: 1,
        },
      })),
        (chocoPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/sprite/life_plus.png",
          position: {
            x: 7,
            y: 0,
          },
        })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 9,
            y: 0,
          },
        })),
        getChocoEffect = new Objects ({
          imgSrc: "img/sprite/get_choco.png",
          position: {
            x:2,
            y:1,
          },
        })
  
        enemies.push(enemy1, enemy2, enemy3);
      chocos.push(chocoPlusLife, chocoMinusLife, choco);

      function missile() {
        if (stageNum === 3) {
          requestAnimationFrame(missile);
          if (timer % 200 === 0) {
            const missile = new Missile({
              imgSrc: "img/assets/missile.png",
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
    playerStartPosition: {
      x: 128,
      y: 224,
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
            y: tile * 0 - 32,
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
          damaged: {
            imgSrc: "img/sprite/damaged.png",
          },
        },
        enemyCollisionPosition: {
          1: {
            x: tile * 2,
            y: tile * 5,
          },
          2: {
            x: tile * 2,
            y: tile * 1,
          },
          3: {
            x: tile * 4,
            y: tile * 1,
          },
          4: {
            x: tile * 8,
            y: tile * 3,
          },
        },
      });

      enemy1 = new Enemy({
        id: 1,
        imgSrc: "img/sprite/missile_bear.png",
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

      enemy2 = new Enemy({
        id: 2,
        imgSrc: "img/sprite/jump_bear2.png",
        position: {
          x: 2,
          y: 0,
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
          y: 2,
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
            y: 7,
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
            y: 4,
          },
        })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 5,
            y: 5,
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
        getChocoEffect = new Objects ({
          imgSrc: "img/sprite/get_choco.png",
          position: {
            x:4,
            y:4,
          },
        })
  
        chocos.push(chocoMinusLife, chocoPlusLife, choco);
      enemies.push(enemy1, enemy2, enemy3, enemy4);

      let isMissileBursted = false;

      function missile() {
        if (stageNum === 4) {
          requestAnimationFrame(missile);
          if (isMissileBursted) {
            if (timer % 10 === 0) {
              const missile = new Missile({
                imgSrc: "img/assets/missile.png",
                position: {
                  x: tile * 1 + 8,
                  y: tile * 6,
                },
                direction: "horizontal",
              });
              missiles.push(missile);
            }
          } else {
            setTimeout(() => {
              isMissileBursted = true;
              setTimeout(() => {
                isMissileBursted = false;
              }, 3000);
            }, 3000);
          }
        }
      }

      missile();
    },
  },
  5: {
    clearStage: false,
    playerStartPosition: {
      x: 288,
      y: 224,
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
        horizontal: {
          0: {
            x: tile * 0 - tile,
            y: tile * 6,
          },
          1: {
            x: tile * 6,
            y: tile * 6,
          },
        },
      };

      missileCollisionBlocks = {
        position: {
          x: tile * 8,
          y: tile * 8,
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
          damaged: {
            imgSrc: "img/sprite/damaged.png",
          },
        },
        enemyCollisionPosition: {
          1: {
            x: tile * 7,
            y: tile * 2,
          },
          2: {
            x: tile * 0,
            y: tile * 5,
          },
          3: {
            x: tile * 5,
            y: tile * 6,
          },
          4: {
            x: tile * 5,
            y: tile * 7,
          },
        },
      });

      enemy = new Enemy({
        id: 1,
        imgSrc: "img/sprite/missile_bear.png",
        position: {
          x: 8,
          y: 1,
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
          y: 1,
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
            y: 6,
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
            y: 7,
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
          y: 0,
        },
      })),
        (chocoMinusLife = new Objects({
          id: "minus",
          imgSrc: "img/sprite/life_minus.png",
          position: {
            x: 6,
            y: 5,
          },
        })),
        (chocoPlusLife = new Objects({
          id: "plus",
          imgSrc: "img/sprite/life_plus.png",
          position: {
            x: 6,
            y: 3,
          },
        })),
        getChocoEffect = new Objects ({
          imgSrc: "img/sprite/get_choco.png",
          position: {
            x:3,
            y:0,
          },
        })
  
        chocos.push(chocoPlusLife, chocoMinusLife, choco);
      enemies.push(enemy, enemy2, enemy3, enemy4);

      let isMissileBursted = false;

      function missile() {
        if (stageNum === 5) {
          requestAnimationFrame(missile);
          if (isMissileBursted) {
            if (timer % 10 === 0) {
              const missile = new Missile({
                imgSrc: "img/assets/missile.png",
                position: {
                  x: tile * 8,
                  y: tile * 1 + 8,
                },
                direction: "vertical",
              });
              missiles.push(missile);
            }
          } else {
            setTimeout(() => {
              isMissileBursted = true;
              setTimeout(() => {
                isMissileBursted = false;
              }, 3000);
            }, 3000);
          }
        }
      }

      missile();
    },
  },
};
