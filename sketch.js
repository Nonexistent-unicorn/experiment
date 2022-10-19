

function setup() {
  createCanvas(1525, 700, WEBGL);

}
function draw() {
  background(0)

    stroke(250,50,160);
    strokeWeight(2);
    noFill();
    rotateY(frameCount* 0.01);
    rotateX(frameCount* 0.01);
  torus(150, 50);

    fill(250,50,160);
  sphere(75)

    fill(100, 20, 10);
    stroke(100, 20, 10);
    rotateX(frameCount* 0.01)
    rotateY(frameCount* 0.01)
  torus(250, 5);

    noFill()
    stroke(100, 20, 10)
    strokeWeight(5)
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  box(350, 350, 350);

    strokeWeight(.50)
  sphere(310)


}