var bg,bgImg
var ufo,blackUfoImg,redUfoImg,orangeUfoImg
var ss,ssImg
var score=0
var gameState="play"
var ufoGroup,laserGroup,laser
function preload(){
 bgImg=loadImage("Images/bg1.jpg")
 blackUfoImg= loadImage("Images/Black_UFO.png")
 redUfoImg= loadImage("Images/Red_UFO.png")
 orangeUfoImg= loadImage("Images/Orange_UFO.png")
 ssImg= loadImage("Images/ss.png")
}

function setup() {
  createCanvas(1200,600)
  bg=createSprite(0,0,1200,600)
  bg.addImage(bgImg)
  ss=createSprite(100,300)
  ss.addImage(ssImg)
  ss.scale=1/5
 
ufoGroup=new Group()
laserGroup=new Group()
 }

function draw() {
 
  background(0);
  
  drawSprites();
  fill("white")
  textSize(30)
  text("Score: "+score,120,50)

  if(gameState==="play"){
    if(keyDown("up")){
    ss.y-=5
    }

    if(keyDown("down")){
      ss.y+=5
    }
    if(keyDown("space")){
      releaselaser()
    }
   spawnUfo()

    laserGroup.isTouching(ufoGroup,destroyufo)









         


  }


}

function spawnUfo(){
  if(frameCount%150===0){
    var rand= Math.round(random(10,500))
    ufo=createSprite(1200,rand,10,10)
    ufo.velocityX=-4
    var randImg=Math.round(random(1,3))
    switch(randImg){
    case 1:
      ufo.addImage(blackUfoImg)
      ufo.scale=0.2
      break
      case 2:
        ufo.addImage(orangeUfoImg)
        ufo.scale=0.3
        break
        case 3:
          ufo.addImage(redUfoImg)
          ufo.scale=0.2
          break



    }
    ufo.lifetime=372
    ufoGroup.add(ufo)
  }
}
function releaselaser(){

   laser=createSprite(200,ss.y,60,5)
  laser.shapeColor= "lime"
  laser.velocityX=5
  laser.lifetime=240
  laserGroup.add(laser)

}
function destroyufo(){
  ufo.destroy()
  laser.lifetime=0
  score=-score+1
}