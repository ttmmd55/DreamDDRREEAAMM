/*
refer to:https://openprocessing.org/sketch/1312189
*/

let img;
let useSeed = false;
let seed = 4668;
let noseed = 2356;

// Atmosphere params
let atmosphereFlashChance = 5;        // 5 is 5%. Creates a 3rd stop in the atmosphere gradient.
let flashFrequency = 1;                // Frequency (% of frames) of atmosphere flash IF atmosphere actually flashes. How often the 3rd stop in the gradient appears.
let rotDirection = -1;                  // Setup changes this to -1 sometimes.
let rotSpeed = 0.0001;                // Rotation speed of the stars and atmosphere

// Starfield params
let numberOfStars = 300;             // Number of stars generated
let largeStarChance = 25;             // Used in a modulo with numberOfStars - smaller numbers mean more large stars
let redStarChance = 200;              // Used in a modulo with numberOfStars - smaller numbers mean more red stars (color of Mars)
let ringsChance = 0;               

// Planets
let minPlanets = 1;
let maxPlanets = 3;

// Nothing to tweak beyond here; additional settings are in classes
let starfield;
let atmosphere;

let minDim, maxDim;

const Y_AXIS = 1;
const X_AXIS = 2;

let canvas;

function preload() {
  img = loadImage('fruit-basket-agency-UdeDyN4K7S0-unsplash.jpg');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  
  cm = new ColorManager();
  background(cm.bgColor);
  
  createPiece();
}

function draw() {
  //draw the background
  background(cm.bgColor);
  starfield.display();
  atmosphere.display();

  var Millis = millis();
  var Second = millis()/3000;
  //image(img,0,0,width,height);
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
  fill(10, 10, 231,0.05); 
  ellipse(x,y,an,an);   
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function createPiece(){
  
  if(useSeed){
    randomSeed(seed);
    noiseSeed(seed);
  } else {
    randomSeed(noseed);
    noiseSeed(noseed);
  }
  
  // Rotation direction of stars and atmosphere
  if (random(100) < 40) rotDirection = 1;
    else rotDirection = -1;  
  layers = [];
  
  canvas = document.getElementById('defaultCanvas0');
  ctx = canvas.getContext('2d');
  
  // Setup for the mask contour
  minDim = width < height ? width : height;
  maxDim = width < height ? height : width;
  maskOffset = minDim * 0.5 * 0.99;
  
  // Create the starfield
  starfield = new Starfield(numberOfStars, maxDim * 2, maxDim * 2);
  
  // Create the atmosphere
  atmosphere = new Atmosphere(-minDim*0.6, -minDim * 0.6, minDim*1.2, minDim*1.2);
  
}
