// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;


function setup() {
  createCanvas(400, 400);
  c1 = color(111, 84, 8);
  c2 = color(242, 207, 110);
}


function draw() {
  //Background;
  setGradient(0, 0, width, height, c2, c1, Y_AXIS);
  
  //Diamond
  translate(width/2, height*0.125);
  grdDiamond(0, 0, height*0.75, c2, c1);
  
  save("20210104.png");
}

function grdDiamond(x, y, h, c1, c2){
  for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c2, c1, inter);
      stroke(c);
      if ( i <= ((y + h)/2)){
        line( (x * h) - (i), i, (x * h) + i, i);
      }else{
        line( (x - h) + i , i, (x + h) - i , i);
      }
    }
}


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
