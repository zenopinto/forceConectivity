var car,wall,car2,car3,border,bor,bor2;
var speed,weight,wal,all,thickness;

function setup() {
  
 speed=random(80,321) 
 weight=random(30,52)
 thickness=random(22,83)
 car = createSprite(50,190,50,50);
 car.velocityX=speed


 
 
 all=createSprite(320,190,10,60)
}

function draw() {
  background(255,255,255);
  
  if(hasCollided(car,all)){
    car.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10){
      car.shapeColor="red"
    }
    if(damage<10){
      car.shapeColor="green"
    }
  }
  drawSprites();
}
function hasCollided(car,all){
  carRightEdge=car.x +car.width;
  allLeftEdge= all.x;
  if(carRightEdge>=allLeftEdge){
   
    return true
  }
  return false
}