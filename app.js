// 캔바스, 블록 및 변수 리스트
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const block = 32;
let score = 0;

canvas.width = block * 10;
canvas.height = block * 9;

// draw 클래스

class Player {
  constructor(src, cx, cy) {
    // 파라미터를 가져왔으면
    this.img = new Image();
    this.img.src = src;
    this.img.onload = () => {
      this.loaded = true;
      if (this.loaded) this.draw();
    };
    // 아래처럼 사용해야 함
    this.cx = cx;
    this.cy = cy;
    this.crop = { x: block * this.cx, y: block * this.cy };
    this.position = { x: 32, y: 224 };
  }
  update() {}
  draw() {
    if (this.loaded) {
      c.drawImage(
        this.img,
        this.crop.x,
        this.crop.y,
        block,
        block,
        this.position.x,
        this.position.y,
        block,
        block
      );
    }
  }
}

class Enemy extends Player {
  constructor(src, cx, cy) {
    super(src, cx, cy);
    this.position = { x: 64, y: 32 };
  }
}

class Donut extends Player {
  constructor(src, cx, cy) {
    super(src, cx, cy);
  }
  draw() {
    if (this.loaded) {
      c.drawImage(this.img, this.crop.x, this.crop.y, block, block);
    }
  }
}

class Stage extends Player {
  constructor(src) {
    super(src);
    this.img = new Image();
    this.img.src = src;
    this.img.onload = () => {
      this.loaded = true;
      if (this.loaded) this.draw();
    };
  }
  update() {
    // 점수에 따라 배경 업데이트
  }
  draw() {
    c.drawImage(this.img, 0, 0);
  }
}

class Life extends Player {
  constructor(src, cx, cy, cw, ch, dx, dy, dw, dh) {
    super(src, cx, cy);
    this.cw = cw;
    this.ch = ch;
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
  }
  draw() {
    if (this.loaded) {
      c.drawImage(
        this.img,
        this.crop.x,
        this.crop.y,
        this.cw,
        this.ch,
        this.dx,
        this.dy,
        this.dw,
        this.dh
      );
    }
  }
}

class Score extends Player {
  constructor(src, dx, dy) {
    super(src);
    this.dx = dx;
    this.dy = dy;
  }
  draw() {
    if (this.loaded) {
      c.drawImage(this.img, this.dx, this.dy);
    }
  }
}

class Status extends Player {
  constructor(src, cx, cy, cw, ch, dx, dy, dw, dh) {
    super(src, cx, cy);
    this.cw = cw;
    this.ch = ch;
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
  }
  draw() {
    if (this.loaded) {
      c.drawImage(
        this.img,
        this.crop.x,
        this.crop.y,
        this.cw,
        this.ch,
        this.dx,
        this.dy,
        this.dw,
        this.dh
      );
    }
  }
}

// 아래에 있는 것(배경) 먼저 선언
const stage1 = new Stage("img/map/stage1.png");
const enemy = new Enemy("img/slime.png", 0, 0);
const player = new Player("img/sprite/luna.png", 1, 3);
const donut = new Donut("img/donutLarge.png", 5, 5);
const life = new Life("img/heart.png", 0, 0, 48, 16, 8, 264, 48, 16);
const donutScore = new Score("img/donutSmall.png", 264, 264);

//폰트
const myFont = new FontFace("myFont", "url(Minecraft.ttf)");

myFont.load().then((font) => {
  document.fonts.add(font);
  c.font = "16px myFont";
  c.fillStyle = "Black";
  c.fillText(`x ${score}`, 284, 277);
});
