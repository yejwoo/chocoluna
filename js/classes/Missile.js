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
    this.timer++;
    this.vy = 1;
    
    this.position.y += this.vy;
    if(this.timer % 2 === 0) 
    this.position.y += this.vy;
  }

  draw() {
    c.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }
}
