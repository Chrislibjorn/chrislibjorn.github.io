let sheep;
let heardsize = 15;
const heard =[];
function setup() {
    let canvas = createCanvas(windowWidth-100,windowHeight -100 );
    canvas.parent(game)
    frameRate(60);
    for(i=0;i<heardsize; i++){
        heard.push(new Boid());
    }
}
function draw(){
    background(0,90,20);
    for(let boid of heard){
        // boid.edges();
        boid.flock(heard);
        boid.show();
        boid.update();
    }
}
