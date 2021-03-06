try {
    let c=document.getElementById("game");
    c.width=500;
    c.height=500;
    let ctx=c.getContext('2d');
    let x=10;
    let y=10;
    let theta=0;
    let pen_down=true;
    let points=[];


    function deg2rad(deg) {
        return deg*(Math.PI/180);
    }

    function fd(pix) {
        if (pen_down) points.push({x,y});
        x+=Math.cos(deg2rad(theta))*pix;
        y+=Math.sin(deg2rad(theta))*pix;
    }
    function rt(deg) {
        theta+=deg;
    }
    function lt(deg) {
        theta-=deg;
    }
    
    function draw() {
        ctx.fillStyle="white";
        ctx.clearRect(0,0,500,500);

        ctx.fillStyle="red";
        ctx.beginPath();
        ctx.arc(x,y,5,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle="blue";
        ctx.beginPath();
        ctx.arc(x+Math.cos(deg2rad(theta))*5,y+Math.sin(deg2rad(theta))*5,2,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle="black";
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.moveTo(10,10);
        points.forEach(function(p){
            ctx.lineTo(p.x,p.y)
        });
        ctx.stroke();
        ctx.closePath();
    }
    function update() {

    }
    setInterval(function() {
        update();
        draw();
    },1000/60)
} catch(e) {
    alert("error: "+e)
}
