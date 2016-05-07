function CellGrid(rows, columns, gridWidth) {
    this.grid = [];
    this.columns = columns;
    this.rows = rows;
    this.gridWidth = gridWidth;

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            this.grid.push(new Cell(i, j, gridWidth));
        }
    }
}

CellGrid.prototype.numColumns = function() {
    return this.columns;
};

CellGrid.prototype.numRows = function() {
    return this.rows;
};

CellGrid.prototype.get = function(row, column) {
    if (row < 0 || column < 0 || row > this.numRows() - 1 || column > this.numColumns() - 1) {
        return undefined;
    }
    return this.grid[column + row * this.numRows()];
};

CellGrid.prototype.set = function(row, column, value) {
    this.grid[column + row * this.numRows()] = value;
};

CellGrid.prototype.getTotalCells = function() {
    return this.numColumns() * this.numRows();
};
