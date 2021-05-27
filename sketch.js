var cat,mouse
var bgImg
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png")
    catImg2  = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png")
     
    mouseImg1 = loadAnimation("images/mouse1.png")
   mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
   mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addAnimation("tom1",catImg1);
    mouse = createSprite(200,600)
    mouse.addAnimation("mouse1",mouseImg1);
    cat.scale=.2
    mouse.scale=.2

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide          

    drawSprites();



if ( cat.x - mouse.x <(cat.width - mouse.width)/2){
    mouse.addAnimation("mouse3",mouseImg3)
    mouse.changeAnimation("mouse3")
    
    cat.addAnimation("cat3",catImg3)
    cat.changeAnimation("cat3")
    cat.velocityX=0
    cat.x = 300;
}
}

function keyPressed(){

  //For moving and changing animation write code here

    if (keyCode === LEFT_ARROW) {
         mouse.addAnimation("mouseteasing",mouseImg2)
         mouse.changeAnimation("mouseteasing")
         mouse.frameDelay=25;
         cat.addAnimation("catchasing",catImg2)
         cat.changeAnimation("catchasing")
         cat.velocityX=-5
     }
    }