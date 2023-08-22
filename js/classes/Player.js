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

      if (this.position.y < 0) {
        this.position.y = 0;
      }
      if (this.position.y > 227) {
        this.position.y = 227;
      }
      if (this.position.x < -8) {
        this.position.x = -8;
      }
      if (this.position.x > canvas.width - this.width) {
        this.position.x = canvas.width - this.width;
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
            blockX + 24 > this.position.x &&
            blockX < this.position.x + 24 &&
            blockY + 24 > this.position.y &&
            blockY < this.position.y + 28
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
        hit.play();
        missiles.splice(i, 1);
        this.minusLife();
        this.switchSprite("damaged");
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
        if (donuts[i].id === "score") {
          score++;
          donuts.splice(i, 1);
          break;
        } else if (donuts[i].id === "minus") {
          this.minusLife();
          donuts.splice(i, 1);
          break;
        } else if (donuts[i].id === "plus") {
          this.plusLife();
          donuts.splice(i, 1);
          break;
        }
      }
    }
  }

  getToGoalCheck() {
    if (
      goal.position.x - 8 <= this.position.x &&
      goal.position.x + tile >= this.position.x + 24 &&
      goal.position.y + 16 >= this.position.y &&
      score === stageNum
    ) {
      if (stageNum !== 5) {
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
        stages[stageNum].clearStage = true;
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
      minus.play();
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
        plus.play();
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
      this.position.x + 4,
      this.position.y + 4,
      this.width,
      this.height
    );
  }
}
