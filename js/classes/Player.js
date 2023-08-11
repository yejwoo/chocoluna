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
    // this.collisionCheck();

    
  }

  collisionCheck() {

  }
}
