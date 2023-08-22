class Status {
  constructor({ imgSrc, position, status }) {
    this.img = new Image();
    this.img.src = imgSrc;
    this.img.onload = () => {
      this.draw();
      this.width = this.img.width;
      this.height = this.img.height;
    };
    this.position = {
      x: position.x,
      y: position.y,
    };
    this.status = status;

    for (let key in this.status) {
      const img = new Image();
      img.src = this.status[key].imgSrc;
      this.status[key].img = img;   
    }
  }

  swipeEmpty() {    
    this.img = this.status["empty"].img;
  }

  swipeFilled() {    
    this.img = this.status["filled"].img;
  }

  update() {
    this.swipeFilled();
    this.status["filled"].isFilled = true;
    this.status["empty"].isEmpty = false;
  }

  draw() {
    c.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
