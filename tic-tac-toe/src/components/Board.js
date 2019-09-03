import React, { Component,Fragment } from 'react'
import Square from './Square'
class Board extends Component {
  renderSquare = (i) => {
    return (
      <Square
        index = {i}
        isClick = {this.props.isClick}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  handleSquare = (item) => {
    return <div className="board-row">
    {
      this.props.squares.map((value, index) => {
        if(index >= item*3 && index < (item + 1)*3){
          return <Fragment key={index}>{this.renderSquare(index)}</Fragment>
        }
      }) 
    }
    </div>
  }

  squareToRender = () => {
    let element = [];
    for(let i = 0; i < 3; i++){
       element.push(this.handleSquare(i))
    }
    return element.map((item,index) => {
      return <Fragment key={index}>{item}</Fragment>;
    });
  }
  render() {
    return (
      <div>
        {this.squareToRender()}
      </div>
    )
  }
}

export default Board