const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,ground,stoneObj;
var launcher;
var treeObj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;


function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1600,850);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,840,1600,22);

	stoneObj = new Stone(200,650,25);

	
    launcher = new Launcher(stoneObj.body,{x:200,y:650});
    
    mango1=new Mango(1100,450,30);
    mango2=new Mango(1170,400,30);
	mango3=new Mango(1300,450,30);
	mango4=new Mango(1300,350,30);
	mango5=new Mango(1200,450,30);
	mango6=new Mango(1150,340,30);
    mango7=new Mango(1220,350,40);
    mango8=new Mango(1350,400,35);
    mango9=new Mango(1050,420,35);
    
    treeObj=new Tree(1200,830);

	Engine.run(engine);
  
}
                    

function draw() {
  rectMode(CENTER);
  background("gray");

  textSize(30);
  fill("black")
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,150,565,250,350);

  treeObj.display();
  stoneObj.display(); 
  ground.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  
  
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body, {x:200,y:650})
        launcher.attach(stoneObj.body);
    }
}

function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
   var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r){
    
      
  	  Matter.Body.setStatic(lmango.body,false);
    }
}

