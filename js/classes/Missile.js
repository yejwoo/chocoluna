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
      if (
        missile.position.x + 11 > missileCollisionBlocks.position.x &&
        missile.position.y + 23 > missileCollisionBlocks.position.y
      )
        missiles.splice(i, 1);
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
