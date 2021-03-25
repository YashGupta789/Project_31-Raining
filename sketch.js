const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var maxDrops=120;
var menImage,men;
var umbrella,ground;
var cloud1,cloud2,cloud3;
var thunderbolt,thunderbolt1,thunderbolt2,thunderbolt3,thunderbolt4;


function preload(){
    menImage=loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png");
    thunderbolt1=loadImage("1.png");
    thunderbolt2=loadImage("2.png");
    thunderbolt3=loadImage("3.png");
    thunderbolt4=loadImage("4.png");
    cloud1=loadImage("cloud1.png");
    cloud2=loadImage("cloud2.png");
    cloud3=loadImage("cloud3.png");
} 

function setup(){
   createCanvas(600,700);
   engine = Engine.create();
   world = engine.world;

   ground = createSprite(300,690,600,50);
 
   umbrella = new Umbrella(220,380);

   men = createSprite(220,510,25,50);
   men.addAnimation("moving",menImage);
   men.scale=0.5;
   World.add(world,men);

   for(var i=0; i<maxDrops; i++){
    drops.push(new CreateDrops(random(0,600),random(0,600)));
  }

}

function draw(){
   background(0); 
   Engine.update(engine);

   imageMode(CENTER);
   image(cloud2,140,80,180,100);
   image(cloud3,450,80,200,100);
   image(cloud1,300,80,200,100);

   umbrella.display();

   var rand = Math.round(random(1,4))
   if(frameCount%80===0){
      thunderbolt=createSprite(random(10,570),random(10,30),10,10);
      switch(rand){
          case 1: thunderbolt.addImage(thunderbolt1);
          break;
          case 2: thunderbolt.addImage(thunderbolt2);
          break;
          case 3: thunderbolt.addImage(thunderbolt3);
          break;
          case 4: thunderbolt.addImage(thunderbolt4);
          break;
          default: break;
      }
      thunderbolt.scale = random(0.3,0.6);
      thunderbolt.lifetime=20;
   }

   for(var i = 0; i < maxDrops; i++){
    drops[i].display();
    drops[i].update();
    }

   drawSprites();
}   

