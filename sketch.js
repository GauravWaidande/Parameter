var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=-5;
  movingRect = createSprite(400,100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=5;
  rect1=createSprite(400,200,50,70);
  rect1.shapeColor="yellow";
  rect1.velocityY=-5;

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

bounceOff(movingRect,rect1);

 if(istouching(movingRect,rect1)){
  rect1.shapeColor="blue";
  movingRect.shapeColor="red";
 }else{
   rect1.shapeColor="yellow";
   movingRect.shapeColor="green";
 }

  drawSprites();

}
