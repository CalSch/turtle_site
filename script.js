try {
    let c=document.getElementById("game");
    c.width=100;
    c.height=100;
    let ctx=c.getContext('2d');
    let x=10;
    let y=10;
    let theta=0;

    function fd(pix) {
        x+=Math.cos(theta)*pix;
        y+=Math.sin(theta)*pix;
    }
    
    function draw() {
        ctx.fillStyle="white";
        ctx.clearRect(0,0,100,100);
        ctx.fillStyle="red";
        ctx.fillRect(x,y,10,10);
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
