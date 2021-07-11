const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,ground1;
var SuperH, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21;
var slingShot;
var monster;
var backgroundImg;


function Preload(){
  backgroundImg=loadImage("images/GamingBackground.png");
}



function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(188,550,1600,20);
    ground1 = new Ground(985,400,140,20);
  
      SuperH = new Attacker(200,220,20,20);
  
      monster= new Monster(965,300,175,175);
    
  
      block1 = new Tower(700,510,125,125);
      block2 = new Tower(700,455,125,125);
      block3 = new Tower(700,400,125,125);
      block4 = new Tower(700,340,125,125);
      block5 = new Tower(800,510,125,125);
      block6 = new Tower(800,455,125,125);
      block7 = new Tower(800,400,125,125);
      block8 = new Tower(800,340,125,125);
      
    slingShot=new SlingShot(SuperH.body,{x:150,y:300});

   

}

function draw(){
  
  background("cyan");

    Engine.update(engine);

    
  ground.display();
  //ground1.display();

  monster.display();
  
 SuperH.display();
 block1.display();  
 block2.display();  
 block3.display(); 
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 

    slingShot.display();

   
}
function mouseDragged(){
Matter.Body.setPosition(SuperH.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 slingShot.fly();   
}

function keyPressed(){
if(keyCode===32){
slingShot.attach(SuperH.body);
}}

