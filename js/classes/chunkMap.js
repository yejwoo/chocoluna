class chunkMap {
  constructor(map) {
    this.map = map.chunk();
    this.tiles = this.tiles();
    this.goal = this.goal();
    this.missileCollisionArr = this.collisionCheck();
  }
  tiles() {
    const tileArr = [];
    this.map.forEach((col, colIdx) => {
      col.forEach((row, rowIdx) => {
        if (row === 10) {
          const tile = { x: tileSize * rowIdx, y: tileSize * colIdx };
          tileArr.push(tile);
        }
      });
    });
    return tileArr;
  }

  goal() {
    let goal;
    this.map.forEach((col, colIdx) => {
      col.forEach((row, rowIdx) => {
        if (row === 11) {
          goal = {x: tileSize * rowIdx, y: tileSize * colIdx}
        }
      });
    });
    return goal;
  }

  collisionCheck() {
    const missileCollisionArr = [];
    this.map.forEach((col, colIdx) => {
      col.forEach((row, rowIdx) => {
        if (row === 12) {
          const missileCollisionBlock = { x: tileSize * rowIdx, y: tileSize * colIdx };
          missileCollisionArr.push(missileCollisionBlock);
        }
      });
    });
    return missileCollisionArr;
  }


}
