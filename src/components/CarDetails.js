import React from 'react';

function CarDetails({ car, onBack, onTradeIn }) {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h2>{car.make} {car.model} ({car.year})</h2>
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        style={{
          maxWidth: '600px',
          maxHeight: '400px',
          width: 'auto',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
          borderRadius: '10px',
        }}
      />
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={onTradeIn}
          style={{
            cursor: 'pointer',
            marginLeft: '20px',
            marginRight: '20px',
            padding: '10px',
            backgroundColor: '#444',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.15s, color 0.15s',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#444';
            e.target.style.color = '#fff';
          }}
        >
          Apply for Trade-in
        </button>
        <button
          onClick={onBack}
          style={{
            cursor: 'pointer',
            padding: '10px',
            backgroundColor: '#444',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.15s, color 0.15s',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#444';
            e.target.style.color = '#fff';
          }}
        >
          Back to Listings
        </button>
      </div>
    </div>
  );
}

export default CarDetails;
