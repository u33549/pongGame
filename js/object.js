function degToRad(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
class Ball {
  constructor(x, y, r) {
    this.pos = {x: x, y: y};
    this.slope = degToRad(random(0, 90));
    this.v = 30; //ppf
    this.rad = r;
    this.drt = {x: (Math.random()>=0.50)?1:-1, y: (Math.random()>=0.50)?1:-1};
  }
  putBall() {
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.rad, 0, 2 * Math.PI);
    ctx.fill();
  }
  moveBall() {
    this.pos = {
      x: this.pos.x + (this.drt.x * this.v * Math.cos(this.slope)),
      y: this.pos.y + (this.drt.y * this.v * Math.sin(this.slope)),
    };
  }
  bounceBall(){
    if(this.pos.x+this.rad>=ctxP.w){
        this.drt.x=-1;
    }
    if(this.pos.x-this.rad<=0){
        this.drt.x=1;
        }
    if((this.pos.y+this.rad)>=ctxP.h){
        this.drt.y=-1;
    }
    if(this.pos.y-this.rad<=0){
        this.drt.y=1;
    }


  }
}
