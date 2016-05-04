var WALL_TOP = 0,
    WALL_BOTTOM = 1,
    WALL_LEFT = 2,
    WALL_RIGHT = 3;

function Cell(row, column, size) {

    this.current = false;
    this.visited = false;

    this.walls = [true, true, true, true];

    this.setWall = function(wall, value) {
        this.walls[wall] = value;
    }

    this.getSize = function() {
        return size;
    }

    this.getRow = function() {
        return row;
    }

    this.getCol = function() {
        return column;
    }

    this.getX = function() {
        return this.getSize() * this.getCol();
    }

    this.getY = function() {
        return this.getSize() * this.getRow();
    }

    this.draw = function() {
        var x = this.getX();
        var y = this.getY();
        noStroke();
        if (this.current) {
            fill(0, 255, 0);
            rect(x, y, this.getSize(), this.getSize());
        } else if (this.visited) {
            fill(255, 0, 0);
            rect(x, y, this.getSize(), this.getSize());
        }
        // walls
        stroke(255);
        if (this.walls[WALL_TOP])
            line(x, y, x + this.getSize(), y);
        if (this.walls[WALL_BOTTOM])
            line(x, y + this.getSize(), x + this.getSize(), y + this.getSize());
        if (this.walls[WALL_LEFT])
            line(x, y, x, y + this.getSize());
        if (this.walls[WALL_RIGHT])
            line(x + this.getSize(), y, x + this.getSize(), y + this.getSize());



    }
}
