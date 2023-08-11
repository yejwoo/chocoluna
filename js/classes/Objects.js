class Objects {
  constructor({ imgSrc, position }) {
    this.img = new Image();
    this.img.src = imgSrc;
    this.img.onload = () => {
      this.draw();
      this.width = this.img.width;
      this.height = this.img.height;
    };

    this.position = {
      x: tileSize * position.x,
      y: tileSize * position.y,
    };

    this.frame = 0;
    this.timer = 0;
  }

  update() {
    this.timer++;

    if (this.timer % 13 === 0) this.frame++;
    if (this.frame > 3) this.frame = 0;
  }

  draw() {
    c.drawImage(
      this.img,
      tileSize * this.frame,
      0,
      tileSize,
      tileSize,
      this.position.x,
      this.position.y,
      tileSize,
      tileSize
    );
  }
}
