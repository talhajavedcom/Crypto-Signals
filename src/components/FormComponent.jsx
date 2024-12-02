// src/components/FormComponent.jsx
import React, { useState, useEffect } from 'react';
import './FormComponent.css'; // Import your CSS file for FormComponent styling

const FormComponent = ({ onFormChange }) => {
    const [formData, setFormData] = useState({
        coinPair: '',
        position: 'LONG/BUY',
        entryPoint: '',
        leverage: 5,
        stopLoss: '',
        takeProfit: '' // Add this line for the new TP field
    });

    useEffect(() => {
        onFormChange(formData);
    }, [formData, onFormChange]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form className="form-container">
            <div className="form-row">
                <label className="form-label">
                    Coin/Pair:
                    <input
                        placeholder='BTC/USDT'
                        type="text"
                        name="coinPair"
                        value={formData.coinPair}
                        onChange={handleChange}
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    Position:
                    <select
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="form-input"
                    >
                        <option value="LONG/BUY">LONG/BUY</option>
                        <option value="SHORT/SELL">SHORT/SELL</option>
                    </select>
                </label>
            </div>
            <div className="form-row">
                <label className="form-label">
                    Entry Point:
                    <input
                        type="text"
                        name="entryPoint"
                        value={formData.entryPoint}
                        onChange={handleChange}
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    Leverage:
                    <select
                        name="leverage"
                        value={formData.leverage}
                        onChange={handleChange}
                        className="form-input"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                    </select>
                </label>
            </div>
            <div className="form-row">
                <label className="form-label">
                    Stop Loss:
                    <input
                        type="text"
                        name="stopLoss"
                        value={formData.stopLoss}
                        onChange={handleChange}
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    Take Profit:
                    <input
                        type="text"
                        name="takeProfit"
                        value={formData.takeProfit}
                        onChange={handleChange}
                        className="form-input"
                    />
                </label>
            </div>
        </form>
    );
};

export default FormComponent;
