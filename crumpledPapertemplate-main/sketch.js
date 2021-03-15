
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	var options = {
		density: 1.2
	}
	paper = Bodies.circle(100,100,25,options)
	World.add(world,paper);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
ellipseMode(RADIUS)
  ellipse(paper.position.x, paper.position.y,25)

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper, paper.position, {x:150,y:-150})
	}
}