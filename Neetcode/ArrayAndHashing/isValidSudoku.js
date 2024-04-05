
var isValidSudoku = function(board) {
    let bool = true;
    let arr = [];

    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[i].length; j++) {
        if(board[i][j] !== '.') {
          arr.push(board[i][j]);
        }
      }
      const newArr = arr.sort((a,b) => a - b);
      for(let k = 0; k < newArr.length; k++) {
        if(newArr[k] === newArr[k-1]) {
          bool = false;
        }
      }
      console.log('---')
      arr = []
    }
    return bool;
};

console.log(isValidSudoku([["7","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))