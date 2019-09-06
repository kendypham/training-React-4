/* eslint-disable array-callback-return */
import React, { Component, Fragment } from 'react'
import Square from './Square'
class Board extends Component {

  /**
   * @param  {number} i - the value and index of square in squares array
   * 
   */

  renderSquare(i) {
    return (
      <Square
        squaresWin={this.props.squaresWin}
        index={i}
        isClick={this.props.isClick}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  /**
   * @param  {number} i - To calculate the value of square
   */

  handleSquare(i) {
    return <div className="board-row">
      {
        this.props.squares.map((value, index) => {
          if (index >= i * this.props.numberOfRow && index < (i + 1) * this.props.numberOfRow) {
            return <Fragment key={index}>{this.renderSquare(index)}</Fragment>
          }
        })
      }
    </div>
  }

  /**
   * Render three rows of board
   */

  squareToRender() {
    const element = [];
    for (let i = 0; i < this.props.numberOfRow; i++) {
      element.push(this.handleSquare(i))
    }
    return element.map((item, index) => <Fragment key={index}>{item}</Fragment>);
  }

  /**
   * Render board
   */

  render() {
    return (
      <div>
        {this.squareToRender()}
      </div>
    )
  }
}

export default Board