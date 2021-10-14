try {
    let c=document.getElementById("game");
    c.width=500;
    c.height=500;
    let ctx=c.getContext('2d');
    let x=10;
    let y=10;
    let theta=0;


    function deg2rad(deg) {
        return deg*(Math.PI/180);
    }

    function fd(pix) {
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
        ctx.arc(x,y,5,0,2*Math.PI);
        ctx.fill();

        ctx.strokeStyle="2px black";
        ctx.moveTo(x,y);
        ctx.beginPath();
        ctx.lineTo(x+Math.cos(deg2rad(theta))*5,y+Math.sin(deg2rad(theta))*5);
        ctx.closePath();
        ctx.stroke();
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
