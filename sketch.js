const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;



function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	bg= createSprite(800, 750)
	bg.addImage(bgImg)
	bg.scale= 0.5
	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
    star.x= starBody.position.x
	star.y = starBody.position.y

	Engine.run(engine);

}


function draw() {
  background(0);
  Engine.update(engine)

  keyPressed();
  drawSprites();

}

function keyPressed() {
	if(keyDown('LEFT_ARROW')){
   fairy.x= fairy.x-9
	}

	if(keyDown('RIGHT_ARROW')){
		fairy.x= fairy.x+10
		 }

		 if(keyCode===DOWN_ARROW){

			Matter.Body.setStatic(starBody, false);
			star.velocityY = 5
			}

			if(star.y>470){
				star.velocityY = 0
				Matter.Body.setStatic(starBody, true);
			}
		
		
}

