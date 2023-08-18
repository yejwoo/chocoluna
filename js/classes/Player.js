class Player {
  constructor({ imgSrc, position, animations }) {
    this.img = new Image();
    this.img.src = imgSrc;
    this.img.onload = () => {
      this.draw();
      this.width = this.img.width;
      this.height = this.img.height;
    };

    this.position = {
      x: position.x,
      y: position.y,
    };

    this.vx = 0;
    this.vy = 0;
    this.animations = animations;
    this.timer = 0;
    this.frame = 0;

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
    if(this.position.y > 227) {
      this.position.y = 227;
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
            blockY < this.position.y + 24
          ) {
            if (this.vx === -velocity) this.position.x = blockX + 24;
            else if (this.vx === velocity) this.position.x = blockX - 24;
            else if (this.vy === -velocity) this.position.y = blockY + 24;
            else if (this.vy === velocity) this.position.y = blockY - 24;
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
      goal.position.x - 8 <= this.position.x &&
      goal.position.x + tile >= this.position.x + 24 &&
      goal.position.y + 16 >= this.position.y &&
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
          });
        },
      });
    }
  }

  draw() {
    // 크기 24px, 좌측 -8 우측 +8
    c.drawImage(
      this.img,
      24 * this.frame,
      0,
      24,
      24,
      this.position.x + 4,
      this.position.y + 4,
      24,
      24
    );
  }
}
