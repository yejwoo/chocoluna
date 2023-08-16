class Missile extends Objects {
  constructor({ imgSrc, position }) {
    super({ imgSrc, position });
    this.position = {
      x: position.x,
      y: position.y,
    };
    this.vy = 0;
  }
  update() {
    this.vy = 1;
    this.position.y += this.vy;
    this.blockCollisionCheck();
  }

  blockCollisionCheck() {
    missiles.forEach((missile, i) => {
      missileCollisionBlocks1.forEach((missileCollisionBlock) => {
        if (
          missile.position.x > missileCollisionBlock.x &&
          missile.position.y + 16 > missileCollisionBlock.y
        )
          missiles.splice(i, 1);
      });
    });
  }

  draw() {
    c.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
