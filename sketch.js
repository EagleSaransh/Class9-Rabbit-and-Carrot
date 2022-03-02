var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var ob1,ob2,ob3,ob4;
var squr,carrot,chance;
var carrotimage,rabbitimage;
function preload() {
rabbitimage = loadImage("rabbit.png");
carrotimage = loadImage("carrot.png");
}


function setup() {
  createCanvas(400,400);
  wall1 = createSprite(190, 120, 250 , 3);
  wall2 = createSprite(190, 260 , 250,3);
  wall3 = createSprite(67, 145, 3, 50);
   wall4 = createSprite(67, 235, 3, 50);
   wall5 = createSprite(313, 145 , 3, 50);
   wall6 = createSprite(313, 235,3,50);
   wall7 = createSprite(41, 170,50,3);
   wall8 = createSprite(41, 210,50,3);
   wall9 = createSprite(337, 210,50,3);
   wall10 = createSprite(337, 170,50,3);
   wall11 = createSprite(18, 190,3,40);
   wall12 = createSprite(361, 190,3,40);
  
   squr = createSprite(40,190,10,10);
  squr.addImage("rabbitimage",rabbitimage);
  squr.scale=0.06;
   carrot=createSprite(330,190,10,10);
  carrot.addImage("carrotimage", carrotimage);
  carrot.scale=0.04;
   ob1 = createSprite(100, 130, 10 , 10);
   ob2 = createSprite(215, 130,10,10);
   ob3 = createSprite(165, 250,10,10);
   ob4 = createSprite(270, 250,10,10);
  
  
  ob1.velocityY=4;
  ob2.velocityY=4;
  ob3.velocityY=-4;
  ob4.velocityY=-4;
  
  
  
  squr.shapeColor="green";
  ob1.shapeColor="red";
  ob2.shapeColor="red";
  ob3.shapeColor="red";
  ob4.shapeColor="red";
  
  
   chance=3;
  
}

function draw() 
{
  background(30);
  background("white");
  text("chance="+chance,50,20);
  ob1.bounceOff(wall1);
  ob1.bounceOff(wall2);
  ob2.bounceOff(wall1);
  ob2.bounceOff(wall2);
  ob3.bounceOff(wall1);
  ob3.bounceOff(wall2);
  ob4.bounceOff(wall1);
  ob4.bounceOff(wall2);
  squr.collide(wall11);
  squr.collide(wall12);
  if (keyDown("LEFT")) {
    squr.x=squr.x-2;
  }
  if (keyDown("RIGHT")) {
    squr.x=squr.x+2;
  }
  if (squr.isTouching(ob1)) {
    squr.x=40;
    squr.y=190;
    chance=chance-1
  }
  if (squr.isTouching(ob2)) {
    squr.x=40;
    squr.y=190;
    chance=chance-1
  }
  if (squr.isTouching(ob3)) {
    squr.x=40;
    squr.y=190;
    chance=chance-1
  }
  if (squr.isTouching(ob4)) {
    squr.x=40;
    squr.y=190;
    chance=chance-1
  }
  
  if (squr.isTouching(carrot)) {
    textSize(40);
    fill("Blue");
    text("You Won", 100, 200);
    
    
    
  }
  //playSound();
  
  if (chance===0) {
    textSize(40);
    fill("Red");
    text("You Lost", 100, 200);
    squr.destroy();
    
  }
  
  
  
  
  
  drawSprites();
}




