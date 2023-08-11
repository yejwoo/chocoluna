Array.prototype.chunk = function () {
  const newArr = [];
  
  for (let i = 0; i < this.length; i += 10) {
    newArr.push(this.slice(i, i + 10));
  }
  return newArr;
};




