class Ground{
    constructor(){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(250,690,500,20,option);
        World.add(world,this.body);
    }
    display(){
        fill("brown");
        rectMode(CENTER);
        rect(250,500,500,50);
    }
}