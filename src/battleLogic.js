const axie = {
    srcX : 0,
    srcY : 0,
    width : 243,
    height : 193,
    x : 200, 
    // y = widthScaled * startingTile - heightScaled/2
    y : 500,
    img : bubaIdle,
    frame: 0, 

    draw: function(ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width, this.height);

    }
}

const chimera = {
    srcX : 0,
    srcY : 0,
    width : 156,
    height : 140,
    x : 600, 
    // y = widthScaled * startingTile - heightScaled/2
    y : 550,
    img : slimeIdle,
    frame: 0, 

    draw: function(ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width, this.height);

    }
}

const battleStart = () => {
    gsap.to('#screen', {
        opacity: 0,
        duration: 1.0
    })

    inBattle = true
}

const battleDraw = () => {
    ctx.save()
    ctx.clearRect( 0, 0, canvas.width, canvas.height);
    axie.draw(ctx);
    chimera.draw(ctx);
    ctx.restore()
}

const battleUpdate = () => {
    axie.frame++
        if (axie.frame % 10 == 0) {
            axie.srcX += 243;
            if (axie.srcX > 1458) axie.srcX = 0
            if (axie.frame > 200) {
                axie.frame = 0
                gsap.to('#screen', {
                    opacity: 1,
                    duration: 1.0,
                    onComplete: () => {
                        gsap.to('#screen', {
                            opacity: 0,
                            duration: 1.0
                        })
                        inBattle = false
                    }
                })
            }
        }
        chimera.frame++
        if (chimera.frame % 10 == 0) {
            chimera.srcX += 156;
            if (chimera.srcX > 936) chimera.srcX = 0
            if (chimera.frame > 200) {
                chimera.frame = 0
            }
        }
}

const battleLoop = () => {
    battleUpdate();
    battleDraw();
}