// You are given a 9 x 9 Sudoku board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

// Example 1:
const boardOne = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// Output: true

// Example 2:
const boardTwo = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// Output: false;

function isSudokuValid(board) {
  for (let i = 0; i < 9; i++) {
    let rowSet = new Set();
    let colSet = new Set();
    let gridSet = new Set();

    for (let j = 0; j < 9; j++) {
      const rowKey = board[i][j];
      if (rowKey !== ".") {
        if (rowSet.has(rowKey)) {
          return false;
        }
        rowSet.add(rowKey);
      }
    }

    for (let j = 0; j < 9; j++) {
      const colKey = board[j][i];
      if (colKey !== ".") {
        if (colSet.has(colKey)) {
          return false;
        }
        colSet.add(colKey);
      }
    }

    //     if (i === 0) {
    //       startRow = 0;
    //       startCol = 0;
    //     }

    //     if (i === 1) {
    //       startRow = 0;
    //       startCol = 3;
    //     }

    //     if (i === 2) {
    //       startRow = 0;
    //       startCol = 6;
    //     }

    //     if (i === 3) {
    //       startRow = 3;
    //       startCol = 0;
    //     }
    //     if (i === 4) {
    //       startRow = 3;
    //       startCol = 3;
    //     }

    //     if (i === 5) {
    //       startRow = 3;
    //       startCol = 6;
    //     }

    //     if (i === 6) {
    //       startRow = 6;
    //       startCol = 0;
    //     }

    //     if (i === 7) {
    //       startRow = 6;
    //       n = 3;
    //     }

    //     if (i === 8) {
    //       startRow = 6;
    //       startCol = 6;
    //     }
    const startRow = Math.floor(i / 3) * 3;
    const startCol = (i % 3) * 3;

    for (let m = startRow; m < startRow + 3; m++) {
      for (let n = startCol; n < startCol + 3; n++) {
        const gridKey = board[m][n];
        if (gridKey !== ".") {
          if (gridSet.has(gridKey)) {
            return false;
          }
          gridSet.add(gridKey);
        }
      }
    }
  }

  return true;
}

console.log(isSudokuValid(boardTwo));
