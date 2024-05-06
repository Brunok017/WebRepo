window.addEventListener('load', ()=> {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")

    canvas.height=window.innerHeight
    canvas.width=window.innerWidth

    
    ctx.fillStyle="grey"
    ctx.fillRect(50, 400, 30, 150)
    ctx.fill()
    ctx.fillStyle="blue"
    ctx.beginPath();
    ctx.moveTo(80, 550);
    ctx.lineTo(50, 550);
    ctx.lineTo(200, 750);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle="black"
    ctx.beginPath();
    ctx.moveTo(500,500);
    ctx.lineTo(200,100);
    ctx.lineTo(200, 150)
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "grey";
    ctx.fillRect(550, 250, 80, 80);
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(500,500);
    ctx.lineTo(100,150);
    ctx.lineTo(200, 150)
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.moveTo(200,150);
    ctx.lineTo(200,100);
    ctx.lineTo(100,150)
    ctx.closePath();
    ctx.fill()
    ctx.fillStyle="blue"
    ctx.beginPath();
    ctx.moveTo(550,330);
    ctx.lineTo(629.5,330);
    ctx.lineTo(850,700)
    ctx.closePath();
    ctx.fill()
    ctx.fillStyle="black"
    ctx.beginPath();
    ctx.moveTo(629.5,330);
    ctx.lineTo(629.5,250);
    ctx.lineTo(850,700)
    ctx.closePath();
    ctx.fill()
    
    
});





