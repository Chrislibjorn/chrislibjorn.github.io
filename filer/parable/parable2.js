function setup() {
    let canvas = createCanvas (400, 400);
    canvas.parent(game) 
    slider = createSlider(2, 50, 2);
    slider.position(windowWidth/2-180,200 );
    slider.style('width', '80px');
}
//a cordinate
let ay = 300
let ax = 50
//b cordinate
let by = 50
let bx = 200
//c cordinate
let cy = 300
let cx = 350
//diameter
let diameter = 3
//i er verdien af en specifik treg, og n er antallet af streger.
function draw() {
    //n er anatal streger
    let n = slider.value();
    background(255);
    line(ax, ay, bx, by)
    line(bx, by, cx, cy)
    for (i = 0; i <= n; i++){
        //mapper x verdierne for linjen bc
        let x1 = map(i, 0, n, cx, bx)
        //mapper y verdierne for linjen bc
        let y1 = map(i, 0, n, cy, by)
        //mapper x verdierne for linjen ab
        let x2 = map(i, 0, n, bx, ax)
        //mapper y verdierne for linjen ab
        let y2 = map(i, 0, n, by, ay)
        //tegner cirklerne for verdierne af i
        circle(x1, y1, diameter)
        circle(x2, y2, diameter)
        //tegner linjerne i med de sammenhængende kordinater fra mappet 
        line(x1,y1,x2,y2)
    }
}