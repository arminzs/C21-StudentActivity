 var car, wall;
 var wall2, wall3;


 function setup()
 {
   createCanvas(1000,600);

   car = createSprite(50,200,50,50);
   car.shapeColor="yellow";

   wall = createSprite(500,300,100,500);
   wall.shapeColor="brown"

   wall2=createSprite(300,200,80,400);
   wall2.shapeColor="brown";

   wall3=createSprite(800,300,100,400);
   wall3.shapeColo="brown"
 }

 function draw()
 {
   background("aqua");
   car.x=mouseX;
   car.y=mouseY;

   //console.log(Math.abs(car.x-wall.x) + " " +(car.width/2 +wall.width/2))
   
   //collision between car and any wall 
   if(isTouching(car,wall2))
   {
     car.shapeColor=wall2.shapeColor="red";
   }
   else
   {car.shapeColor="yellow"; 
    wall2.shapeColor="brown";
   }

    
    

   drawSprites();
 }
