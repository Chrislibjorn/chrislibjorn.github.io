function setup() {
  createCanvas(600, 300);
}
let i = 1
let va = 5
let x = 50
let y = 50
let v = 0 + va
let v2 = 0 + va
let rc = Math.floor(Math.random() * 63);
let gc = Math.floor(Math.random() * 62);
let bc = Math.floor(Math.random() * 61);
let r = 1
let g = 1
let b = 1

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
    }
    if (1 > x) {
      v = va
    }
    if (y < 30) {
      v2 = va
    }
    if (y > 290) {
      v2 = -va
    }
  } 
  {
    r = r + rc
    if (r < 60) {
      rc = 0 + i
    }
    if (r > 245) {
      rc = 0 - i
    }
    g = g + gc
    if (g < 60) {
      gc = 0 + i
    }

    if (g > 245) {
      gc = 0 - i
    }
    b = b + bc
    if (b < 60) {
      bc = 0 + i
    }
    if (b > 245) {
      bc = 0 - i
    }
  }


}