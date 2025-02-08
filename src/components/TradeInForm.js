import React, { useState } from 'react';

function TradeInForm({ onSubmit, onCancel }) {
  const [tradeInData, setTradeInData] = useState({ make: '', model: '', year: '', mileage: '', image: null });

  const handleChange = (e) => {
    setTradeInData({ ...tradeInData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setTradeInData({ ...tradeInData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tradeInData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Trade-in Your Car</h3>
      <input type="text" name="make" placeholder="Make" onChange={handleChange} required />
      <input type="text" name="model" placeholder="Model" onChange={handleChange} required />
      <input type="number" name="year" placeholder="Year" onChange={handleChange} required />
      <input type="number" name="mileage" placeholder="Mileage" onChange={handleChange} required />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit" style={{
                marginTop: '10px',
                padding: '10px',
                backgroundColor: '#444',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor:'pointer',
                transition:'background-color 0.15s, color 0.15s',
                marginLeft:'60px',
                marginRight:'50px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#444';
                e.target.style.color = '#fff';
              }}>Submit</button>
      <button type="button" style={{
                marginTop: '10px',
                padding: '10px',
                backgroundColor: '#444',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor:'pointer',
                transition:'background-color 0.15s, color 0.15s'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#444';
                e.target.style.color = '#fff';
              }} onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default TradeInForm;


