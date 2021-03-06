const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ball,box;
var stand1,stand2;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.jpg");
}
function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(900,600);
  ground=new Ground();
  stand1=new Stand(405,260,260,5);
  stand2=new Stand(660,455,200,5);
  box1=new Box(300,235,30,40);
  box2=new Box(330,235,30,40);
  box3=new Box(360,235,30,40);
  box4=new Box(390,235,30,40);
  box5=new Box(420,235,30,40);
  box6=new Box(450,235,30,40);
  box7=new Box(480,235,30,40);
  box8=new Box(510,235,30,40);
  box9=new Box(330,195,30,40);
  box10=new Box(360,195,30,40);
  box11=new Box(390,195,30,40);
  box12=new Box(420,195,30,40);
  box13=new Box(450,195,30,40);
  box14=new Box(480,195,30,40);
  box15=new Box(360,155,30,40);
  box16=new Box(390,155,30,40);
  box17=new Box(420,155,30,40);
  box18=new Box(450,155,30,40);
  box19=new Box(390,115,30,40);
  box20=new Box(420,115,30,40);
  box21=new Box(405,75,30,40);

  //Set 2
  box22=new Box(600,430,30,40);
  box23=new Box(630,430,30,40);
  box24=new Box(660,430,30,40);
  box25=new Box(690,430,30,40);
  box26=new Box(720,430,30,40);
  box27=new Box(630,390,30,40);
  box28=new Box(660,390,30,40);
  box29=new Box(690,390,30,40);
  box30=new Box(660,350,30,40);

  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot=new SlingShot(this.polygon,{x:100,y: 200});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  strokeWeight(2)
  stroke("white")
  textSize(25);
  fill("purple");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",50,590);

  
  strokeWeight(2);
  stroke(15);
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("pink");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  fill("yellow");
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  fill("blue");
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  fill("purple");
  box19.display();
  box20.display();
  fill("black");
  box21.display();
  
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  imageMode(CENTER);
  image(polygon_img, polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}