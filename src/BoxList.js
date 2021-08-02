import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
  const [boxes, setBoxes] = useState([{
    backgroundColor: 'blue',
    width: '55px',
    height: '55px'
  }]);
  const addNewBox = (backgroundColor, width, height) => {
    setBoxes(boxData => (
      [...boxData, {backgroundColor, width: width + 'px', height: height + 'px'}]
    ))
  };
  const removeBox = () => {

  };

  return (
    <div>
      <h2>Box List</h2>
      <NewBoxForm addNewBox={addNewBox} />
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