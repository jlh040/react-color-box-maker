import React from 'react';
import './Box.css';

const Box = ({ removeBox, backgroundColor, width, height, id}) => {
  const style = {
    backgroundColor,
    width,
    height
  }

  return (
    <div className="Box" data-testid="Box">
      <div className="Box-left"style={style}>
      </div>
      <div className="Box-right">
        <button onClick={() => removeBox(id)}>X</button>
      </div>
    </div>
  )
};

export default Box;