var issImg,bgImg,sp1Img;
var iss,spacecraft,hasDocked;
var sp2Img,sp3Img,sp4Img;








function preload(){
issImg=loadImage("images/iss.png");
bgImg=loadImage("images/spacebg.jpg");
sp1Img=loadImage("images/spacecraft1.png");
sp2Img=loadImage("images/spacecraft2.png");
sp3Img=loadImage("images/spacecraft3.png");
sp4Img=loadImage("images/spacecraft4.png");
}





function setup() {
  createCanvas(800,400);
  iss=createSprite(250, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale=1;
  spacecraft=createSprite(round(random(100,700)), 325, 50, 50);
  spacecraft.addImage(sp1Img);
  spacecraft.scale=0.25;
  //spacecraft.velocityX=0;
}

function draw() {
  background(bgImg);  


if(!hasDocked){
  //Write code to set random x position for spacecraft
  ///spacecraft.x=round(random(100,700));
  if(keyDown("LEFT_ARROW")){
    //spacecraft=createSprite(random(100,700), 300, 50, 50);
spacecraft.addImage(sp3Img);
spacecraft.x=spacecraft.x-1;
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(sp4Img);
    spacecraft.x=spacecraft.x+1;
      }
      if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(sp2Img);
          }
          if(keyDown("UP_ARROW")){
            spacecraft.addImage(sp1Img);
            spacecraft.y=spacecraft.y-1;
              }
}

if(spacecraft.x===180&&spacecraft.y===321){
  hasDocked=true;
  stroke("black");
  fill("white")
  textSize(30);
  text("Docking Successful!",500,200);
}
console.log(spacecraft.x);
console.log(spacecraft.y);

  drawSprites();
}