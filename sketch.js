var martin;
var edges
var bg1
var bgImage1
var bgImage2
var stone1
var stone2
var ship
var shipImg

var level = "second";
function preload() {
  bgImage1=loadImage("assets/chasejetimage.jpg")
  shipImg=loadImage("assets/jet.png")
  bgImage2=loadImage("assets/secondlevelimg.jpg")
  
}


function setup() {
  createCanvas(1200, 800);
 //create level1 image
//  bg1=createSprite(600,400,1200,800)
//  bg1.addImage("bg1",bgImage1);
//  bg1.scale= 2.9;
 //create martin 
 martin=createSprite(100,displayHeight-300,20,20);
 //Create egdes
 edges=createEdgeSprites()
 //create stone
 stone1=createSprite(160,580,290,30)
 //stone1.visible=false
 stone2=createSprite(979,622,800,30)
 stone2.visible=false
 //
ship=createSprite(1100,540,50,40);
 ship.addImage("jet",shipImg)
 ship.scale=0.1
}

function draw() {
  background("#1A0B74");
  textSize(25)
  fill("white")
  text ("x:"+mouseX+", y:"+mouseY,10,20  )

if(level === "first"){
image(bgImage1,-140,0,1480,800)
 if(keyDown("LEFT_ARROW")){
  martin.x-= 5
}
if(keyDown("RIGHT_ARROW")){
  martin.x+= 5
}
if(keyDown("UP_ARROW")){
  martin.velocityY= -14;
}
martin.velocityY=martin.velocityY+0.5;
if(keyDown("d")){
  martin.x+= 10
}
if(keyDown("a")){
  martin.x-= 10
}

martin.collide(edges)
martin.collide(stone1)
martin.collide(stone2)
}else if(level ==="second"){
  image(bgImage2,-140,0,1480,800) 
  martin.destroy()
  stone1.destroy()
  stone2.destroy()
  ship.x=mouseX
  
}

  

  

  
  drawSprites();
}
