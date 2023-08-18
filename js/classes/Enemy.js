class Enemy extends Objects {
  constructor({ imgSrc, position, isMove }) {
    super({ imgSrc, position });
    this.vx = 0;
    this.vy = 0;
    this.isMove = isMove;
  }

  update() {
    this.timer++;

    if (this.timer % 13 === 0) this.frame++;
    if (this.frame > 3) this.frame = 0;

    if (this.isMove) {
      this.moveRotation();
    }
  }

  moveVertical() {}

  moveHorizontal() {}

  moveRotation() {
    if (
      this.position.x === enemyCollisionBlocks[3].x &&
      this.position.y >= enemyCollisionBlocks[3].y + tile &&
      this.position.y + this.height < enemyCollisionBlocks[0].y
    ) {
      this.vy = 1;
      this.position.y += this.vy;
    }

    if (
      this.position.y + this.height === enemyCollisionBlocks[0].y &&
      this.position.x + this.width / 4 <= enemyCollisionBlocks[0].x + tile &&
      this.position.x > enemyCollisionBlocks[1].x
    ) {
      this.vx = -1;
      this.position.x += this.vx;
    }

    if (
      this.position.x === enemyCollisionBlocks[1].x &&
      this.position.y + this.height <= enemyCollisionBlocks[1].y &&
      this.position.y > enemyCollisionBlocks[2].y + tile
    ) {
      this.vy = -1;
      this.position.y += this.vy;
    }

    if (
      this.position.y === enemyCollisionBlocks[2].y + tile &&
      this.position.x >= enemyCollisionBlocks[2].x &&
      this.position.x + this.width / 4 < enemyCollisionBlocks[3].x + tile
    ) {
      this.vx = 1;
      this.position.x += this.vx;
    }
  }

  collisionCheck() {
    if (
      this.position.x + this.width / 4 > player.position.x + 4 &&
      this.position.x < player.position.x + player.width / 4 - 2 &&
      this.position.y + this.height > player.position.y &&
      this.position.y < player.position.y + player.height
    ) {
      life.update();
    }
  }
}