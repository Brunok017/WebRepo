console.log("Hello")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const ctx2 = canvas.getContext("2d")

let x =0;
let y = 230;
let vx = 0;
let vy = 0;

let P2x = 500;
let P2y = 230;
let P2vx = 0;
let P2vy = 0;


function updateP1(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x += vx;
    y += vy;
    ctx.fillRect(x, y, 25, 150)
    requestAnimationFrame(updateP1)
}

function Hel(){
    alert("hello")
}

updateP1()
