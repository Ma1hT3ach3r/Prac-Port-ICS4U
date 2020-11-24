//editor.p5js.org
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  fill(mouseX%255,mouseY%255,10)
  ellipse(mouseX,mouseY,100,100);
}
