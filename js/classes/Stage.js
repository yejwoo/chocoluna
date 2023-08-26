class Stage {
  constructor({ imgSrc }) {
    this.img = new Image();
    this.img.src = imgSrc;
    this.img.onload = () => {
      this.draw();
    };
  }

  draw() {
    c.drawImage(this.img, 0, tile);
  }
}
