import React, { useState } from 'react';

const BoxList = () => {
  const [boxes, setBoxes] = useState([{
    backgrouncColor: 'blue',
    width: '30px',
    height: '30px'
  }]);
};

export default BoxList;