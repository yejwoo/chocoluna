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
    for (let i = 0; i < collisionBlocks1.length; i++) {
      if (
        collisionBlocks1[i].x + tileSize > this.position.x &&
        collisionBlocks1[i].x < this.position.x + tileSize &&
        collisionBlocks1[i].y + tileSize > this.position.y &&
        collisionBlocks1[i].y < this.position.y + tileSize
      ) {
        if (this.vx === -velocity)
          this.position.x = collisionBlocks1[i].x + tileSize;

        if (this.vx === velocity)
          this.position.x = collisionBlocks1[i].x - tileSize;

        if (this.vy === -velocity)
          this.position.y = collisionBlocks1[i].y + tileSize;

        if (this.vy === velocity)
          this.position.y = collisionBlocks1[i].y - tileSize;
      }
    }
  }

  missileCollisionCheck() {
    missiles.forEach((missile, i) => {
      if (
        missile.position.x + missile.width - 4 > this.position.x &&
        missile.position.x + 4 < this.position.x + player.width / 4 &&
        missile.position.y + missile.height - 4 > this.position.y &&
        missile.position.y + 4 < this.position.y + player.height
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
        donuts.splice(i, 1);
        break;
      }
    }

    // score를 1 증가시킨 후 더 이상 증가하게 하지 않는다. 수정 필요
  }

  getToGoalCheck() {
    if (this.position.y < chunkedMap1.goal.y + 8)
      console.log("You got to goal!");
    // 배경 전환
  }
}
