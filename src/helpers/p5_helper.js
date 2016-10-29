// p5_helper.js
const height = 500;
const width = 300;
const strokeWeight = 10;


export function drawingCanvas(p) {
  let x, y;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.35, height);
  };

  p.draw = () => {
    p.background(255);
    p.text('normal mode', p.width/2, 10);
    p.stroke(0);
    p.strokeWeight(strokeWeight);
    p.noLoop();
  };
  
  p.mousePressed = () => {
    x = p.mouseX;
    y = p.mouseY;
  };

  p.mouseDragged = () => {
    p.line(x, y, p.mouseX, p.mouseY);
    x = p.mouseX;
    y = p.mouseY;
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth * 0.35, height);
  };
};

export function shakyCanvas(p) {
  let x, y, true_x, true_y;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.35, height);
  };

  p.draw = () => {
    p.background(255, 200, 100);
    p.text('difficult mode', p.width/2, 10);
    p.noSmooth();
    p.stroke(0);
    p.strokeWeight(strokeWeight);
    p.noLoop();
  };
  
  p.mousePressed = () => {
    x = p.mouseX;
    y = p.mouseY;
    true_x = p.mouseX;
    true_y = p.mouseY;
  };

  p.mouseDragged = () => {
    if (( p.mouseY - true_y > 15 ) || ( true_y - p.mouseY > 15)) {
      const x_shift = p.random(-25, 25);
      const y_shift = p.random(-15, 15);
      p.line(x, y, p.mouseX + x_shift, p.mouseY + y_shift);
      x = p.mouseX + x_shift;
      y = p.mouseY + y_shift;
      true_x = p.mouseX;
      true_y = p.mouseY;
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth * 0.35, height);
  };
};
