const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var B1,B2;
var tri,tri1;

function setup(){
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

  
  

    B1 = new Block(200,300,200,200);
    B2 = new Ground(330,250,60,270);
    B3 = new Ground(70,250,60,270);

    BG1 = new Ground(70,100,100,35);
    BG2 = new Ground(330,100,100,35);
    BG3 = new Ground(130,180,50,22.5);
    BG4 = new Ground(200,180,50,22.5);
    BG5 = new Ground(270,180,50,22.5);
  
    BG = new Ground(200,390,400,20);

  
    
}

function draw(){
    background("lavender");
    Engine.update(engine);
    fill("crimson");
    strokeWeight(2.5);
    tri = triangle(20,85,70,20,120,85);
    tri1 = triangle(280,85,330,20,380,85);
    BG3.shapeColor="crimson";
    BG3.display();
    
    BG4.shapeColor="crimson";
    BG4.display();
    BG5.shapeColor="crimson";
    BG5.display();
    B1.display();
   B2.display();
  B3.display();
  BG1.display();
  BG2.display();

   BG.display();
   rectMode(CENTER);
   fill(175, 96, 26);
   strokeWeight(2.5); 
rect(200,317,100,125); 
   
   
}


