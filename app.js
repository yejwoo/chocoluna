const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");


canvas.width = 32 * 10;
canvas.height = 32 * 9;

const level1 = new Image();
level1.src = "img/map/level1.png";

level1.onload = () => {
  c.drawImage(level1, (canvas.width - 320) / 2, 0);
};

const heart = new Image();
heart.src = "img/heart.png";

heart.onload = () => {
  c.drawImage(heart, 0, 0, 48, 16, 8, 264, 48, 16);
};

const donutSmall = new Image();
donutSmall.src = "img/donutSmall.png";

donutSmall.onload = () => {
  c.drawImage(donutSmall, 264, 264, 16, 16);
};

const donutLarge = new Image();
donutLarge.src = "img/donutLarge.png";

donutLarge.onload = () => {
  c.drawImage(donutLarge, 5*32, 5*32);
};

const slime = new Image();
slime.src = "img/slime.png";

slime.onload = () => {
  c.drawImage(slime, 0, 0, 32, 32, 2*32, 1*32, 32, 32);
};


const luna = new Image();
luna.src = "img/sprite/luna.png";

luna.onload = () => {
  c.drawImage(luna, 32, 96, 32, 32, 1*32, 7*32, 32, 32);
};

let donutScore = 0;

const myFont = new FontFace("myFont", "url(Minecraft.ttf)");

myFont.load().then((font) => {
  document.fonts.add(font);
  console.log("Font loaded");
  c.font = "16px myFont";
  c.fillStyle = "Black";
  c.fillText(`x ${donutScore}`, 284, 277);
});

