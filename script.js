class Ball {
constructor(x, y, h, w, vx, vy){
  this.x = x;
  this.y = y;
  this.height = h;
  this.width = w;
  this.vx = vx;
  this.vy = vy;
 }

 draw(){
  ellipse(this.x,this.y,60,60);
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
 var ball1, ball2, ball3;

 function setup() {
	createCanvas(500, 400);

ball1 = new Ball(250,300,10,25,10,5);
ball2 = new Ball(80,50,40,20,6,10);
ball3 = new Ball(200,150,100,50,3,-4);
}
function draw() {
	background('gold');  
  fill('red');
  ball1.draw();
  fill('blue');
  ball2.draw();
  fill('green');
  ball3.draw();
}

    