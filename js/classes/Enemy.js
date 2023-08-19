class Enemy extends Objects {
  constructor({ imgSrc, position, moveDirection }) {
    super({ imgSrc, position });
    this.vx = 0;
    this.vy = 0;
    this.moveDirection = moveDirection;
    this.img.onload = () => {
      this.draw();
      this.width = this.img.width / 4;
      this.height = this.img.height;
    };
  }

  update() {
    this.timer++;
    if (this.timer % 13 === 0) this.frame++;
    if (this.frame > 3) this.frame = 0;

    if (this.moveDirection.rotate) {
      this.moveRotation();
      this.collisionCheck();
    } else if (this.moveDirection.vertical) {
      this.moveVertical();
      this.collisionCheck();
    } else if (this.moveDirection.horizontal) {
      this.moveHorizontal();
      this.collisionCheck();
    }
  }

  moveVertical() {
    if (
      this.position.y + this.height <=
        enemyCollisionBlocks.vertical[1].y + tile &&
      this.position.y > enemyCollisionBlocks.vertical[0].y + tile
    ) {      
      this.vy = -3;
      this.position.y += this.vy;      
   }
    if (
      this.position.y >= enemyCollisionBlocks.vertical[0].y + tile &&
      this.position.y + this.height < enemyCollisionBlocks.vertical[1].y + tile
    ) {
      this.vy = 1;
      this.position.y += this.vy;
    }
  }

  moveHorizontal() {}

  moveRotation() {
    if (
      this.position.x === enemyCollisionBlocks.rotate[3].x &&
      this.position.y >= enemyCollisionBlocks.rotate[3].y + tile &&
      this.position.y + this.height < enemyCollisionBlocks.rotate[0].y
    ) {
      this.vy = 2;
      this.position.y += this.vy;
    }

    if (
      this.position.y + this.height === enemyCollisionBlocks.rotate[0].y &&
      this.position.x + this.width <= enemyCollisionBlocks.rotate[0].x + tile &&
      this.position.x > enemyCollisionBlocks.rotate[1].x
    ) {
      this.vx = -1;
      this.position.x += this.vx;
    }

    if (
      this.position.x === enemyCollisionBlocks.rotate[1].x &&
      this.position.y + this.height <= enemyCollisionBlocks.rotate[1].y &&
      this.position.y > enemyCollisionBlocks.rotate[2].y + tile
    ) {
      this.vy = -2;
      this.position.y += this.vy;
    }

    if (
      this.position.y === enemyCollisionBlocks.rotate[2].y + tile &&
      this.position.x >= enemyCollisionBlocks.rotate[2].x &&
      this.position.x + this.width < enemyCollisionBlocks.rotate[3].x + tile
    ) {
      this.vx = 1;
      this.position.x += this.vx;
    }
  }

  collisionCheck() {
    if (
      this.position.x + this.width > player.position.x + 4 &&
      this.position.x < player.position.x + player.width - 2 &&
      this.position.y + this.height > player.position.y &&
      this.position.y < player.position.y + player.height
    ) {
      player.position.x = player.enemyCollisionPosition.x;
      player.position.y = player.enemyCollisionPosition.y;
      life.update();
    }
  }
}
