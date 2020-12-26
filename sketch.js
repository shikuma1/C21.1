var car,wall
var speed,weight


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = color(138,43,226)
  wall = createSprite(900,200,60,height/2)
  wall.shapeColor = "white"

  car.debug = false
  wall.debug = false

  console.log(car.x)


  speed = random(55,90)
  weight = random(400,1500)
}

function draw() {
  background("black");  
  car.velocityX = speed;
  wall.depth = car.depth
  car.depth = car.depth + 1

  if(wall.x-car.x < (car.width+wall.width)/2){
    var deformation = 0.5 * (weight * speed * speed)/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0)
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0)
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0)
    }
  }
  drawSprites();
}