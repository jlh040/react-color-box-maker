import React from 'react';

const Box = ({ removeBox, backgroundColor, width, height, id}) => {
  const style = {
    backgroundColor,
    width,
    height
  }

  return (
    <div>
      <div style={style}>
      </div>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  )
};

export default Box;