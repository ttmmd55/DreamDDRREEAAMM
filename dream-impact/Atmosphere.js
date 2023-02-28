class Atmosphere {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    let colors = cm.randomAtmosphereColorset();
    this.c1 = colors[0];
    this.c2 = colors[1];
    this.flashColor = cm.randomFlashColor();
    this.axis = Y_AXIS;
    this.rot = random(0, TAU);
    this.rotDelta = rotSpeed * rotDirection;
    this.alpha1 = 0.1+ random();
    this.alpha2 = random();
    this.c1.setAlpha(this.alpha1);
    this.c2.setAlpha(this.alpha2);
    let r = random(100);
    this.flash = r < atmosphereFlashChance ? true : false;
    
    this.c1Osc = PI;   this.c1OscDelta = 0.0005;
    this.c2Osc = 0.00; this.c2OscDelta = 0.001;
    
    this.c1Alpha = 0;
    this.c2Alpha = 0;
    
    this.updateOscillators();
    
    
    // Create planetary rings
    // Look into glow effect https://stackoverflow.com/questions/5067368/html5-canvas-create-outer-glow-effect-of-shape
    this.ringsBaseColor = cm.randomRingsColor();
    this.hasRings = false;
    if (random(100) < ringsChance) this.hasRings = true;
    this.ringsParams = [];
    let ringCount = floor(random(20,80));
    
    let glowRingCount = 4;
    
    let baseDiam = minDim*8;
    let diamOffset = random(minDim*0.6);
    let ringSpread = floor(random(150, 250));

    for (let i=0; i<ringCount; i++){
      let chue = hue(this.ringsBaseColor);
      let csat = saturation(this.ringsBaseColor);
      let cbri = brightness(this.ringsBaseColor);
      
      // create normal rings
      if (i < ringCount - glowRingCount){
        let newc = color(chue, csat, cbri-random(40));
        let r = {
          d:(baseDiam+diamOffset+random(-ringSpread,ringSpread)),
          sw:random(1,6),
          col:newc,
          cola: random(0.3, 0.5),
          glow: false
        }
        this.ringsParams.push(r);
      } else {
        // create glowing rings
        let newc = color(chue, csat, 100);
        let r = {
          d:(baseDiam+diamOffset+random(ringSpread*0.4, ringSpread)), 
          sw:random(1,6),
          col:newc,
          cola: random(0.3, 0.5), // Maybe set this to 1?
          glow: true
        }
        this.ringsParams.push(r);
      }
    }
    
    
    this.ringsArcCenter = createVector(width/2, height/2);
    this.ringsArcCenter.x = cos(HALF_PI*0.1)*baseDiam * 0.5 + width*0.5;
    this.ringsArcCenter.y = sin(HALF_PI*0.1)*baseDiam * 0.5 + height*0.5;
    
  }
  
  updateOscillators(){
    this.c1Alpha = map(sin(this.c1Osc), -1, 1, 0.2, 1);
    this.c2Alpha = map(sin(this.c2Osc), -1, 1, 0.2, 1);
    this.c1Osc += this.c1OscDelta;
    this.c2Osc += this.c2OscDelta;
    this.c1.setAlpha(this.c1Alpha);
    this.c2.setAlpha(this.c2Alpha);
  }
  
  displayRings(front){
    if (this.hasRings){
      noFill();
      this.ringsParams.forEach(p => {
        if (!p.glow && !front){
          // Displayed behind the atmosphere
          p.col.setAlpha(p.cola);
          stroke(p.col);
          strokeWeight(p.sw);
          ellipse(this.ringsArcCenter.x, this.ringsArcCenter.y, p.d, p.d);
        } else if (p.glow && front){
          // Displayed in front of the atmosphere
          
          // Make some of the rings glow        
          ctx.lineWidth = p.sw+2;
          ctx.shadowBlur = 20;
          ctx.shadowColor = "white";
          ellipse(this.ringsArcCenter.x, this.ringsArcCenter.y, p.d, p.d);
          
          ctx.shadowBlur = 0;
          
          p.col.setAlpha(p.cola);
          stroke(255, 0.3); // p.col);
          strokeWeight(p.sw);
          blendMode(LIGHTEST);
          ellipse(this.ringsArcCenter.x, this.ringsArcCenter.y, p.d, p.d);
          blendMode(BLEND);
        }
      });
    }
  }
  
  display(){
    this.displayRings(false);
    
    push();
    translate(0, height/2);
    var gradient = ctx.createLinearGradient(this.x,this.y, this.x+this.w,this.y);
    gradient.addColorStop(0, this.c1);
    
    if (this.flash && random(100) < flashFrequency) gradient.addColorStop(0.5, this.flashColor); // TODO Balance this and pick other colors
    
    gradient.addColorStop(1, this.c2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, this.y, this.w * 2, this.h);
    pop();
    this.displayRings(true);
    
    this.rot += this.rotDelta;
    this.updateOscillators();
  }
}
