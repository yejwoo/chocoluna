// canvas setting
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const tile = 32;
canvas.width = tile * 10;
canvas.height = tile * 9;

// numbers
const velocity = 1;
let timer = 0;
let score = 0;
let stageNum = 1;
let gameOver = false;
let replay = false;

// main contents


const life1 = new Status({
  imgSrc: "img/assets/life_filled.png",
  position: {
    x: 40,
    y: 262,
  },
  status: {
    filled: {
      isFilled: true,
      imgSrc: "img/assets/life_filled.png",
    },
    empty: {
      isEmpty: false,
      imgSrc: "img/assets/life_empty.png",
    },
  },
});

const life2 = new Status({
  imgSrc: "img/assets/life_filled.png",
  position: {
    x: 24,
    y: 262,
  },
  status: {
    filled: {
      isFilled: true,
      imgSrc: "img/assets/life_filled.png",
    },
    empty: {
      isEmpty: false,
      imgSrc: "img/assets/life_empty.png",
    },
  },
});

const life3 = new Status({
  imgSrc: "img/assets/life_filled.png",
  position: {
    x: 8,
    y: 262,
  },
  status: {
    filled: {
      isFilled: true,
      imgSrc: "img/assets/life_filled.png",
    },
    empty: {
      isEmpty: false,
      imgSrc: "img/assets/life_empty.png",
    },
  },
});

const donutScore= new Status({
  imgSrc: "img/assets/donut_S.png",
  position: {
    x: 262,
    y: 264,
  },
});

const overlay = {
  opacity: 0,
};

const endingImg = new Stage({
  imgSrc: "img/web/ending_screen.png",
});

lives.push(life1, life2, life3);

// Buttons and popups

const start = document.querySelectorAll(".title-screen button")[0];
const howToPLAY = document.querySelectorAll(".title-screen button")[1];
const tryAgain = document.querySelector(".game-over button");
const back = document.querySelector(".how-to-play button");
const howToScreen = document.querySelector(".how-to-play");
const titleScreen = document.querySelector(".title-screen");
const gameOverScreen = document.querySelector(".game-over");
const soundOn = document.querySelector(".audio img:first-child");
const soundOff = document.querySelector(".audio img:last-child");
