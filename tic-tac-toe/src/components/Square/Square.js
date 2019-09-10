import React from 'react';
/**
 * @constructor
 * @param {object} props - receive data from board
 */
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;