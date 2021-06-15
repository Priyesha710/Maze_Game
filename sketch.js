var gameState = 0, gameWon;
var w;
var maze;
var cols, rows;
var mazeWalls = [];
var grid = [];
var playerObj, keyObj, doorObj;
var backgroundImg;
var obstacleStack = [];
var cellPosStack = [];

function preload() {
  wallImage = loadImage("/Images/wallImage.png");
  boyImg = loadImage("/Images/Boy-character.png"); 
}
function setup() {
  if (mobileDevice) {
    console.log(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);
    if (level === 1) {
      w = 55;
      obstacleStackNo = 20;
    } else if (level === 2) {
      w = 40;
      obstacleStackNo = 30;
    } else if (level === 3) {
      w = 25;
      obstacleStackNo = 40;
    }
    cols = ceil(windowWidth / w);
    rows = ceil(windowHeight / w);

    // set options to prevent default behaviors for swipe, pinch, etc
    var options = {
      preventDefault: true
    };
    // document.body registers gestures anywhere on the page
    var hammer = new Hammer(document.body, options);
    hammer.get('swipe').set({
      direction: Hammer.DIRECTION_ALL
    });
    hammer.on("swipe", swiped);
     
    doorObj = createSprite(windowWidth,5,50,50);
    doorObj.shapeColor = "brown";
 
  } else {
    createCanvas(1200, 1200);
    if (level === 1) {
      w = 60;
      obstacleStackNo = 20;
    } else if (level === 2) {
      w = 40;
      obstacleStackNo = 30;
    } else if (level === 3) {
      w = 30;
      obstacleStackNo = 40;
    }
    cols = floor(width / w);
    rows = floor(height / w);

    doorObj = createSprite(1190,20,50,50);
    doorObj.shapeColor = "brown";
  }
  maze = new Maze();
  playerObj = createSprite(cellPosStack[0][0], cellPosStack[0][1], 20, 20);
  playerObj.lifeLine = 50;
 
  var Pos = Math.round(random(10,cellPosStack.length));
  keyObj = createSprite(cellPosStack[Pos][0],cellPosStack[Pos][1],30,30);
  keyObj.shapeColor = "yellow";
  keyObj.attained = false;

  console.log(playerObj);
  spawnObstacles();
}
function draw() {
  clear();
  //console.log(level);
  if (gameState === 0) {//playing the game
    maze.display();
    for (var i = 0; i < obstacleStack.length; i++) {
      if (
        obstacleStack[i].isTouching(playerObj)) {
        if (keyDown("space")) {
          obstacleStack[i].lifeLine = obstacleStack[i].lifeLine - 1;
        } else {
          playerObj.lifeLine -= 1;
        }
      }
      if (obstacleStack[i].lifeLine <= 0) {
        obstacleStack[i].destroy();
      }
    }
    
    if (playerObj.lifeLine <= 0) {
      playerObj.destroy();
      gameState = 1;
      gameWon = false;
    }

    if(playerObj.isTouching(keyObj)){
      keyObj.attained = true;
    }
    if(keyObj.attained === true){
      if(playerObj.isTouching(doorObj)){
        gameState = 1;
        gameWon = true;
      }
      keyObj.x = playerObj.x;
      keyObj.y = playerObj.y;
      keyObj.depth = playerObj.depth - 1;
    
    }
    if (mobileDevice) {
    } else {
      if (keyDown("left")) {
        playerObj.x -= 5;
      } else if (keyDown("right")) {
        playerObj.x += 5;
      } else if (keyDown("up")) {
        playerObj.y -= 5;
      } else if (keyDown("down")) {
        playerObj.y += 5;
      }
    }
  }else if(gameState === 1){
    playerObj.visible = false;
    doorObj.visible = false;
    keyObj.visible = false;
    for(var i = 0; i<obstacleStack.length; i++){
      obstacleStack[i].visible= false;
    }
    textSize(100);
    textFont("Algerian");
    if(gameWon){
      background("blue");
      text("YOU WON!", 350,600);
    }if(!gameWon){
      background("yellow");
      text("YOU LOST!", 350, 600);
      console.log(
        "You lost."
      );
    }
  }
  drawSprites();
}


function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function removeWalls(a, b) {
  var x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else
    if (x === -1) {
      a.walls[1] = false;
      b.walls[3] = false;
    }
  var y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else
    if (y === -1) {
      a.walls[2] = false;
      b.walls[0] = false;
    }
}

/**
 * Function definition to create obstacles at random 
 */
function spawnObstacles() {
  for (var x = 0; x < obstacleStackNo; x++) {
    var y = Math.round(random(5, cellPosStack.length));
    var z = cellPosStack[y];
    var xPos = z[0];
    console.log();
    var yPos = z[1];
    obstacle = createSprite(xPos, yPos, 15, 15);
    obstacle.shapeColor = 20;
    obstacle.lifeLine = 15;
    obstacleStack.push(obstacle);
  }
}

/**
 * Function definition to move player on swiping on mobile devices
 */
function swiped(event) {
  if (event.direction === 2) { //left
    console.log("you swiped left");
    if (playerObj.x > 10) {
      playerObj.x = playerObj.x - 15;
    }
  } else if (event === 4) {//right
    console.log("you swiped right");
    playerObj.x = playerObj.x + 15;
  } else if (event.direction === 8) {//up
    console.log("you swiped up");
    playerObj.y = playerObj.y - 15;
  } else if (event.direction === 16) { //down
    console.log("you swiped down");
    playerObj.y = playerObj.y + 15;
  }
}
