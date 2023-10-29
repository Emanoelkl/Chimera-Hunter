let cam = {
    x: 260,
    y: 2400,
    width: canvas.width,
    height: canvas.height
};

const mainCharSheet = new Image();
mainCharSheet.src = './img/mainCharSheet.png';

const mainChar =  {
    moving: false,
    srcX : 0,
    srcY : 32,
    width : 16,
    height : 32,
    tile: [35,9],
    nextTile: [0,0],
    x : (16*5) * 9, 
    // y = widthScaled * startingTile - heightScaled/2
    y : ((16*5) * 35) - (16*5),
    img : mainCharSheet,
    frame: 0,
    
    
    draw : function(ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width *5, this.height *5);
    },

    move : function(direction) {
        switch(direction) {
            case 'right':
                this.moving = true
                this.nextTile = [this.tile[0], this.tile[1] + 1]
                this.srcY = this.height * 2
                if (beginnerJungleMap[this.nextTile[0]][this.nextTile[1]] != 206) { 
                    this.tile = [this.nextTile[0], this.nextTile[1]]
                    var tl = gsap.timeline();
                    tl.to(mainChar, {
                        x: this.x + 16*5,
                        duration: 0.2,
                        onComplete: () => {
                            this.moving = false
                        }
                    }).to(cam, {
                        x: cam.x + 16*5,
                        duration: 0.2
                    }, "<")
                } else this.moving = false

                break;
            
            case 'left':
                this.moving = true
                this.nextTile = [this.tile[0], this.tile[1] - 1]
                this.srcY = this.height * 3
                if (beginnerJungleMap[this.nextTile[0]][this.nextTile[1]] != 206) { 
                    this.tile = [this.nextTile[0], this.nextTile[1]]
                    var tl = gsap.timeline();
                    tl.to(mainChar, {
                        x: this.x - 16*5,
                        duration: 0.2,
                        onComplete: () => {
                            this.moving = false
                        }
                    }).to(cam, {
                        x: cam.x - 16*5,
                        duration: 0.2
                    }, "<")
                } else this.moving = false

                break;
            
            case 'up':
                this.moving = true
                this.nextTile = [this.tile[0] - 1, this.tile[1]]
                this.srcY = this.height * 1
                if (beginnerJungleMap[this.nextTile[0]][this.nextTile[1]] != 206) { 
                    this.tile = [this.nextTile[0], this.nextTile[1]]
                    var tl = gsap.timeline();
                    tl.to(mainChar, {
                        y: this.y - 16*5,
                        duration: 0.2,
                        onComplete: () => {
                            this.moving = false
                        }
                    }).to(cam, {
                        y: cam.y - 16*5,
                        duration: 0.2
                    }, "<")
                } else this.moving = false

                break;

            case 'down':
                this.moving = true
                this.nextTile = [this.tile[0] + 1, this.tile[1]]
                this.srcY = this.height * 0
                if (beginnerJungleMap[this.nextTile[0]][this.nextTile[1]] != 206) { 
                    this.tile = [this.nextTile[0], this.nextTile[1]]
                    var tl = gsap.timeline();
                    tl.to(mainChar, {
                        y: this.y + 16*5,
                        duration: 0.2,
                        onComplete: () => {
                            this.moving = false
                        }
                    }).to(cam, {
                        y: cam.y + 16*5,
                        duration: 0.2
                    }, "<")
                } else this.moving = false

                //console.log(this.tile)
                //console.log(this.nextTile)
                //console.log(beginnerJungleMap[this.nextTile[0]][this.nextTile[1]])

                break;
            
        }
        if (beginnerJungleMap[this.tile[0]][this.tile[1]] == 246) {
            console.log('mato verde')
            if (Math.random() < 0.01) {
                gsap.to('#screen', {
                    opacity: 1,
                    duration: 1.0,
                    onComplete: () => {
                        battleStart();
                    }
                })
            }
        }
        else if (beginnerJungleMap[this.tile[0]][this.tile[1]] == 247) {
            console.log('mato azul')
            if (Math.random() < 0.01) {
                gsap.to('#screen', {
                    opacity: 1,
                    duration: 1.0,
                    onComplete: () => {
                        battleStart();
                    }
                })
            }
        }
        else if (beginnerJungleMap[this.tile[0]][this.tile[1]] == 248) {
            console.log('mato roxo')
            if (Math.random() < 0.01) {
                gsap.to('#screen', {
                    opacity: 1,
                    duration: 1.0,
                    onComplete: () => {
                        battleStart();
                    }
                })
            }
        }
        else if (beginnerJungleMap[this.tile[0]][this.tile[1]] == 249) {
            console.log('mato laranja')
            if (Math.random() < 0.01) {
                gsap.to('#screen', {
                    opacity: 1,
                    duration: 1.0,
                    onComplete: () => {
                        battleStart();
                    }
                })
            }
        }
        else if (beginnerJungleMap[this.tile[0]][this.tile[1]] == 286) {
            alert('You found the exit, thank you for playing')
            //cam.x = 260
           //cam.y = 2400
            //this.x = (16*5) * 9
            //this.y = ((16*5) * 35) - (16*5)

        }
    }
    
}