class Block{
    constructor(x,y,width,height){
       var options={
          'friction' : 0.5,
          'density' : 1.0
      }  
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;

    World.add(world,this.body);
    }
    display(){
     var pos = this.body.position,
     angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);

    rectMode(CENTER);
    fill(149, 165, 166);
    strokeWeight(2.5);
    rect(0,0, this.width, this.height);
    pop();   
    }
}
