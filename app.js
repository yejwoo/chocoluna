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

const donut = new Image();
donut.src = "img/donut.png";

donut.onload = () => {
  c.drawImage(donut, 264, 264, 16, 16);
};

let donutScore = 0;


var myFont = new FontFace('myFont', 'url(Minecraft.ttf)');

myFont.load().then(function(font){

  c.font = "16px KulminoituvaRegular";
  c.fillStyle = "Black";
  c.fillText(`x ${donutScore}`, 284, 276);

});