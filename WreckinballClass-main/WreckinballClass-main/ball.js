class Ball{
    constructor(x,y,r){
        var ballOptions={
            restitution:0.8,
            friction:0.3,
            density:1.0,
        }
    this.body=Bodies.circle(x,y,r,ballOptions);
   
    this.r=r;
    World.add(world,this.body);
    }
    
    display(){
       var pos= this.body.position;
       var angle=this.body.angle; //45 deg
       push(); //start
       translate(pos.x,pos.y)
       rotate(angle)
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop(); //stop
    }
    
    }
    