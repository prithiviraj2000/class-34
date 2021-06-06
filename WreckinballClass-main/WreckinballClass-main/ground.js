class Ground{
    constructor(x,y,width,height){
        var GroundOptions={
            restitution:0.8,
            friction:0.3,
            density:1.0,
            isStatic:true
        }
    this.body=Bodies.rectangle(x,y,width,height,GroundOptions);
    this.width=width;
    this.height=height
    World.add(world,this.body);
    }
    
    display(){
       var pos= this.body.position;
       var angle=this.body.angle; //45 deg
       push(); //start
       translate(pos.x,pos.y)
       rotate(angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop(); //stop
    }
    
    }
    