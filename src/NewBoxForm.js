import React, { useState } from 'react';

const NewBoxForm = ({ addNewBox }) => {
  const initialState = {
    backgroundColor: '',
    width: '',
    height: ''
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }))
  };
  const handleSubmit = (e) => {
    const { backgroundColor, width, height } = formData;

    e.preventDefault();
    addNewBox(backgroundColor, width, height);
    
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bg-color">Background Color: </label>
      <input 
        id="bg-color"
        name="backgroundColor" 
        type="text" 
        placeholder="Background Color" 
        value={formData.backgroundColor}
        onChange={handleChange} 
      />
      <label htmlFor="width">Width (px): </label>
      <input 
        id="width"
        name="width" 
        type="text" 
        placeholder="Width" 
        value={formData.width}
        onChange={handleChange} 
      />
      <label htmlFor="height">Height (px): </label>
      <input 
        id="height"
        name="height" 
        type="text" 
        placeholder="Height" 
        value={formData.height}
        onChange={handleChange} 
      />
      <button>Add Box</button>
    </form>
  )
};

export default NewBoxForm;