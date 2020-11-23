const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var ourengine,ourworld,ball;
var ground;



function setup() {
  createCanvas(400,400);
 ourengine=Engine.create();
 ourworld=ourengine.world;
 
 var options={
	 isStatic:true
 }
 
 ground=Bodies.rectangle(200,390,400,20,options)
World.add (ourworld,ground);
 
 var options={
	 restitution:1
 }
 
 ball=Bodies.circle(200,100,20,options);
 World.add(ourworld,ball); 
 console.log(ball);
 
}

function draw() {
  background(0); 
  Engine.update(ourengine);
 rectMode  (CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  
}