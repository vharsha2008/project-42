const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var boy,boy_running;

var drops = [];

var maxDrops=2;

function preload(){

boy_running = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");


}

function setup(){
    var canvas = createCanvas(380,600);
    engine = Engine.create();
    world = engine.world;


    
    boy = createSprite(200,520,20,50);
    boy.addAnimation("running", boy_running);
    boy.scale = 0.2;
    


}  


function draw(){
    Engine.update(engine);

    background(0);

  for(var i=0; i<maxDrops; i++){
    drops.push(new Drop(random(0,400),random(0,400)));
  }
  for (var i = 0; i <drops.length; i++){
    drops[i].display();
 }














  drawSprites();










}   

