var Wall = {
  TOP: 0,
  BOTTOM: 1,
  LEFT: 2,
  RIGHT: 3
};

function Cell(row, column, size) {
    this.size = size;
    this.row = row;
    this.column = column;
    this.current = false;
    this.visited = false;
    this.walls = [true, true, true, true];
}

Cell.prototype.setWall = function(wall, value) {
    this.walls[wall] = value;
};

Cell.prototype.getSize = function() {
    return this.size;
};

Cell.prototype.getRow = function() {
    return this.row;
};

Cell.prototype.getCol = function() {
    return this.column;
};

Cell.prototype.getX = function() {
    return this.getSize() * this.getCol();
};

Cell.prototype.getY = function() {
    return this.getSize() * this.getRow();
};

Cell.prototype.draw = function() {
    var x = this.getX();
    var y = this.getY();
    noStroke();
    if (this.current) {
        fill(100, 255, 120);
        rect(x, y, this.getSize(), this.getSize());
    } else if (this.visited) {
        fill(bgr);
        rect(x, y, this.getSize(), this.getSize());
    }
    // walls
    stroke(0);
    if (this.walls[Wall.TOP])
        line(x, y, x + this.getSize(), y);
    if (this.walls[Wall.BOTTOM])
        line(x, y + this.getSize(), x + this.getSize(), y + this.getSize());
    if (this.walls[Wall.LEFT])
        line(x, y, x, y + this.getSize());
    if (this.walls[Wall.RIGHT])
        line(x + this.getSize(), y, x + this.getSize(), y + this.getSize());
};
