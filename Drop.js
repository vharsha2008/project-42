class Drop  {
    constructor(x,y) {
        var options = {
            friction: 0.1
        }
         this.body = Bodies.rectangle(x,y,options);
      this.image = loadImage("rane.png");
         
         World.add(world,this.body);
    }

       display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255,255,255);
        rect(pos.x,pos.y,this.w,this.h,);  

       };
};