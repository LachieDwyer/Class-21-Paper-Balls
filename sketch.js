
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObject, leftside, rightside;
var groundPos;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundObject = new Ground(width/2, 670, width, 20)
	leftside = new Ground(1100, 600, 20, 120)
	rightside = new Ground(1300,600, 20, 120)
	ball = new Paper(300, 450, 40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	groundObject.display()
	leftside.display()
	rightside.display()
	ball.display()
  drawSprites();
 
}


function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, ball.body.position, {x: 85, y:-85})


}

}



