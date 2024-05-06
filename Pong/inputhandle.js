


addEventListener("keydown", function(e){
    console.log(e.code)
    if (e.code == 'KeyW') vy = -7
    else if (e.code == 'KeyS') vy = 7
    
})

addEventListener("keyup", function(e){
    if (e.code == 'KeyW') vy = 0;
    else if (e.code == 'KeyS') vy =0;
})