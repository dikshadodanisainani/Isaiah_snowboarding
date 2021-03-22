var player,playerImg,bg,bgImg;
var score=0;
function preload()
{
bgImg=loadImage("images/snow pic1.jpg");
playerImg=loadImage("images/character1-removebg-preview.png");
}


function setup() {
  createCanvas(1400,700);
  bg=createSprite(650,300);
  bg.addImage("background",bgImg);
  bg.scale=1.7;
  bg.x=bg.width/2;
  bg.velocityX=1;
  player=createSprite(400, 500, 50, 50);
  player.addImage("player",playerImg);
  player.scale=0.5;
  
}

function draw() {
  background("white");
  score=score+1;
 
  console.log(score);

  if (bg.x>890){
    bg.x=bg.width/2;

  }
  drawSprites();
  textSize(30);
  fill("red");
  text("Score : "+score,1000,50);
}