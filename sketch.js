const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var ourengine,ourworld ,ground1, box1;

function setup() {
  createCanvas(400,400);
    ourengine = Engine.create();
    ourworld = ourengine.world;

    

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground1 = new Ground(200,390,400,20)

  }

function draw() {
  background(0);
  Engine.update(ourengine)
  box1.display();
  box2.display();
  ground1.display();

// ellipseMode(RADIUS);
 //ellipse(ball.position.x,ball.position.y, 20,20)
 
}