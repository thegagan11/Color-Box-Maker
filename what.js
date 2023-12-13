import React, { useState } from 'react';

// Box component
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
            <div style={style}></div>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

// NewBoxForm component
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
                <label htmlFor="width">Width:</label>
                <input type="text" name="width" value={formData.width} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="height">Height:</label>
                <input type="text" name="height" value={formData.height} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="backgroundColor">Background Color:</label>
                <input type="text" name="backgroundColor" value={formData.backgroundColor} onChange={handleChange} />
            </div>
            <button>Add a new box</button>
        </form>
    );
}

// BoxList component
function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = newBox => {
        setBoxes(boxes => [...boxes, newBox]);
    };

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(box => (
                <Box
                    key={box.id}
                    id={box.id}
                    width={box.width}
                    height={box.height}
                    backgroundColor={box.backgroundColor}
                    removeBox={removeBox}
                />
            ))}
        </div>
    );
}

// App component
function App() {
    return (
        <div className='App'>
            <BoxList />
        </div>
    );
}

export default App;
