class Particle{



constructor(x,y,r){

    var opt={

            'restitution':0.9,
            'friction':0.5,
             'isStatic':false
    }
this.r=r;
this.body=Bodies.circle(x,y,r,opt);
this.color=color(random(0,255,),random(0,255),random(0,255));

World.add(world,this.body);



}


display(){

var pos=this.body.position;

noStroke();
ellipseMode(CENTER);
fill(this.color);
ellipse(pos.x,pos.y,this.r);





}













}