var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");

ctx.canvas.width =  1920;
ctx.canvas.height = 1080;
let ctxP = {w: ctx.canvas.width, h: ctx.canvas.height};

ctx.strokeStyle = "#fff";
ctx.fillStyle = "#f00";

const Apo_B = new Ball(ctxP.w / 2, ctxP.h / 2, ctxP.w/40 );
function createGrid(x, y, w = 1) {
  ctx.lineWidth = w;
  let q = parseInt(ctxP.w / x);
  for (var i = 0; i < q; i++) {
    ctx.moveTo(i * q, 0);
    ctx.lineTo(i * q, ctxP.h);
    ctx.stroke();
  }
  q = parseInt(ctxP.h / y);
  for (var i = 0; i < q; i++) {
    ctx.moveTo(0, i * q);
    ctx.lineTo(ctxP.w, i * q);
    ctx.stroke();
  }
}

function clearRect() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // createGrid(3, 3, 1);
  Apo_B.putBall();
  Apo_B.bounceBall();
  Apo_B.moveBall();

}
clearRect();
