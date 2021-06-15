class Maze{
    constructor(){
        this.created = false;
        this.rows = rows;
        this.columns = cols;
        for (var j = 0; j < this.rows; j++) {
            for (var i = 0; i < this.columns; i++) {
              var cell = new Cell(i, j);
              grid.push(cell);
//              console.log([i,w]);
            }
          }
        this.current = grid[0];
        this.stack = [];
        while(this.created === false){
              this.current.visited = true;
              var next = this.current.checkNeighbors();
              if(next){
                // STEP 1
                next.visited = true;
                //STEP 2
                this.stack.push(this.current);
                // STEP 3
                removeWalls(this.current,next);
                // STEP 4
                this.current = next;
              }else if(this.stack.length > 0){ 
                this.current = this.stack.pop();
              }
              if(this.stack.length <= 0){
                  this.created = true;
              }
        }
    }
    /*
        Creating function to display the maze.
     */
    display(){
        for (var i = 0; i < grid.length; i++) {
            grid[i].display();
          }
    }
}