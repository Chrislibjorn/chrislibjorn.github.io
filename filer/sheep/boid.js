class Boid {
    constructor() {
        this.position = createVector(random(40,width-40), random(40,height-40));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 1))
        this.acceleration = createVector();
        this.maxForce = 0.03;
        this.maxspeed = 0.5;
        this.r = 25;
        this.perceptionRadius = 70;
    }
    edges() {
        if (this.position.x > width) {
            this.position.x = 0;
        }
        if (this.position.x < 0) {
            this.position.x = width;
        }
        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }
    behave(boids) {
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            // allignment
            if (other != this && d < this.perceptionRadius * 1.2 && d > this.r * 3) {
                    steering.add(other.velocity);
            }
            //seperation
            if (other != this && d < this.perceptionRadius * 0.8) {
                let diff = p5.Vector.sub(this.position, other.position);
                diff.div(d);
                steering.add(diff);
            }
            if (other != this && d> this.perceptionRadius*5) {
                // coheision
                steering.sub(this.position);
                steering.add(other.position);
            }
            total++;
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxspeed);
            steering.limit(this.maxForce*0.8);
            //walls
            let x = createVector(0.1,0);
            let y = createVector(0,0.1);
            if (this.position.x > width -24) {
                steering.sub(x);
            }
            if (this.position.x < 24) {
                steering.add(x);
            }
            if (this.position.y < 24) {
                steering.add(y);
            }
            if (this.position.y > height-24) {
                steering.sub(y);
            }
        }
        return steering;

    }
    flock(boids) {
        let behaivior = this.behave(boids);
        this.acceleration.add(behaivior);
    }
    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.acceleration.mult(0);
    }
    show() {
        push();
        let theta = this.velocity.heading();
        translate(this.position.x, this.position.y);
        rotate(theta);
        stroke(0);
        strokeWeight(this.r / 7);
        point(this.r / 3, this.r / 2.2);
        point(-this.r / 3, this.r / 2.2);
        point(this.r / 3, -this.r / 2.2);
        point(-this.r / 3, -this.r / 2.2);
        strokeWeight(this.r / 10);
        stroke(255);
        ellipse(0, 0, this.r, this.r / 1.3)
        stroke(0);
        strokeWeight(this.r / 2);
        point(this.r / 2, 0);
        strokeWeight(this.r / 3);
        stroke(255);
        point(this.r / 2.2, 0);
        // circle(0, 0, this.perceptionRadius * 2)
        pop();
        push();
        strokeWeight(4);
        stroke(30, 30, 0);
        noFill();
        rect(8,8,width-16,height-16);
        strokeWeight(2);
        stroke(50,50,30);
        rect(8,8,width-16,height-16);
        pop();
    }
}