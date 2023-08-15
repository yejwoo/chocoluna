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
    this.collisionCheck();
  }

  collisionCheck() {
    for (let i = 0; i < chunkedMap1.length; i++) {
      if (
        chunkedMap1[i].x + tileSize > this.position.x &&
        chunkedMap1[i].x < this.position.x + tileSize &&
        chunkedMap1[i].y + tileSize > this.position.y &&
        chunkedMap1[i].y < this.position.y + tileSize
      ) {
        if (this.vx === -1) {
          this.position.x = chunkedMap1[i].x + tileSize;

          break;
        }

        if (this.vx === 1) {
          this.position.x = chunkedMap1[i].x - tileSize;

          break;
        }

        if (this.vy === -1) {
          this.position.y = chunkedMap1[i].y + tileSize;

          break;
        }

        if (this.vy === 1) {
          this.position.y = chunkedMap1[i].y - tileSize;

          break;
        }

        // if(this.vx === -1) this.position.y = chunkedMap1[i].x + tileSize
        // console.log(this.position.x);
        // break;
        // if(this.vx === -1) this.position.y = chunkedMap1[i].x + tileSize
        // console.log(this.position.x);
        // break;
      }
    }
  }
}
