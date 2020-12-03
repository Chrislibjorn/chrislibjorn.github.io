function setup() {
    let canvas = createCanvas(500, 400);
    canvas.parent(game)
}
//ø
//hastighed
let va = [5, 6, 7, 8]
let xs = [20, 40, 60, 80]
let ys = [20, 40, 60, 80]
//cordinat 1
var x1 = xs[0]
var y1 = ys[0]
//cordinat 2
var x2 = xs[1]
var y2 = ys[1]
//cordinat 3
var x3 = xs[2]
var y3 = xs[2]
//cordinat 4
var x4 = xs[3]
var y4 = xs[3]
//hastighed 1
let v_1 = va[0]
//hastighed 2
let v_2 = va[1]
//hastighed 3
let v_3 = va[2]
//hastighed 4
let v_4 = va[3]
// x og y hastighed 1
let v1_1 = 0 + v_1
let v2_1 = 0 + v_1
// x og y hastighed 2
let v1_2 = 0 + v_2
let v2_2 = 0 + v_2
// x og y hastighed 3
let v1_3 = 0 + v_3
let v2_3 = 0 + v_3
// x og y hastighed 4
let v1_4 = 0 + v_4
let v2_4 = 0 + v_4

function draw() {
    background(20);
    {
        //cordinat 1
        x1 = x1 + v1_1
        y1 = y1 + v2_1
        //cordinat 2
        x2 = x2 + v1_2
        y2 = y2 + v2_2
        //cordinat 3
        x3 = x3 + v1_3
        y3 = y3 + v2_3
        //cordinat 4
        x4 = x4 + v1_4
        y4 = y4 + v2_4
        //cirkel 1
        fill(255)
        circle(x1, y1, 20);
        //cirkel 2
        fill(0,0,255)
        circle(x2, y2, 20);
        //cirkel 3
        fill(0,255,0)
        circle(x3, y3, 20);
        //cirkel 4
        fill(255,0,0)
        circle(x4, y4, 20)
        {
            //hastighed bold 1
            if (x1 > 490) {
                v1_1 = -v_1
            }
            if (x1 < 10) {
                v1_1 = v_1
            }
            if (y1 > 390) {
                v2_1 = -v_1
            }
            if (y1 < 10) {
                v2_1 = v_1
                //hastighed bold 2
            }
            if (x2 > 490) {
                v1_2 = -v_2
            }
            if (x2 < 10) {
                v1_2 = v_2
            }
            if (y2 > 390) {
                v2_2 = -v_2
            }
            if (y2 < 10) {
                v2_2 = v_2
                //hastighed bold 3
            }
            if (x3 > 490) {
                v1_3 = -v_3
            }
            if (x3 < 10) {
                v1_3 = v_3
            }
            if (y3 > 390) {
                v2_3 = -v_3
            }
            if (y3 < 10) {
                v2_3 = v_3
            }
            //hastighed bold 4
            if (x4 > 490) {
                v1_4 = -v_4
            }
            if (x4 < 10) {
                v1_4 = v_4
            }
            if (y4 > 390) {
                v2_4 = -v_4
            }
            if (y4 < 10) {
                v2_4 = v_4
            }
        }
    }
}
