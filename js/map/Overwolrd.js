class Overworld {
  constructor(config) {
    this.element = config.element
  }

  init() {
    const img = new Image();
    img.onload = () => {
      this.c.drawImage(img, 0, 0)
    }
    img.src = "/img/map/stage1.png"

    const x = 1;
    const y = 7;
    const player = new Image();
    player.onload = () => {
      this.c.drawImage(
        player,
        0,
        0,
        player.width,
        player.height,
        x * 32,
        y * 32,
        player.width,
        player.height)
    }
    player.src = "/img/sprite/idle-down.png"

    const donut = new Image();
    donut.onload = () => {
      this.c.drawImage(donut, 0, 0)
    }
    donut.src = "/img/donutLarge.png"

    const enemy = new Image();
    enemy.onload = () => {
      this.c.drawImage(enemy, 0, 0)
    }
    enemy.src = "/img/sprite/slime1.png"

    const missile = new Image();
    missile.onload = () => {
      this.c.drawImage(missile, 0, 0)
    }
    missile.src = "/img/missile.png"
  }
}