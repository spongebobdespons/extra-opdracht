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
 
  if(this.x < 25 || this.x >= 475){
    this.vx = this.vx * -1;
  }

  if(this.y < 25 ||  this.y >= 375){
    this.vy = this.vy * -1;
  }
 }
}
    