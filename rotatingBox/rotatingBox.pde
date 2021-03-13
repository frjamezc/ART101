void setup() {
  size(1000, 1000, P3D);
  background(0);
  strokeWeight(10);

}


void draw() {
  background(0);
  int x = mouseX;
  int y = mouseY;
  translate(width/2, height/2, 0);

  stroke(255 - mouseY/2, mouseX/2, mouseY/2);
  rotateY((mouseX + mouseY) * .005);

  rotateX((mouseX + mouseY) * .005);
  noFill();

  box((mouseX+mouseY)/3);
}
