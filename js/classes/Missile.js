class Missile extends Objects {
  constructor({ imgSrc, position, direction }) {
    super({ imgSrc, position });
    this.position = {
      x: position.x,
      y: position.y,
    };
    this.vx = 0;
    this.vy = 0;
    this.direction = direction;
  }

  update() {
    if (this.direction === "vertical") {
      this.vy = 1;
      this.position.y += this.vy;
    } else if (this.direction === "horizontal") {
      this.vx = 1;
      this.position.x += this.vx;
    }
    this.blockCollisionCheck();
  }

  blockCollisionCheck() {
    missiles.forEach((missile, i) => {
      if (
        (this.direction === "vertical" &&
          missile.position.y + 9 > missileCollisionBlocks.position.y + tile) ||
        (this.direction === "vertical" &&
          missile.position.y + missile.height - 9 > missileCollisionBlocks.position.y)
      )
        missiles.splice(i, 1);
      else if (
        (this.direction === "horizontal" &&
          missile.position.x + missile.width - 9 > missileCollisionBlocks.position.x) ||
        (this.direction === "horizontal" &&
          missile.position.x + 9 > missileCollisionBlocks.position.x + tile)
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
