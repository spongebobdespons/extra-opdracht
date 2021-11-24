class Ball {
  constructor() {x, y, h, w, vx, vy }
  this.x = x;
  this.y = y;
  this.height = h;
  this.width = w;
  this.vx = vx;
  this.vy = vy;
 
}

 draw(){
  ellipse(this.x,this.y,50,50);
  this.x = this.x + this.vx;
  this.y = this.y + this.vy;
