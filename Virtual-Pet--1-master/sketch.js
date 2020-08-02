//Create variables here
var dog,dogIMG, happyDog,happyDogIMG, database, foodS, foodStock; 
function preload()
{
  dogIMG = loadImage("images/dogImg.png");
 happyDogIMG = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(200,200,10,10);
   dog.addImage(dogIMG);
    dog.scale = 0.15;
  happyDog = createSprite(30,200,10,10)
  happyDog = loadImage("happyDog.png")
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS); dog.addImage(happyDogIMG);
     }
  drawSprites();
  //add styles here

}

function readStock(data){
     foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}

