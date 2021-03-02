class Knife {
    constructor(x,y,width,height){
        this.x = x;
        this.y =y;
        this.width = 50;
        this.height = 80;
        this.image = loadImage("images/knife.png");
        this.knife = Bodies.rectangle(x,y,width,height);
        World.add(world,this.knife);
    }
    display(){
        this.knife.position.x = mouseX;
        this.knife.position.y = mouseY;
        var pos = this.knife.position;
        imageMode (CENTER);
        image (this.image,pos.x,pos.y,this.width,this.height);
       
    }
}