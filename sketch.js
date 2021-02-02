
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  score=0
  survivalTime=0
   createCanvas(600,350);
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
  
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
 FoodGroup=createGroup()
 obstacleGroup=createGroup()
}


function draw() {
  background('pink')
  
   if(keyDown("space")&&monkey.y>=300) {
        monkey.velocityY = -10;
        
    }
  
  
   monkey.velocityY=monkey.velocityY+0.3
  
  monkey.collide(ground)
   
   ground.x=ground.width/2
  
  if(World.frameCount%190===0){
    Food()
 }
  
if(World.frameCount%300===0){
  obstacles()
}
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach()
    score=score+1
  }
drawSprites()
   fill("white") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  var survivalTime=Math.round(getFrameRate()/1);
  text("Survival Time: "+ survivalTime,350,50)
  
  
}

function Food(){
  banana=createSprite(600,Math.round(random(170,230)),10,10)
   banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
  FoodGroup.add(banana)
  banana.lifetime=200
   }

function obstacles(){
  obstacle=createSprite(600,330,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
 obstacle.lifetime=150
  obstacleGroup.add(obstacle)
}


