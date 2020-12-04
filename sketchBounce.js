//Program to make algorithm for bouncing sprites
var car, wall;
var carImage;

function preload()
{
    carImage=loadImage("car.png");
}
function setup()
{
    createCanvas(1000,600)

    car=createSprite(100,100,50,50);
    car.addImage(carImage)
    car.scale=0.7;
    wall=createSprite(500,200,60,300)
    car.shapeColor=wall.shapeColor="yellow"
    car.velocityX=20;
     

}

function draw()
{
    background(0);
     //console.log("Width Gap " + (car.x-wall.x )+ " "+(car.width/2+wall.width/2))
     //console.log("Height Gap "+ (car.y-wall.y )+ " " +(car.height/2+wall.height/2))
     
    //bouncing algorithm
    if(Math.abs(car.x-wall.x)<=(car.width/2+wall.width/2)) {

           car.velocityX= car.velocityX *-1;
           //wall.velocityX *=-1;

    }
     
   if(Math.abs(car.y-wall.y)<=(car.height/2+wall.height/2))
     {
        car.velocityY= car.velocityY *-1;
        //wall.velocityY *=-1;

   }

    drawSprites();
}