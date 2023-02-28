class Starfield {
  constructor(stars, w, h){
    this.w = w;
    this.h = h;
    this.rotCenter = createVector(width*0.5-random(-minDim*0.4, minDim*0.4), height*0.5-random(-minDim*0.4, minDim*0.4));
    this.points = stars;
    this.relaxIterations = 1;
    this.rot = PI/4;
    this.rotSpeed = rotSpeed * rotDirection;
    
    let points = [];
    for (let i=0; i<this.points; i++){
      let x = random(this.w);
      let y = random(this.h);
      points.push({"x":x, "y": y});
    }
    
    this.pts = points;
    
    this.planets = [];
    
    let numPlanets = floor(random(minPlanets, maxPlanets));
    for (let i=0; i<numPlanets; i++){
      let p = {
        pos:createVector(random(-minDim*0.4, minDim*0.4), random(-minDim*0.4, minDim*0.4)),
        size:random(50,150),
        col:cm.randomPlanetColor()
      }
      this.planets.push(p);
    }
  }
  
  display(){
    push();
    translate(this.rotCenter.x, this.rotCenter.y);
    rotate(this.rot);
    this.displayStars();
    this.displayPlanets();
    pop();
    
    this.rot += this.rotSpeed;
  }
  
  displayPlanets(){
    this.planets.forEach(p => {
      noStroke();
      fill(p.col);
      ctx.lineWidth = p.size;
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.col;
      ellipse(p.pos.x, p.pos.y, p.size, p.size);
    });
  }
  
  displayStars(){
    noStroke();
    
    this.pts.forEach((c, index) => {
      if (random(100) < 1) fill(50);
        else fill(100);
      
      let d = 1;
      if (index % largeStarChance == 0){
        d = 2;
        fill(100);
      }
      
      if (index % redStarChance == 0){
        fill(color("#9C2E35"));
      }
      let cxt = canvas.getContext('2d');
     
      ellipse(c.x-this.w, c.y-this.h, 1, d);
      
    });

  }
  
}
