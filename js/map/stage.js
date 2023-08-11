class Stage {
  constructor({imgSrc}) {
    this.img = new Image();
    this.img.src = imgSrc;
    this.img.onload = () => {
      this.draw();
    };
  }
  // update() -> this.img change
  draw() {
    c.drawImage(this.img, 0, 0);
  }
}
