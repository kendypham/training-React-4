import React from 'react';

function Square(props) { 
  return (
    <button className={props.isClick === props.index ? "square bg-red" : "square"} onClick={()=>props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;