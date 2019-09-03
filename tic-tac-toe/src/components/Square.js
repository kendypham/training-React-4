import React from 'react';

function Square(props) { 
  console.log(props.squaresWin.indexOf(props.index));
  let classVar = props.squaresWin.includes(props.index)  ? "square bg-win bg-red" : (props.isClick === props.index ? "square bg-red" : "square") 
  return (
    <button className={classVar} onClick={()=>props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;