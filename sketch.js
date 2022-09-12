var space
var bloco
var inimigos_all =[];

function preload(){

  space  = loadImage("assets/space.jpeg");
  alien_img = loadAnimation("assets/alien1.png", "assets/alien2.png");
  squid_img = loadAnimation("assets/polvo1.png", "assets/polvo2.png");
  skull_img = loadAnimation("assets/caveira1.png", "assets/caveira2.png");
  boss_img = loadImage("assets/inimigo5.png");
  nave_img = loadImage("assets/nave.png");
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  //edges = createEdgesSprite();
  nave = createSprite(width/2, height-60);
  nave.addImage(nave_img);
  nave.scale = 0.1;

  bloco_inimigo = new Group();

  
  for(var i=0;i<10; i++){

    polvo = createSprite(300+100*i,-50);
    polvo.addAnimation("polvo", squid_img);  
    bloco_inimigo.add(polvo);
    polvo.velocityY = 1
    polvo.lifetime =100
  } 
  for(var i=0;i<10; i++){

    alien = createSprite(300+100*i,-250);
    alien.addAnimation("alien", alien_img);  
    alien.velocityY =1
    bloco_inimigo.add(alien);
    alien.lifetime =100
  } 
  for(var i=0;i<10; i++){

    skull = createSprite(300+100*i,-150)
    skull.addAnimation("skull", skull_img);
    skull.velocityY =1  
    bloco_inimigo.add(skull);
    skull.lifetime =100
  } 
}

function spawn(){
 
for(var i=0;i>3;i++){
  if(frameCount%60===0){
  var inimigo = createSprite(random(width/2-200,width+200), 0);
  inimigo.velocityY = 1
  inimigo.velocityX=random(-2,2);

  var sorteio = Math.round(random(1,3));

  switch(sorteio){
    case 1: inimigo.addAnimation("alien", alien_img);
    break;
    case 2: inimigo.addAnimation("polvo", squid_img);
    break;
    case 3: inimigo.addAnimation("skull", skull_img);
    break;
  }

  inimigos_all.push(inimigo)
}
}
}

function draw() {
  background(space); 

  

  if (keyDown("a") && nave.x > 50){
    nave.x -=5

  }
  if (keyDown("d") && nave.x < width-50){
    nave.x +=5

  }
  
  if(!bloco_inimigo[0]){
  if(inimigos_all.length <=6){
    spawn();
  }
}

if(!inimigos_all[0] && !bloco_inimigo[0]){

boss();
}
  drawSprites();
}

function boss() {
  if(frameCount%150===0){
  chefe = createSprite(width/2,100);
  chefe.addImage(boss_img)
  chefe.velocityX = 3
  chefe.scale = 0.8
}
}

