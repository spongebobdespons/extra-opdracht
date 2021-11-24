class Ball {
  constructor() {x, y, h, w, vx, vy }
  this.x = x;
  this.y = y;
  this.height = h;
  this.width = w;
  this.vx = vx;
  this.vy = vy;
 
}

function draw() {
	background(225);

  ellipse(x,y,50,50)
  fill('red')
  
  circle(x2,y2,25);
  
  x = x + vx;
 // y = y + vy;
  
  if(x < 0 || x > 500){
    vx = vx * -1;
  }

  if(y < 0 || y > 400){
    vy = vy * -1;
  }
  x2 = x2 + vx2;
  y2 = y2 + vy2;
  
  if(x2 < 0 || x2 > 500){
    vx2 = vx2 * -1;
  }

  if(y2 < 0 || y2 > 400){
    vy2 = vy2 * -1;
  }
}
