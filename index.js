const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000
canvas.height = 800


class Block{
    constructor({position}){
        this.position = position
        this.width = 40
        this.height = 40
    }

    draw(color, color2){
        ctx.fillStyle = color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.strokeStyle = color2
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height)
    }


}
class Player{
    constructor({position,velocity}){
        this.position = position
        this.height = 30
        this.width = 30
        this.velocity = velocity
        this.draw()
    }

    draw(){
        ctx.fillStyle = "red"
        ctx.fillRect(this.position.x+5, this.position.y+5,this.height,this.width);
    }

    move({direction}){

    }
    update(){
        this.draw()
        
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

    }
}

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBorder()
    if(player.position.x<40||player.position.x>480){
        player.velocity.x = player.velocity.x*-1
    }else if(player.position.y<40||player.position.y>480){
        player.velocity.y = player.velocity.y*-1
    }

    player.update()
    console.log(player.position)
}



function drawBorder(){
    for(var i=0; i<14; i++){
        for(var j=0; j<14; j++){
            if(j===0|| i===0 || j === 13||i===13){
                var b = new Block({position:{x:40*i,y:j*40}})
                b.draw("green","black")
            }
        }
    }
}



const player = new Player({position:{x:50,y:50},velocity:{x:0,y:0}})

window.addEventListener('keydown',({key})=>{
    switch (key){
    case "w":
        player.velocity.y = -1
        player.velocity.x = 0
    break
    case "s":
        player.velocity.y = 1
        player.velocity.x =0
    break
    case "d":
        player.velocity.x = 1
        player.velocity.y =0
    break
    case "a":
        player.velocity.x = -1
        player.velocity.y =0
    break
    }
})
animate()