class Player {
    constructor(xInput, yInput) {
        this.name = null;
        this.character = null;
        this.sprite = createSprite(xInput, yInput, 10, 10);
    }
    display() {
        switch (this.character) {
            case "ch1":
                this.sprite.shapeColor = "red";
                break;
            case "ch2":
                this.sprite.shapeColor = "blue";
                break;
            case "ch3":
                this.sprite.shapeColor = "green";
            case "ch2":
                this.sprite.shapeColor = "yellow";
                break;
        }

    }
    move() {

        if (keyDown("LEFT")) {
            this.sprite.x -= 5;
          }
          if (keyDown("RIGHT")) {
            this.sprite.x += 5;
          }
          if (keyDown("UP")) {
            this.sprite.y -= 5;
          }
          if (keyDown("DOWN")) {
            this.sprite.y += 5;
          }
    }
    kill() {

    }
    setCharacter(){
        var char = this.character;
        switch(char){
            case "ch1" : 
            this.sprite.shapeColor = "blue";
            break;
            case "ch2" : 
            this.sprite.shapeColor = "green";
            break;
            case "ch3" : 
            this.sprite.shapeColor = "yellow";
            break;
            case "ch4" : 
            this.sprite.shapeColor = "red";
            break;
        }
    }
}