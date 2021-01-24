
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;


var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var ground1,ground2,lGround;
var hexagon;
var box17,box18,box19,box20;
var sling,background;

function preload()
{
	backgroundimg=loadImage("wallpaper.jpg")
}
function setup() {
	createCanvas(1350, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={isStatic:true}
	ground1 = new Ground(980,250,400,10);

	ground2 = new Ground(500,400,400,10);

	lGround = new Ground(0,500,3000,30);


//build1
	box1 = new Box1(400,200,50,50);

	box2 = new Box1(450,200,50,50);
	box3 = new Box1(500,200,50,50);
	box4 = new Box1(550,200,50,50);

	box5 = new Box1(430,150,50,50);
	box6 = new Box1(480,150,50,50);
	box7 = new Box1(530,150,50,50);
	box8 = new Box1(450,100,50,50);
	box9 = new Box1(500,100,50,50);

	box10 = new Box1(480,50,50,50);
	
	box11 = new Box1(900,200,50,50);

	box12 = new Box1(950,200,50,50);
	box13 = new Box1(1000,200,50,50);
	box14 = new Box1(1050,200,50,50);

	box15 = new Box1(930,150,50,50);
	box16 = new Box1(980,150,50,50);
	box17 = new Box1(1030,150,50,50);
	box18 = new Box1(950,100,50,50);
	box19 = new Box1(1000,100,50,50);

	box20 = new Box1(980,50,50,50);
	

	hexagon = new polygon(100,100,70,60);

	sling = new Chain(hexagon.body,{x:200,y:100});

	Engine.run(engine);
}


function draw() {
  
	background(backgroundimg); 
	
        // Building 1
	box1.display();

	box2.display();
	box3.display();
	box4.display();

	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();

	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box19.display();
	box20.display();

	ground1.display();
	ground2.display();
	lGround.display();

  hexagon.display();

  sling.display();
 
  drawSprites();

}
function mouseDragged()
{
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  sling.released();
}
function keyPressed()
{
	if(keyCode == 32)
	{
			Matter.Body.setPosition(hexagon.body,{x:100,y:400});
			sling.attach(hexagon.body);
	}
}