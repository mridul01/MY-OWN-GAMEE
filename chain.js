class Chain{
    constructor(bodyA,pointB){

        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.002,
            length : 10
        }
        this.pointB = pointB;
       this.body = Constraint.create(options);
       World.add(world,this.body);

    }
    cut (){
        this.body.bodyA = null;
    }
   
    display(){
        if(this.body.bodyA){
            push ();
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("black");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
        
    }
}