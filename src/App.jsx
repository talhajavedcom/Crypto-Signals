// src/App.jsx
import React, { useState } from 'react';
import FormComponent from './components/FormComponent.jsx';
import ImageGenerator from './components/ImageGenerator.jsx';
import './App.css';

const App = () => {
    const [formData, setFormData] = useState({
        coinPair: '',
        position: 'LONG',
        entryPoint: '',
        leverage: 5,
        stopLoss: ''
    });

    const handleFormChange = (data) => {
        setFormData(data);
    };

    return (
        <div className="App">
            <h1>Future Signal Generator</h1>
            <FormComponent onFormChange={handleFormChange} />
            <ImageGenerator data={formData} />
        </div>
    );
};

export default App;
