const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

function render() {
  requestAnimationFrame(render);  
}

render();