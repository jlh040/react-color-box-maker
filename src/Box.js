import React from 'react';

const Box = ({ removeBox, backgroundColor, width, height, id}) => {
  const style = {
    backgroundColor,
    width,
    height
  }

  return (
    <div className="Box">
      <div style={style}>
      </div>
      <div>
        <button onClick={() => removeBox(id)}>X</button>
      </div>
    </div>
  )
};

export default Box;