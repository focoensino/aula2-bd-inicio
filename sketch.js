var ball

function setup() {
  ball = createSprite(250, 250, 20, 20)
  ball.shapeColor = 'red'
}

function draw() {
  background('white')
  if (keyDown(RIGHT_ARROW)) {
    changePosition(2, 0)
  } else if (keyDown(LEFT_ARROW)) {
    changePosition(-2, 0)
  } else if (keyDown(UP_ARROW)) {
    changePosition(0, -2)
  } else if (keyDown(DOWN_ARROW)) {
    changePosition(0, 2)
  }
  drawSprites()
}

function changePosition(x, y) {
  ball.y = ball.y + y
  ball.x = ball.x + x
}
