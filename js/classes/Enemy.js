class Enemy extends Objects {
  constructor({ imgSrc, position, moveDirection, id }) {
    super({ imgSrc, position });
    this.vx = 1;
    this.vy = 1;
    this.moveDirection = moveDirection;
    this.id = id;
    this.img.onload = () => {
      this.draw();
      this.width = this.img.width / 6;
      this.height = this.img.height;
    };

    for (let key in player.enemyCollisionPosition) {
      if(this.id === key) this.collisionCheck();
    }
  }

  update() {
    this.timer++;    
    this.collisionCheck();

    if (this.timer % 10 === 0) this.frame++;
    if (this.frame > 5) this.frame = 0;
    if (this.moveDirection.rotate) {
      this.moveRotation();
    } else if (this.moveDirection.vertical) {
      this.moveVertical();
    } else if (this.moveDirection.horizontal) {
      this.moveHorizontal();
    }
  }

  moveVertical() {
    this.position.y += this.vy;

    if (this.position.y + this.height > enemyCollisionBlocks.vertical[1].y) {
      this.vy = -1;
    } else if (this.position.y < enemyCollisionBlocks.vertical[0].y + tile) {
      this.vy = 2;
    }
  }

  moveHorizontal() {
    this.position.x += this.vx;

    if (this.position.x + this.height > enemyCollisionBlocks.horizontal[1].x) {
      this.vx = -1;
    } else if (this.position.x < enemyCollisionBlocks.horizontal[0].x + tile) {
      this.vx = 1;
    }


  }

  moveRotation() {
    
    if (
      this.position.x === enemyCollisionBlocks.rotate[3].x &&
      this.position.y >= enemyCollisionBlocks.rotate[3].y + tile &&
      this.position.y + this.height < enemyCollisionBlocks.rotate[0].y
    ) {
      this.vy = 1;
      this.position.y += this.vy;
    } else if (
      this.position.y + this.height === enemyCollisionBlocks.rotate[0].y &&
      this.position.x + this.width <= enemyCollisionBlocks.rotate[0].x + tile &&
      this.position.x > enemyCollisionBlocks.rotate[1].x
    ) {
      this.vx = -1;
      this.position.x += this.vx;
    } else if (
      this.position.x === enemyCollisionBlocks.rotate[1].x &&
      this.position.y + this.height <= enemyCollisionBlocks.rotate[1].y &&
      this.position.y > enemyCollisionBlocks.rotate[2].y + tile
    ) {
      this.vy = -1;
      this.position.y += this.vy;
    } else if (
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
      this.position.x + this.width - 6 > player.position.x + 4 &&
      this.position.x + 6 < player.position.x + player.width - 4 &&
      this.position.y + this.height - 3 > player.position.y &&
      this.position.y + 3 < player.position.y + player.height
    ) {
      player.position.x = player.enemyCollisionPosition[this.id].x
      player.position.y = player.enemyCollisionPosition[this.id].y

      for (let i = 0; i < lives.length; i++) {
        if (lives[i].status.empty.isEmpty) continue;
        if (lives[i].status.filled.isFilled) {
          lives[i].swipeEmpty();
          lives[i].status.empty.isEmpty = true;
          lives[i].status.filled.isFilled = false;
        }
        break;
      }
      if (lives[2].status.empty.isEmpty) {
        gameOver()
      }
    }
  }
}
