class Player extends Objects {
  constructor({ imgSrc, position, animations }) {
    super({ imgSrc, position });
    this.vx = 0;
    this.vy = 0;
    this.animations = animations;

    for (let key in this.animations) {
      const img = new Image();
      img.src = this.animations[key].imgSrc;
      this.animations[key].img = img;
    }
  }

  switchSprite(name) {
    this.img = this.animations[name].img;
  }
  update() {
    this.timer++;
    if (this.timer % 13 === 0) this.frame++;
    if (this.frame > 3) this.frame = 0;
    if (this.position.y < 0) {
      this.position.y = 0;
      this.vy = 0;
    }

    this.position.x += this.vx;
    this.position.y += this.vy;

    this.blockCollisionCheck();
    this.missileCollisionCheck();
    this.getScoreCheck();
    this.getToGoalCheck();
  }

  blockCollisionCheck() {
    collisionBlocks.forEach((col, colIdx) => {
      col.forEach((row, rowIdx) => {
        if (row === 10) {
          const blockX = rowIdx * tile;
          const blockY = colIdx * tile;
          if (
            blockX + tile > this.position.x &&
            blockX < this.position.x + tile &&
            blockY + tile > this.position.y &&
            blockY < this.position.y + tile
          ) {
            if (this.vx === -velocity) this.position.x = blockX + tile;
            if (this.vx === velocity) this.position.x = blockX - tile;
            if (this.vy === -velocity) this.position.y = blockY + tile;
            if (this.vy === velocity) this.position.y = blockY - tile;
          }
        }
      });
    });
  }

  missileCollisionCheck() {
    missiles.forEach((missile, i) => {
      if (
        missile.position.x + missile.width - 11 > this.position.x &&
        missile.position.x + 11 < this.position.x + player.width / 4 &&
        missile.position.y + missile.height - 9 > this.position.y &&
        missile.position.y + 9 < this.position.y + player.height
      ) {
        life.update();
        missiles.splice(i, 1);
      }
    });
  }

  getScoreCheck() {
    for (let i = 0; i < donuts.length; i++) {
      if (
        donuts[i].position.x + 16 > this.position.x &&
        donuts[i].position.x + 16 < this.position.x + tile &&
        donuts[i].position.y + 16 > this.position.y &&
        donuts[i].position.y + 16 < this.position.y + tile
      ) {
        score++;
        scoreElement.innerText = score;
        donuts.splice(i, 1);
        break;
      }
    }
  }

  getToGoalCheck() {
    if (
      goal.position.x === this.position.x &&
      goal.position.y + 8 > this.position.y &&
      score === stageNum
    ) {
      stageNum++;
      stages[stageNum].clearStage = true;
      gsap.to(overlay, {
        opacity: 1,
        onComplete: () => {
          stageElement.innerText = stageNum;
          stages[stageNum].init();
          gsap.to(overlay, {
            opacity: 0,
          })
        },
      });
    }
  }
}
