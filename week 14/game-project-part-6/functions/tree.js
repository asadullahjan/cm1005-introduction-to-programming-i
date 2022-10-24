function tree(x,s,h,w,c){
    t ={
        pos : undefined,
        s : s,//size
        h : h,//height
        w : w,//width,
        color : c,//color
        treeAry : [],
        setup :function(x){
            this.pos = createVector(x, floorPos_y-this.h)
        },
        draw :function()
        {
            fill(102, 51, 0);
            rect(this.pos.x,this.pos.y,this.w, this.h);//trunk

            fill(0,this.color,0,200);
            ellipse(this.pos.x ,this.pos.y,this.s + this.h*0.2);
            ellipse(this.pos.x + 30,this.pos.y-10,this.s+ this.h*0.2);
            ellipse(this.pos.x + 50,this.pos.y,this.s+ this.h*0.2);
        },
    }

    t.setup(x);
    return t;
}