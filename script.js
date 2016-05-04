var grid;
var current;
var unvisited;
var stack = [];
var end = false;


var rowsAndCols = 40;

function setup() {
    createCanvas(800, 800);
    // setFrameRate(120);
    grid = new CellGrid(rowsAndCols, rowsAndCols, width / rowsAndCols);
    current = grid.get(0, 0);
    unvisited = grid.getTotalCells();
    current.current = true;
    current.visited = true;
    unvisited--;
}

function draw() {
    background(0);

    for (var row = 0; row < grid.numRows(); row++) {
        for (var col = 0; col < grid.numColumns(); col++) {
            grid.get(row, col).draw();
        }
    }
    current.current = false;
    if (unvisited > 0) {
        var neighbor = getRandomNeighbor();
        if (neighbor) {
            stack.push(neighbor);
            removeWall(current, neighbor);
            // fill(255);
            // rect(neighbor.getX(), neighbor.getY(), neighbor.getX() + neighbor.getSize(), neighbor.getY() + neighbor.getSize());
            current = neighbor;
            current.current = true;
            current.visited = true;
            unvisited--;
        } else {
            if (stack.length > 0) {
                current = stack.pop();
                current.current = true;
            }
        }
    } else {
        if (!end) {
            setTimeout(window.location.reload, 5000);
            end = true;
        }
    }
}

function removeWall(a, b) {
    var drow = a.getRow() - b.getRow();
    var dcol = a.getCol() - b.getCol();
    if (drow === 1) {
        a.setWall(WALL_TOP, false);
        b.setWall(WALL_BOTTOM, false);
    } else if (drow === -1) {
        a.setWall(WALL_BOTTOM, false);
        b.setWall(WALL_TOP, false);
    }

    if (dcol === 1) {
        a.setWall(WALL_LEFT, false);
        b.setWall(WALL_RIGHT, false);
    } else if (dcol === -1) {
        a.setWall(WALL_RIGHT, false);
        b.setWall(WALL_LEFT, false);
    }
}

function getRandomNeighbor() {
    var surrounding = [];
    var top = grid.get(current.getRow() - 1, current.getCol());
    var bottom = grid.get(current.getRow() + 1, current.getCol());
    var left = grid.get(current.getRow(), current.getCol() - 1);
    var right = grid.get(current.getRow(), current.getCol() + 1);
    if (top && !top.visited) {
        surrounding.push(top);
    }
    if (bottom && !bottom.visited) {
        surrounding.push(bottom);
    }
    if (left && !left.visited) {
        surrounding.push(left);
    }
    if (right && !right.visited) {
        surrounding.push(right);
    }
    var rand = floor(random(0, surrounding.length));
    return surrounding[rand];
}
