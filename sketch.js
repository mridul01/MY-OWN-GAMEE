const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var omNom;
var ground;
var chain;
var candy1;
var knife;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    omNom = new OmNom(300,540);

    candy1 = new Candy(200,300);

    chain = new Chain(candy1.body,{x:300,y:20});

    knife = new Knife(200,100);
  

  Engine.run(engine);
}

function draw(){
  background("skyBlue");


omNom.display();
chain.display();
candy1.display();
knife.display();

}

function mouseReleased(){
  chain.cut();
  candy1.destroy();
}