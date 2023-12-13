import React from 'react';



function Box({ id, width, height, backgroundColor, removeBox }) {

    const handleRemove = () => {

    removeBox(id);
  };



  const style = {

    width: `${width}px`,

    height: `${height}px`,

    backgroundColor
  };

  return (
    <div>
    // box div with defined styles.
      <div style={style}></div>
    // Button to remove the box, calling handleRemove on click.
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;
