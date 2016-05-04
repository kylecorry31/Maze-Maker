function CellGrid(rows, columns, gridWidth) {
    this.grid = [];
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            this.grid.push(new Cell(i, j, gridWidth));
        }
    }

    this.numColumns = function() {
        return columns;
    }

    this.numRows = function() {
        return rows;
    }

    this.get = function(row, column) {
        if (row < 0 || column < 0 || row > this.numRows() - 1 || column > this.numColumns() - 1) {
            return undefined;
        }
        return this.grid[column + row * this.numRows()];
    }

    this.set = function(row, column, value) {
        this.grid[column + row * this.numRows()] = value;
    }

    this.getTotalCells = function() {
        return this.numColumns() * this.numRows();
    }
}
