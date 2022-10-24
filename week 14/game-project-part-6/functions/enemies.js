function enemy(x,y){
    
    e = {
        pos : undefined,
        setup : function(x,y)
        {
            this.pos = createVector(x, y);
        },
        draw : function()
        {
            
        },

    }
    e.setup(x,y);
    return e;
}