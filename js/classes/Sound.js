class Sound {
  constructor(url) {
    this.audio = new Audio(url);
    this.audio.loop = false;

    // 게임 오버시 게임오버 사운드 외 모든 사운드 정지
    //   for (let i = 0; i < lives.length; i++) {
    //   if (lives[2].status.empty.isEmpty) {
    //     this.pause();
    //   }
    // }
  }

  play() {
    if (soundOn && !GAME_OVER) {
      this.audio.play();
    }
  }

  pause() {
    if (GAME_OVER) this.audio.pause();
  }
}

const themeSong = new Audio("src/sound/theme_song.mp3");
const endingSong = new Audio("src/sound/ending_song.mp3");
const hitMissileSound = new Sound("src/sound/hit_missile.mp3");
const hitEnemySound = new Sound("src/sound/hit_enemy.mp3");
const plusLifeSound = new Sound("src/sound/plus.mp3");
const minusLifeSound = new Sound("src/sound/minus.mp3");
const getChocoSound = new Sound("src/sound/get_choco.mp3");
const buttonClickSound = new Sound("src/sound/button_click.mp3");
const volumeOnSound = new Sound("src/sound/sound_on.mp3");
const gameOverSound = new Sound("src/sound/game_over.mp3");
const stageClearSound = new Sound("src/sound/goal.mp3");
