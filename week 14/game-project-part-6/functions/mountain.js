function mountain(x,y,c){
    m = {
        pos : undefined,
        h : floorPos_y-y,
        color : c,
        setup : function(x){
            this.pos = createVector(x, y);
        },
        draw : function(){
            noStroke();
            fill(121, 99, 66);
            triangle( 
                this.pos.x, this.pos.y,
                this.pos.x - this.h/2, this.pos.y + this.h,
                this.pos.x + this.h/2, this.pos.y + this.h
                
            );
            fill(this.color);
            triangle(
                this.pos.x, this.pos.y,
                this.pos.x - this.h*0.2, this.pos.y + this.h*0.4,
                this.pos.x + this.h*0.2, this.pos.y + this.h*0.4
            );
        }   
    }
    m.setup(x,y);
    return m;
}