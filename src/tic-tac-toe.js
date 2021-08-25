class TicTacToe {
    
    constructor() {
        this.matrix = [
          [null, null, null], 
          [null, null, null], 
          [null, null, null]
        ];
        this.currentTurn = 'x';
        this.winner = null;
        
    }

    getCurrentPlayerSymbol() {
        return this.currentTurn;  
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.matrix[rowIndex][columnIndex] === null) {
        this.matrix[rowIndex][columnIndex] = this.currentTurn;
        this.currentTurn = (this.currentTurn === 'x') ? 'o' : 'x';
      } 
    }

    isFinished() {
      return (this.getWinner() || this.isDraw()) ? true : false;
    }

    getWinner() {
      for (let i = 0; i < 3; i++) {
        if (this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][1] === this.matrix[i][2]) {
          this.winner = this.matrix[i][0];
        }        
      }
      for (let i = 0; i < 3; i++) {
        if (this.matrix[0][i] === this.matrix[1][i] && this.matrix[1][i] === this.matrix[2][i]) {
          this.winner = this.matrix[0][i]; 
        }       
      }

        if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) this.winner = this.matrix[0][0]; 
        if (this.matrix[2][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[0][2]) this.winner = this.matrix[2][0];       
      return this.winner;
    }

    noMoreTurns() {
      for(let i = 0; i < this.matrix.length; i++) {
        if (this.matrix[i].includes(null)) return false;
      }
      return true;
    }

    isDraw() {
      this.getWinner();

      if (this.winner === 'x' || this.winner === 'o') {
        return false;
      }

      return this.noMoreTurns();
    }
    

    getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
