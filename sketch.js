var movingRect,fixedRect;
function setup() {
  createCanvas(800,600);
  movingRect = createSprite(500, 200, 50, 80);
  movingRect.shapeColor ="green";
  movingRect.debug = true
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor ="green";
  fixedRect.debug = true
  Rect1 = createSprite(650, 100, 50, 80);
  Rect1.shapeColor ="green";
  Rect1.debug = true
  Rect1.velocityY =3;
  Rect2 = createSprite(650, 500,50, 80);
  Rect2.shapeColor ="green";
  Rect2.debug = true;
  Rect2.velocityY =-3;
}

function draw() {
  background("red");
  movingRect.x =mouseX;
  movingRect.y =mouseY;
  
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2 ){
    movingRect.shapeColor ="yellow";
    fixedRect.shapeColor ="yellow";
  }
  else{
    movingRect.shapeColor ="green";
    fixedRect.shapeColor ="green";
  }
  if(
    Rect1.y-Rect2.y <Rect1.height/2+Rect2.height/2 &&
    Rect2.y-Rect1.y < Rect1.height/2+Rect2.height/2 ){
Rect1.velocityY =Rect1.velocityY*-1;
Rect2.velocityY =Rect2.velocityY*-1;
    }
  drawSprites();
}