class Enemy extends Objects {
  constructor({ imgSrc, position, moveDirection }) {
    super({ imgSrc, position });
    this.vx = 0;
    this.vy = 0;
    this.moveDirection = moveDirection;
    // width 수정
  }

  update() {
    this.timer++;

    if (this.timer % 13 === 0) this.frame++;
    if (this.frame > 3) this.frame = 0;

    if (this.moveDirection) {
      this.moveRotation();
      this.moveVertical();
      this.moveHorizontal();
      this.collisionCheck();
    }
    
  }

  moveVertical() {
    if (
      this.position.y >= enemyCollisionBlocks.rotate[0].y &&
      this.position.y + this.height < enemyCollisionBlocks.rotate[1].y
    ) {
      this.vy = velocity;
      this.position.y += this.vy;
    }
    if (
      this.position.y + this.height <= enemyCollisionBlocks.rotate[1].y &&
      this.position.y > enemyCollisionBlocks.rotate[0].y
    ) {
      this.vy = -velocity;
      this.position.y += this.vy;
    }
  }

  moveHorizontal() {}

  moveRotation() {    
    if (
      this.position.x === enemyCollisionBlocks.rotate[3].x &&
      this.position.y >= enemyCollisionBlocks.rotate[0].y + tile &&
      this.position.y + this.height < enemyCollisionBlocks.rotate[0].y
    ) {
      this.vy = velocity;
      this.position.y += this.vy;
    }

    if (
      this.position.y + this.height === enemyCollisionBlocks.rotate[0].y &&
      this.position.x + this.width / 4 <=
        enemyCollisionBlocks.rotate[0].x + tile &&
      this.position.x > enemyCollisionBlocks.rotate[1].x
    ) {
      this.vx = -velocity;
      this.position.x += this.vx;
    }

    if (
      this.position.x === enemyCollisionBlocks.rotate[1].x &&
      this.position.y + this.height <= enemyCollisionBlocks.rotate[1].y &&
      this.position.y > enemyCollisionBlocks.rotate[2].y + tile
    ) {
      this.vy = -velocity;
      this.position.y += this.vy;
    }

    if (
      this.position.y === enemyCollisionBlocks.rotate[2].y + tile &&
      this.position.x >= enemyCollisionBlocks.rotate[2].x &&
      this.position.x + this.width / 4 < enemyCollisionBlocks.rotate[3].x + tile
    ) {
      this.vx = velocity;
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
