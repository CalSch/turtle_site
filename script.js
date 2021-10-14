try {
    let c=document.getElementById("game");
    let ctx=c.getContext('2d');
    
    ctx.fillStyle="red";
    ctx.fillRect(0,0,10,10);
} catch(e) {
    alert("error: "+e)
}
