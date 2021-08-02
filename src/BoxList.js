import React, { useState } from 'react';
import Box from './Box';

const BoxList = () => {
  const [boxes, setBoxes] = useState([{
    backgroundColor: 'blue',
    width: '55px',
    height: '55px'
  }]);

  return (
    <div>
      <h2>Box List</h2>
      {boxes.map(box => 
      <Box 
        backgroundColor={box.backgroundColor}
        height={box.height}
        width={box.width} 
      />)}
    </div>
  )
};

export default BoxList;