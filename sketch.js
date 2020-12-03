
//given shortnames
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var rect1;
var engine;
var body1;
var ground;
function setup() {
  createCanvas(800,400);

     engine= Engine.create();  //created physics engine
     world=engine.world;  //created world that follows physics rules
     
     var option_body1={
       restitution:1.0
     }
     body1=Bodies.rectangle(100,200,50,50,option_body1);// created my rectangular body
     World.add(world,body1);//adding body1 to the physical world

     body2=Bodies.circle(100,150,20,option_body1);
     World.add(world,body2);

     body3=Bodies.circle(300,100,30,option_body1);
     World.add(world,body3);


     var option={
       isStatic:true
     }

     ground=Bodies.rectangle(400,380,800,20,option);
     World.add(world,ground);


 // rect1=createSprite(200, 200, 50, 50);
}

function draw() {
  Engine.update(engine);
  background(25,55,50);

  rectMode(CENTER);
  fill("pink")
  rect(body1.position.x,body1.position.y,50,50)

  rectMode(CENTER);
  fill("yellow")
  rect(ground.position.x,ground.position.y,800,20)

  ellipseMode(RADIUS)
  fill("red");
  ellipse(body2.position.x,body2.position.y,20,20)

  ellipseMode(RADIUS)
  fill(230);
  ellipse(body3.position.x,body3.position.y,30,30)
  drawSprites();
}