var bg_1, bg_2;
var player, shooter_1, shooter_2;

function preload(){
bg_1 = loadImage("assets/bg.jpeg");
shooter_1 = loadImage("assets/shooter_2.png");
shooter_2 = loadImage("assets/shooter_3.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);

bg_2 = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg_2.addImage(bg_1);
bg_2.scale = 1.1;

player = createSprite(displayWidth-1150,displayHeight-300,50,50);
player.addImage(shooter_1);
player.scale = 0.35;

player.setCollider("rectangle",0,0,300,500);
player.debug = true;
}

function draw(){
  background("white");

  if(keyDown("UP_ARROW")|| touches.length>0){
  player.y = player.y-30;
  }

  if(keyDown("DOWN_ARROW")|| touches.length>0){
    player.y = player.y+30;
    }

  if(keyDown("RIGHT_ARROW")|| touches.width>0){
    player.x = player.x+30;
    }  
    
  if(keyDown("LEFT_ARROW")|| touches.width>0){
    player.x = player.x-30;
    }

  if(keyWentDown("space")){
    player.addImage(shooter_2);
  }

  else if(keyWentUp("space")){
    player.addImage(shooter_1);
  }

  drawSprites();
}