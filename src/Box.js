import React from 'react';

const Box = ({ backgroundColor, width, height}) => {
  const style = {
    backgroundColor,
    width,
    height
  }

  return (
    <div style={style}>
    </div>
  )
};

export default Box;