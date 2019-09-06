import React from 'react';
/**
 * @constructor
 * @param {object} props - receive data from board
 */
function Square(props) { 
  const classVar = props.squaresWin.includes(props.index)  ? "square bg-win bg-red" : (props.isClick === props.index ? "square bg-red" : "square") 
  return (
    <button className={classVar} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;