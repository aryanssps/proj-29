class polygon
{
    constructor(x,y,width,height)
       {
           var options={
           'friction':1.0,
           'density':1.2,
           'isStatic':false,
           'restitution':0.8
                       }
              this.body=Bodies.rectangle(x,y,width,height,options);
              this.x=x;
              this.y=y;
              this.width=width;
              this.height=height;
              this.image=loadImage("hexagon.png");

            World.add(world,this.body);
       }
        display()
        {
         
            var angle = this.body.angle;
            push();
            fill("yellow");
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop();
        
        }
}