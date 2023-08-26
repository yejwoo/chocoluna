// canvas setting
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const tile = 32;
canvas.width = tile * 10;
canvas.height = tile * 9;

// numbers
const velocity = 1;
let animation;
let timer = 0;
let score = 0;
let stageNum = 1;
let GAME_OVER = false;

// main contents
const life1 = new Status({
  imgSrc: "img/assets/life_filled.png",
  position: {
    x: 44,
    y: 2,
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
    x: 26,
    y: 2,
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
    y: 2,
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

lives.push(life1, life2, life3);

const chocoScore= new Status({
  imgSrc: "img/assets/choco_S.png",
  position: {
    x: 262,
    y: 2,
  },
});

const overlay = {
  opacity: 0,
};

// Screens
const titleScreen = document.querySelector(".title-screen");
const howToScreen = document.querySelector(".how-to-play");
const gameOverScreen = document.querySelector(".game-over");
const gameEndScreen = document.querySelector(".game-end");

