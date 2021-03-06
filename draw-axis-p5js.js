function drawAxis() {
    for (let indexY = 0; indexY <= height; indexY += 100) {
        for (let indexX = 0; indexX <= width; indexX += 100) {
            drawPoint(indexX, indexY);
        };
    }
}

function drawPoint(x, y) {
    strokeWeight(8);
    point(x, y);
    textSize(15);
    text(`(${x},${y})`, x, y + 18);
}