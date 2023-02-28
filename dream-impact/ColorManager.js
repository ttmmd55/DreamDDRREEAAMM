class ColorManager {
  constructor(){
    this.bgColor = color(0);
    this.maskColor = 0;
    this.maskOpacity = 255;
    this.atmosphereColors = [];
    this.createAtmosphereColors();
    
    this.terrainColors = [];
    this.createTerrainColors();
    
    this.ringsColors = [];
    this.createRingsColors();
    
    this.flashColors = [];
    this.createFlashColors();
    
    this.planetColors = [];
    this.createPlanetColors();
  }
  
  randomPlanetColor(){
    return random(this.planetColors);
  }
  
  createPlanetColors(){
    this.planetColors.push(color("#CCCCCC"));
    this.planetColors.push(color("#DDDDDD"));
    this.planetColors.push(color("#AAAAAA"));
    this.planetColors.push(color("#888888"));
    this.planetColors.push(color("#333333"));
    this.planetColors.push(color("#6f1d1b"));
    this.planetColors.push(color("#710000"));
    this.planetColors.push(color("#1b4965"));
    this.planetColors.push(color("#ebf2fa"));
  }
  
  randomFlashColor(){
    return random(this.flashColors);
  }
  
  createFlashColors(){
    this.flashColors.push(color("#00FFFF"));
    this.flashColors.push(color("#FF00FF"));
    this.flashColors.push(color("#e71d36"));
    this.flashColors.push(color("#80ffdb"));
    this.flashColors.push(color("#ffd60a"));
    this.flashColors.push(color("#ff0054"));
  }
  
  randomRingsColor(){
    return random(this.ringsColors);
  }
  
  createRingsColors(){
    this.ringsColors.push(color("#DEB28F")); 
    this.ringsColors.push(color("#f4a261"));
    // this.ringsColors.push(color("#ffffff"));
  }
  
  
  randomTerrainColorset(){
    return random(this.terrainColors);
  }
  
  createTerrainColors(){
    this.terrainColors.push(color(100));
    this.terrainColors.push(color("#fa709a"));
    this.terrainColors.push(color("#c2e9fb")); 
    this.terrainColors.push(color("#a6c0fe3"));
    this.terrainColors.push(color("#e9c46a")); 
    this.terrainColors.push(color("#7f5539")); 
    this.terrainColors.push(color("#9d0208")); 
    this.terrainColors.push(color("#e85d04")); 
    this.terrainColors.push(color("#7b2cbf")); 
    this.terrainColors.push(color("#f5f7fab")); 
    this.terrainColors.push(color("#abc4ff")); 
    this.terrainColors.push(color("#ff0054")); 
    this.terrainColors.push(color("#dddf00")); 
    this.terrainColors.push(color("#4059ad")); 
    this.terrainColors.push(color("#ffd6ba"));
  }
  
  
  randomAtmosphereColorset(){
    return random(this.atmosphereColors);
  }
  
  createAtmosphereColors(){
    this.atmosphereColors.push([color("#2B618F"), color("#BBDDFF")]);
  // https://codepen.io/bork/pen/wJhEm  
    this.atmosphereColors.push([color("#a18cd12"), color("#fbc2eb")]); // 0
    this.atmosphereColors.push([color("#a1c4fd2"), color("#c2e9fb2")]); // 1
    this.atmosphereColors.push([color("#e6e9f02"), color("#eef1f5")]); // 2
    this.atmosphereColors.push([color("#b1f4cf"), color("#9890e3")]); // 3
    this.atmosphereColors.push([color("#011d34"), color("#fbfcdb")]); // 4
    this.atmosphereColors.push([color("#fbfcdb"), color("#016792")]); // 5
    this.atmosphereColors.push([color("#d9afd97"), color("#97d9e1")]); // 6
    this.atmosphereColors.push([color("#80d0c7"), color("#13547a")]); // 7
    this.atmosphereColors.push([color("#1386a6"), color("#74d4cc")]); // 8
    this.atmosphereColors.push([color("#6d558c8f"), color("#ddd6f3c")]); // 9
    this.atmosphereColors.push([color("24d2926"), color("#d558c8")]); // 10
    this.atmosphereColors.push([color("#dbdcd7"), color("dddcd 24%"),color("#e2c9cc 30%"),color("#e7627d 46%"),color("#b8235a 59%"),color("#801357 71%"),color("#3d1635 84%"),color("#1c1a27")]); // 11
  }
}
