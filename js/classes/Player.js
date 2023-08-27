class Player {
  constructor({ imgSrc, position, animations, enemyCollisionPosition }) {
    this.img = new Image();
    this.img.src = imgSrc;
    this.img.onload = () => {
      this.draw();
      this.width = this.img.width / 4;
      this.height = this.img.height;
    };

    this.position = {
      x: position.x,
      y: position.y,
    };

    this.vx = 0;
    this.vy = 0;
    this.timer = 0;
    this.frame = 0;
    this.animations = animations;
    this.enemyCollisionPosition = enemyCollisionPosition;

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

    if (this.position.y < 32) {
      this.position.y = 32;
    }
    if (this.position.y > 256) {
      this.position.y = 256;
    }
    if (this.position.x < -6) {
      this.position.x = -6;
    }
    if (this.position.x > canvas.width - this.width + 6) {
      this.position.x = canvas.width - this.width + 6;
    }

    this.position.x += this.vx;
    this.position.y += this.vy;

    this.blockCollisionCheck();
    this.missileCollisionCheck();
    this.getScoreCheck();
    this.clearStageCheck();
  }

  blockCollisionCheck() {
    collisionBlocks.forEach((col, colIdx) => {
      col.forEach((row, rowIdx) => {
        if (row === 10) {
          const blockX = rowIdx * tile;
          const blockY = colIdx * tile;
          if (
            blockX + 32 > this.position.x + 6 &&
            blockX < this.position.x + this.width - 6 &&
            blockY + 32 > this.position.y + 6 &&
            blockY < this.position.y + this.height - 2
          ) {
            this.position.x -= this.vx;
            this.position.y -= this.vy;
          }
        }
      });
    });
  }

  missileCollisionCheck() {
    missiles.forEach((missile, i) => {
      if (
        missile.position.x + missile.width - 11 > this.position.x &&
        missile.position.x + 11 < this.position.x + this.width &&
        missile.position.y + missile.height - 9 > this.position.y &&
        missile.position.y + 9 < this.position.y + this.height
      ) {
        hitMissileSound.play();
        missiles.splice(i, 1);
        this.minusLife();
        this.switchSprite("damaged");
      }
    });
  }

  getScoreCheck() {
    for (let i = 0; i < chocos.length; i++) {
      if (
        chocos[i].position.x + 16 > this.position.x &&
        chocos[i].position.x + 16 < this.position.x + tile &&
        chocos[i].position.y + 16 > this.position.y &&
        chocos[i].position.y + 16 < this.position.y + tile
      ) {
        if (chocos[i].id === "score") {
          score++;
          getChocoSound.play();
          chocos[i].getItem = true;
          chocos[i].getItemStartTime = performance.now();
          chocos.splice(i, 1);
          break;
        } else if (chocos[i].id === "minus") {
          minusLifeSound.play();
          this.minusLife();
          chocos.splice(i, 1);
          break;
        } else if (chocos[i].id === "plus") {
          plusLifeSound.play();
          this.plusLife();
          chocos.splice(i, 1);
          break;
        }
      }
    }
  }

  clearStageCheck() {
    if (
      goal.position.x - 8 <= this.position.x &&
      goal.position.x + tile >= this.position.x + 24 &&
      goal.position.y + 4 >= this.position.y &&
      score === stageNum
    ) {
      if (stageNum !== 5) {
        stageClearSound.play();
        stages[stageNum].clearStage = true;
        stageNum++;
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            stages[stageNum].init();
            gsap.to(overlay, {
              opacity: 0,
            });
          },
        });
      } else {
        themeSong.pause();

        if (soundOn) endingSound.play();
        stages[stageNum].clearStage = true;
        cancelAnimationFrame(animation);
        gameEndScreen.classList.toggle("show");
        canvas.classList.toggle("show");
      }
    }
  }

  minusLife() {
    for (let i = 0; i < lives.length; i++) {
      if (lives[i].status.empty.isEmpty) continue;
      if (lives[i].status.filled.isFilled) {
        lives[i].swipeEmpty();
        lives[i].status.empty.isEmpty = true;
        lives[i].status.filled.isFilled = false;
      }
      break;
    }
    if (lives[2].status.empty.isEmpty) {
      gameOver();
    }
  }

  plusLife() {
    for (let i = lives.length - 1; i >= 0; i--) {
      if (lives[i].status.filled.isFilled) continue;
      if (lives[i].status.empty.isEmpty) {
        lives[i].swipeFilled();
        lives[i].status.empty.isEmpty = false;
        lives[i].status.filled.isFilled = true;
      }
      break;
    }
  }

  draw() {
    c.drawImage(
      this.img,
      this.width * this.frame,
      0,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
