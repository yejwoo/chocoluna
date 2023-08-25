class Objects {
  constructor({ imgSrc, position, id, getItem, getItemStartTime }) {
    this.img = new Image();
    this.img.src = imgSrc;
    this.img.onload = () => {
      this.draw();
      this.width = this.img.width;
      this.height = this.img.height;
    };

    this.position = {
      x: tile * position.x,
      y: tile * position.y,
    };
    this.frame = 0;
    this.timer = 0;
    this.id = id;
    this.getItem = getItem;
    this.getItemStartTime = getItemStartTime;
  }

  update() {    
    this.timer++;
    if (this.timer % 13 === 0) this.frame++;
    if (this.frame > 3) this.frame = 0;

    if (choco.getItem) {
      const currentTime = performance.now();
      const passedTime = currentTime - choco.getItemStartTime;
      
      if (passedTime > 1000) {
        choco.getItem = false;
      }
    }


  }

  draw() {
    c.drawImage(
      this.img,
      tile * this.frame,
      0,
      tile,
      tile,
      this.position.x,
      this.position.y,
      tile,
      tile
    );
  }
}
