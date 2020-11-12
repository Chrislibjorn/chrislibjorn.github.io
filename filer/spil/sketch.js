let xs = 0
let y2 = 0
//mouseimput
let c = 0
let p = 0
//highscore
let h = 0
//points
let t = 0
function setup() {
    createCanvas(windowWidth - 10, windowHeight - 250);
    xs = random(0, width)
}


function draw() {
    let x = mouseX;
    background(20, 20, 20)
    if (mouseIsPressed){
        c++
    }else{
        c=0
    }
    //laser
    if (c>0 && c<10) {
        fill(255, 20, 20)
        rect(x - 1.5, !height, 3, height)
        if ((xs - 10 <= x) && (xs + 10 >= x)) {
            p = 1;
            t++;
        }
    } else {
        p = 0
    }
    //player model 
    fill(255, 255, 255)
    rect(x - 10, windowHeight - 270, 20, 20)
    //hitmaker
    //enemy model
    if ((y2 < windowHeight - 250) && (p == 0)) {
        y2=y2+10
        circle(xs, y2, 20);
    } else {
        xs = random(0, width);
        y2 = 0;

    }
    if(t>h){
        h++;
    }
    if(y2>windowHeight-260){
        t=0
    }
    {
        p = 0;
    }
    fill(255)
    textSize(20)
    text('hits: '+t, 50, 53)
    text('highscore: '+h, 50, 80)
}