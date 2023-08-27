class Sound {
  constructor(url) {
    this.audio = new Audio(url);
    this.audio.loop = false;
  }

  play() {
    if (soundOn && !GAME_OVER) {
      this.audio.play();
    }
  }

  pause() {
    this.audio.pause();
    
    // if (GAME_OVER) this.currentTime = 0;
  }
}

const themeSong = new Audio("src/sound/theme_song.mp3");
const hitMissileSound = new Sound("src/sound/hit_missile.mp3");
const hitEnemySound = new Sound("src/sound/hit_enemy.mp3");
const plusLifeSound = new Sound("src/sound/plus.mp3");
const minusLifeSound = new Sound("src/sound/minus.mp3");
const getChocoSound = new Sound("src/sound/get_choco.mp3");
const buttonClickSound = new Sound("src/sound/button_click.mp3");
const volumeOnSound = new Sound("src/sound/sound_on.mp3");
const gameOverSound = new Sound("src/sound/game_over.mp3");
const stageClearSound = new Sound("src/sound/goal.mp3");
const endingSound = new Audio("src/sound/ending.mp3");
