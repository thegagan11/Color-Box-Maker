import React, { useState } from 'react';



function NewBoxForm({ addBox }) {

  const [formData, setFormData] = useState({

    width: '',
    height: '',
    backgroundColor: ''
  });



  const handleChange = e => {

    const { name, value } = e.target;

    setFormData(formData => ({

      ...formData,

      [name]: value
    }));
  };


  const handleSubmit = e => {

    e.preventDefault();

    addBox({ ...formData, id: Math.random() });

    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  return (

    <form onSubmit={handleSubmit}>
      <div>
    // Label for widht input.
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          name="width"
          id="width"
          value={formData.width}

          onChange={handleChange}
        />
      </div>
      <div>
    // Label for height input.
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          name="height"
          id="height"
          value={formData.height}
   
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          type="text"
          name="backgroundColor"
          id="backgroundColor"
          value={formData.backgroundColor}
 
          onChange={handleChange}
        />
      </div>
    // Submit button for the form.
      <button>Add a new box</button>
    </form>
  );
}

export default NewBoxForm;
