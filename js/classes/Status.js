class Status extends Objects {
  constructor({ imgSrc, position, splitFrames }) {
    super({imgSrc, position})
    this.splitFrames = splitFrames;
    this.position = {
      x: position.x,
      y: position.y,
    };
  }

  update() {
    // 충돌하면 하트 이미지 교체
  }

  draw() {
    c.drawImage(
      this.img,
      0,
      tileSize/2 * this.splitFrames.y,
      this.width,
      tileSize/2,
      this.position.x,
      this.position.y,
      this.width,
      tileSize/2
    );
  }
  
}
