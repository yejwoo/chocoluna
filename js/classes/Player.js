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

    this.position.x += this.vx;
    this.position.y += this.vy;

    this.blockCollisionCheck();
    this.missileCollisionCheck();
    this.getScoreCheck();
    this.getToGoalCheck();
  }

  //forEach문? for문?
  blockCollisionCheck() {
    for (let i = 0; i < collisionBlocks.length; i++) {
      if (
        collisionBlocks[i].x + tileSize > this.position.x &&
        collisionBlocks[i].x < this.position.x + tileSize &&
        collisionBlocks[i].y + tileSize > this.position.y &&
        collisionBlocks[i].y < this.position.y + tileSize
      ) {
        if (this.vx === -velocity)
          this.position.x = collisionBlocks[i].x + tileSize;

        if (this.vx === velocity)
          this.position.x = collisionBlocks[i].x - tileSize;

        if (this.vy === -velocity)
          this.position.y = collisionBlocks[i].y + tileSize;

        if (this.vy === velocity)
          this.position.y = collisionBlocks[i].y - tileSize;
      }
    }
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
        donuts[i].position.x + 16 < this.position.x + tileSize &&
        donuts[i].position.y + 16 > this.position.y &&
        donuts[i].position.y + 16 < this.position.y + tileSize
      ) {
        score++;
        scoreElement.innerText = score;
        donuts.splice(i, 1);
        break;
      }
    }
  }

  getToGoalCheck() {
    if (this.position.y < 8) {
      stages[1].clearStage = true;
      stageNum++;
      stageElement.innerText = stageNum;
      gsap.to(overlay, {
        opacity: 1,
      });
    }
  }
}
