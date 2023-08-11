class chunkMap {
  constructor(map) {
    this.map = map.chunk();
    this.tiles = this.tiles();
  }
  tiles() {
    const tileArr = [];
    this.map.forEach((col, colIdx) => {
      col.forEach((row, rowIdx) => {
        if (row === 10) {
          const tile = {x: tileSize * rowIdx, y: tileSize * colIdx}
          tileArr.push(tile);
        }
      });      
    });
    return tileArr
  }
  draw() {
    this.map.forEach((col, colIdx) => {
      col.forEach((row, rowIdx) => {
        if (row === 10) {
          c.fillStyle = "rgba(255, 0, 0, 0.5)";
          c.fillRect(tileSize * rowIdx, tileSize * colIdx, tileSize, tileSize);
        }
      });
    });
  }
}