var path,pathImg
var boy, boy_running,running1,running2
var boundry1, boundry2
function preload(){
  boy_running=loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.PNG","Jake5.png")
  running1=loadImage("Runner-1.png")
  running2=loadImage("Runner-2.png")
  pathImg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4
  path.scale=1.2

  boy=createSprite(200,200,20,20)
  boy.addAnimation("running", boy_running)
  boundry1=createSprite(0,0,100,800)
  boundry2=createSprite(410,0,100,800)
  boundry1.visible=false
  boundry2.visible=false
}

function draw() {
  background(0);
  if(path.y>400){
    path.y=height/2
  }
  boy.x=World.mouseX
  boy.collide(boundry1)
  boy.collide(boundry2)
drawSprites()
}
