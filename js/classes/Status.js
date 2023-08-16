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
    this.splitFrames.y++;
  
  }

  draw() {
    c.drawImage(
      this.img,
      0,
      16 * this.splitFrames.y,
      this.width,
      16,
      this.position.x,
      this.position.y,
      this.width,
      16
    );
  }
  
}
