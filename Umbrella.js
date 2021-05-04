class umbrella{
constructor(x,y){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic':true
    }
    this.body = Bodies.circle(x, y,100, options);
   this.radius=300
    this.image=loadImage(("walking_1.png"));

    World.add(world, this.body);
}

display(){
    var pos=this.body.position;
    imageMode(CENTER);
image(this.image,pos.x,pos.y,this.radius,this.radius);
}
}