function setup() {
  createCanvas(600, 350);
}
let va = 4
let x = 50
let y = 50
let v = 0 + va
let v2 = 0 + va
let r = 255
let g = 180
let b = 180

function draw() {
  x = x + v
  y = y + v2
  background(0, 0, 0);
  fill(r, g, b)
  textSize(30)
  text('(DVD)', x, y) 
  {
    if (510 < x) {
      v = -va
      r = 255
      g = 0
      b = 0
    }
    if (1 > x) {
      v = va
      r = 0
      g = 255
      b = 255
    }
    if (y < 30) {
      v2 = va
      r = 255
      g = 255
      b = 50
    }
    if (y > 340) {
      v2 = -va
      r = 0
      g = 255
      b = 0      
    }
  } 
}