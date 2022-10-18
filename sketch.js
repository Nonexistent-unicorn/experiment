function setup() {
  createCanvas(1525, 700, WEBGL);
}

function draw() {
background(248,131,121);

    noStroke();
    fill(100, 20, 10);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  torus(150, 50);

  fill(100, 20, 10);
    stroke(248, 131, 121);
    strokeWeight(2);
  sphere(75);

    fill(100, 20, 10);
    stroke(100, 20, 10);
  torus(250, 5);

    noFill()
    stroke(100, 20, 10)
    strokeWeight(5)
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  box(350, 350, 350)
}