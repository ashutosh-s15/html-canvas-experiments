const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';

hue = 0;
let number = 0;
let scale = 10;

function drawFlower() {
  let angle = number * 8;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;;

  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'hsl(' + hue + ', 100%, 50%)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(positionX, positionY, 8, 0, Math.PI * 2);
  ctx.closePath();
  // ctx.fill();
  ctx.stroke();

  number++;
  hue += 0.2;
}

function animate() {
  // draw each frame
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFlower();
  if (number > 3000) return;
  requestAnimationFrame(animate);
}

animate();
