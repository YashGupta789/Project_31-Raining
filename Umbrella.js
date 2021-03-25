class Umbrella {
    constructor(x,y){
        var options = {
            restitution:1,
            friction:1.0,
            density:10,
            isStatic:true
            }
        this.body = Bodies.circle(x,y,36,options);
        this.radius = 50;
        World.add(world, this.body)
    }

    display(){
        fill(0,0);
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y,120,30);
    }
}

