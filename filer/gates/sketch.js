function setup() {
    createCanvas(400, 400);
  }
  function draw(){
      let x = mouseX;
      let y = mouseY;
      let v1= 1
      background(20,20,20)
      fill(20,20,200)
      rect(100,100,200,200)
      fill(200,200,200)
      rect(100,100,100,100)
      if(x<100 || x>300 || y <100 || y>300){
          fill(200,200,200)
        triangle(x+6,y+10,x-10,y,x+6,y-10)
      }
      if(x>100 && x<200 && y>100 && y<200){
          fill(20,20,20)
          circle(x,y,30);
      }
      if((200<x && x<300 && 100<y && y<300)||(100<x&&x<300 && 200<y && y<300)){
          fill(200,100,0)
          rect(x-10,y-10,20,20,5);
      }

  }