import React, { useState } from 'react';

const BoxList = () => {
  const [boxes, setBoxes] = useState([{
    backgrouncColor: 'blue',
    width: '30px',
    height: '30px'
  }]);
};

return (
  <div>
  {boxes.map(box => 
    <Box 
      backgroundColor={box.backgrouncColor}
      height={box.height}
      width={box.width} 
    />)}
  </div>
)

export default BoxList;