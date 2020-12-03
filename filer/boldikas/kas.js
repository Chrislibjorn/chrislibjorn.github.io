const antB = 20
let ds = new Array(antB);
let xs = new Array(antB);
let ys = new Array(antB);
//diameter
let d = 20;



function setup() {
    let canvas = createCanvas(500, 400);
    canvas.parent(game)

    for (let i = 0; i < antB; i++) {
        ds[i] = random(10, 50)
    }

    for (let i = 0; i < antB; i++) {
        xs[i] = i + random(0, width);
        ys[i] = i + random(0, height);
    }
}


function draw() {
    background(20);

    //cirkel 1
    fill(255)
    for (i = 0; i < antB; i++) {
        circle(xs[i], ys[i], ds[i])
    }

}


