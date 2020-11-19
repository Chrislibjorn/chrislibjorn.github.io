let xs = 0
let y2 = 0
//mouseimput
let c = 0
let p = 0
//highscore
let h = 0
//points
let t = 0
//background color
let r = 0
let g = 50
//speed
let v1 = 1
let v=v1
function setup() {
    createCanvas(windowWidth-20, windowHeight-20);
    xs = random(20, width - 25)
}
function draw() {
    let x = mouseX;
    background(r, g, 20)
    if (mouseIsPressed) {
        c++
    } else {
        c = 0
    }
    //laser
    if (c > 0 && c < 10) {
        fill(255, 20, 20)
        rect(x - 1.5, !height, 3, height)
        if ((xs - 10 <= x) && (xs + 10 >= x)) {
            p = 1;
            //tæller point
            v=v+0.1;
            t++;
            g--;
            if (g <= 20 && r < 50) {
                r++;
            }
        }
    } else {
        p = 0
    }
    //player model 
    fill(255, 255, 255)
    rect(x - 10, windowHeight - 60, 20, 400)
    //hitmaker
    //enemy model
    if ((y2 < windowHeight - 30) && (p == 0)) {
        y2 = y2 + v
        circle(xs, y2, 20);
    } else {
        xs = random(20, width - 25);
        y2 = 0;

    }
    //highscore counter
    if (t > h) {
        h++;
    }
    //reset
    if (y2 > windowHeight - 30) {
        t = 0;
        r = 0;
        g = 50
        v = v1

    }
    {
        var vt = v.toFixed(1);
    }
    {
        p = 0;
    }
    fill(255)
    textSize(20)
    text('hits: ' + t, 50, 50)
    text('highscore: ' + h, 50, 80)
    text('speed'+vt,50,110)
}