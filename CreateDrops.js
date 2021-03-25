class CreateDrops{
    constructor(x,y){
       var options = {
          restitution:0.1,
          friction:0.2,
          density:0.1
       }
       this.body=Bodies.circle(x,y,1,options);
       this.radius = 1;
       World.add(world,this.body);
  }

  update(){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x:random(0,600), y:random(50,600)});
    }
  }

  display(){
      fill(0,0,255);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,3,3);
  }
}