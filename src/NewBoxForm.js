import React, { useState } from 'react';

const NewBoxForm = () => {
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
    e.preventDefault();
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
      <label htmlFor="width">Width: </label>
      <input 
        id="width"
        name="width" 
        type="text" 
        placeholder="Width" 
        value={formData.width}
        onChange={handleChange} 
      />
      <label htmlFor="height">Height: </label>
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