// p5_helper.js
const height = 500;
const width = 300;
const strokeWeight = 10;


export function drawingCanvas(p5) {
  const p = p5;
  let x, y;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.35, height);
  };

  p.draw = () => {
    p.background(255);
    p.text('normal mode', p.width / 2, 10);
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
}

export function shakyCanvas(p5) {
  const p = p5;
  let x, y, trueX, trueY;

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
    trueX = p.mouseX;
    trueY = p.mouseY;
  };

  p.mouseDragged = () => {
    if ((p.mouseY - trueY > 15) || (trueY - p.mouseY > 15)) {
      const xShift = p.random(-25, 25);
      const yShift = p.random(-15, 15);
      p.line(x, y, p.mouseX + xShift, p.mouseY + yShift);
      x = p.mouseX + xShift;
      y = p.mouseY + yShift;
      trueX = p.mouseX;
      trueY = p.mouseY;
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth * 0.35, height);
  };
}
