class Candy {
    constructor(x, y, width, height){
      this.image = loadImage ("images/candy.png");
      this.x = x
      this.y = y
      this.width = 60 
      this.height = 60
      this.body = Bodies.circle(500,200,50,50);
      World.add(world, this.body);
    }
    destroy(){
      this.body.bodyA = null;
    }

    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
    }
  }
  