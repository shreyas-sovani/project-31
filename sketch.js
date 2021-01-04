const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinko=[];
var particle=[];
var division=[];
var divisionHeight=300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 // ball=new Balls(350,500,20);
ground=new Ground(240,790,width,20);

for(var k=0; k<=width; k=k+80){

  division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40;j<=width;j=j+50){

plinko.push(new Plinko(j,75,10))  ;
}

for(var j=15;j<=width;j=j+50){

  plinko.push(new Plinko(j,175,10));
}

for(var j=40;j<=width;j=j+50){
  plinko.push(new Plinko(j,275,10));
}

for(var j=15;j<=width;j=j+50){
  plinko.push(new Plinko(j,375,10));
}





}

function draw() {
  background(0);  
Engine.update(engine);
rectMode(CENTER);


//ball.display();
ground.display();

for(var k=0; k<division.length; k++){
division[k].display();
}

for(var j=0;j<plinko.length;j++){

  plinko[j].display();
}


for(var j=0;j<plinko.length;j++){
plinko[j].display();

}


for(var j=0;j<plinko.length;j++){
  plinko[j].display();
}

for(var j=0;j<plinko.length;j++){
plinko[j].display();
}

if(frameCount%60===0){

  particle.push(new Particle(random(20,450),10,10));
}

for(var i=0;i<particle.length;i++){
particle[i].display();

}

  drawSprites();
}