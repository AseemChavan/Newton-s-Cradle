class Bob {
    constructor(x, y, radius, angle) {
        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 20;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill("purple");
        circle(0, 0, this.radius);
        pop();
    }
}