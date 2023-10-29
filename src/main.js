// left = 37 up = 38 right = 39 down = 40
// red = 206, green = 246, blue = 247, purple = 248, orange = 249, yellow = 286
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 800;

//Load Images ---

const background = new Image();
background.src = './img/beginnerJungle.png';

const foreground = new Image();
foreground.src = './img/beginnerJungleForeground.png';

const beginnerJungleMap = mapMaker();
console.log(beginnerJungleMap)

let inBattle = false

window.addEventListener('keydown', (e) => {
    if (!mainChar.moving && !inBattle) {
        switch(e.key) {
            case 'd':
                mainChar.move('right')
                break;
            case 'a':
                mainChar.move('left')
                break;
            case 'w':
                mainChar.move('up')
                break;
            case 's':
                mainChar.move('down')
                break;
        }
    }
});


mainCharSheet.onload = () => {
    ctx.imageSmoothingEnabled = false
    start();
}

const start = () => {

    loop();
}

const update = () => {
    if (!mainChar.moving && mainChar.srcX == 16) mainChar.srcX = 32
    if (!mainChar.moving && mainChar.srcX == 48) mainChar.srcX = 0
    if (mainChar.moving) {
        mainChar.frame++
        if (mainChar.frame % 6 == 0) {
            mainChar.srcX += 16;
            if (mainChar.srcX > 48) mainChar.srcX = 0
            if (mainChar.frame > 10000) mainChar.frame = 0
        }
    }
}

const draw = () => {
    ctx.save()
    ctx.translate(-cam.x, -cam.y);
    ctx.drawImage(background, 0, 0, background.width, background.height, 0, 0, background.width * 5, background.height * 5);
    mainChar.draw(ctx);
    ctx.drawImage(foreground, 0, 0, foreground.width, foreground.height, 0, 0, foreground.width * 5, foreground.height * 5);
    ctx.restore()
}

const loop = () => {
    window.requestAnimationFrame(loop, canvas);
    if (!inBattle) {
        update()
        draw();
    } else {
        battleLoop();
    }
}


