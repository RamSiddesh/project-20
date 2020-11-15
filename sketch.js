
var car,wall; 
var speed,weight;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
   wall = createSprite(700,200,60,height/2);
   speed = random(50,90);
  weight = random(400,1500);
}

function draw() {
  background("lightblue");  
  
  
  car.velocityX = speed;
if(wall.x-car.x<(wall.width+car.width)/2)
{
  car.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
if(deformation>180)
{
  car.shapeColor = color(225,0,0);
}
if(deformation<180 && deformation > 100)
{
  car.shapeColor = color(230,230,0);
}
if(deformation<100)
{
  car.shapeColor = color(0,225,0);
}
}

  drawSprites();
}