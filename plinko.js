class Plinko{


constructor(x,y,r){


    var opt={

'isStatic':true

    }

    this.r=r;
    this.body=Bodies.circle(x,y,r,opt);
    World.add(world,this.body);




}


display(){

    var pos=this.body.position;
    fill("white")
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r);



}










}