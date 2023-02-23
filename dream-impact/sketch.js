let img;
function preload() {
  img = loadImage('fruit-basket-agency-UdeDyN4K7S0-unsplash.jpg');
}
function setup() {
  createCanvas(400, 400);
  canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {

  var Millis = millis();
  var Second = millis()/3000;
  background(255);
  image(img,0,0,width,height);
  noStroke();
  
  var delta = 0.0625;
  var yu = Second%2
  var a = 50;
  for(let i=3;i<8;i++){
    drawEllipse(125,25+60*i,a,yu);
    drawEllipse(175,75+50*i,a,yu);
    drawEllipse(225,125+40*i,a,yu);
    drawEllipse(325,25+40*i,a,yu);
    drawEllipse(275,75+50*i,a,yu);
    drawEllipse(425,125+60*i,a,yu);
  }
}

function drawEllipse(x,y,a,time){
  ellipseMode(CENTER);
  if(time<0.5){
    var an=abs(cos((time)*PI*2));
    an = an*a+a;
  }else if(time>1&&time<1.5){
    an=abs(cos((time-1)*PI*2));
    an = an*a+a;
  }else{
    an=2*a;
  }
  
  fill(255,255,255,100);
  ellipse(x,y,an,an);         
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}