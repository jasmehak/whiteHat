var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,50,50);
  car.shapeColor = DarkOrchid;

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);

  speed= random(50,90);
  weight= random(400,1500);

}



function draw() {

  car.velocityX = speed;

  if(wall.x-car.x < wall.width/2 + car.width/2){
    car .velocityX = 0;
    var deformition = 0.5*weight*spedd*speed/22500

    if(deformition>180){
      car.shapeColor = red;
    }
     if (deformition<180 && deformition>100){
       car.shapeColor = yellow;
     }
    if(deformition<100 && deformition>50){
      car.shapeColor = green;
    }} 
    
  drawSprites()
}