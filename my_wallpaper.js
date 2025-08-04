//your parameter variables go here!
let heartsize  = 0.7;
let heartColor = '#ffffff';
let doubleHeart = false;
let heartBorder = false;
let bow = false;
let backgroundColor = [250, 202, 214];



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 150;
  pWallpaper.grid_settings.cell_height = 150;
  pWallpaper.grid_settings.row_offset  = 50;
}


function wallpaper_background() {
  background(250, 202, 214); 
}

//This function draws one tile
function draw_tile(x, y, width, height) {
  push(); // phoebe was here
  translate(x + width / 2, y + height / 2);
  my_symbol();
  pop();
}

//This function draws the heart using parameter variables
function my_symbol() {
  noStroke();

  if(doubleHeart) {
    drawHeart(-15, 0, heartsize, heartColor);
    drawHeart(15,0, heartsize, heartColor);
  } else {
    drawHeart(0, 0, heartsize, heartColor);
  }

  if(heartBorder) {
    drawHeartBorder(0, 0, heartsize);
  }

  if(bow) {
    drawBow(0, -40, '#e249b1ff');
  }
}

//Custom function to draw a heart shape 《3
function drawHeart(x, y, size, color){
  push();
  translate(x, y);
  scale(size);
  fill(color);
  beginShape();
  vertex(0, -10);
  bezierVertex(-15, -30, -40, -5, 0, 20);
  bezierVertex(40, -5, 15, -30, 0, -10);
  endShape(CLOSE);

  pop();
}

function drawHeartBorder(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noFill();
  stroke('#f6a3d7ff');
  strokeWeight(3);
  beginShape();
  vertex(0, -10);
  bezierVertex(-15, -30, -40, -5, 0, 20);
  bezierVertex(40, -5, 15, -30, 0, -10);
  endShape(CLOSE);
  pop();
}

function drawBow(x, y, color) {
  push();
  translate(x, y);
  fill(color);
  noStroke();
  triangle(-10, 0, -20, -10, -20, 10);
  triangle(10, 0, 20, -10, 20, 10);
  ellipse(0, 0, 10, 10);
  pop();
}
