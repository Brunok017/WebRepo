console.log("Hello")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


let x =200;
let y = 200;
let vx = 0;
let vy = 0;


function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x += vx;
    y += vy;
    ctx.fillRect(x, y, 50, 50)
    requestAnimationFrame(update)
}

update()