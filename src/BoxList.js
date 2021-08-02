import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addNewBox = (backgroundColor, width, height) => {
    setBoxes(boxData => (
      [...boxData, {backgroundColor, width: width + 'px', height: height + 'px', id: uuid()}]
    ))
  };
  const removeBox = id => {
    setBoxes(currBoxes => (
      currBoxes.filter(box => box.id !== id)
    ))
  };

  return (
    <div className="BoxList">
      <h2>Box List</h2>
      <NewBoxForm addNewBox={addNewBox} />
      {boxes.map(box => 
      <Box 
        removeBox={removeBox}
        key={uuid()}
        id={box.id}
        backgroundColor={box.backgroundColor}
        height={box.height}
        width={box.width} 
      />)}
    </div>
  )
};

export default BoxList;