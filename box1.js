class Box1
{
    constructor(x,y,width,height,color)
       {
           var options={
           'friction':1.0,
           'density':0.2,
           'isStatic':false
                       }
              this.body=Bodies.rectangle(x,y,width,height,options);
              this.x=x;
              this.y=y;
              this.width=width;
              this.height=height;
              this.color=color

              World.add(world,this.body);
       }
        display()
        {
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            fill(132, 205, 147);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
    
        }
}