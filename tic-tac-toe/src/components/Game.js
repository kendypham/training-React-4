import React, { Component } from 'react';
import Board from './Board'

/**
 * Total of cells you want to render
 */
const numberOfCell = 25

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(numberOfCell).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
      isClick : undefined,
      squaresWin : [],
      numberOfRow : Math.sqrt(numberOfCell)
    };
  }
  
  /**
   * @param  {number} i - the index of square in array
   */

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i] || this.state.isWin) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      isClick: i,
      isWin : false
    });
  }

  /**
   * @param  {number} step - The value which stores index of history array
   */

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      isClick : undefined,
      squaresWin : [],
      isWin : false
    });
  }

  /**
   * @param  {Array} squares - The currents squares array
   */

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && !this.state.isWin) {
        this.setState({
          squaresWin : lines[i],
          isWin : true
        })
      }
    }
  }

  componentDidUpdate(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    this.calculateWinner(current.squares);
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (this.state.isWin) {
      status = 'Winner: ' + (!this.state.xIsNext ? 'X' : 'O');
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} isClick={this.state.isClick} squaresWin={this.state.squaresWin}
            onClick={(i) => this.handleClick(i)} numberOfRow={this.state.numberOfRow}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;