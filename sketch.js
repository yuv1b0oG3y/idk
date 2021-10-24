var yeet
function setup() {
  createCanvas(400,400);
  yeet = createSprite(200, 200, 20, 20);
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyIsDown(UP_ARROW)) {
    yeet.y = yeet.y - 1
  }
  if (keyIsDown(DOWN_ARROW)) {
    yeet.y = yeet.y + 1
  }
  if (keyIsDown(RIGHT_ARROW)) {
    yeet.x = yeet.x + 1
  }
  if (keyIsDown(LEFT_ARROW)) {
    yeet.x = yeet.x - 1
  }
}




