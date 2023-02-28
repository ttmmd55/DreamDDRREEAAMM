function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  createPiece();
}

let mouseLapse = 0;
function mouseReleased(){
  if (millis() - mouseLapse > 200){
    noseed += 1;
    createPiece();
  }
  mouseLapse = millis();
  return false;
}
