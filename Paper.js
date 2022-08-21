var paperPos;
class Paper{
    constructor(x, y, r){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x, y, r, options)
        World.add(world, this.body)
    }

    display(){
        paperPos=this.body.position;
        push()
        translate(paperPos.x, paperPos.y)
        ellipseMode(CENTER)
        strokeWeight(3)
        fill(255, 255, 255)
        ellipse(0, 0, this.r, this.r)
        pop()

    }

}