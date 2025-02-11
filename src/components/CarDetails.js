import React from 'react';

function CarDetails({ car, onBack, onTradeIn, addToCart }) {
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
      
      {/* Car Details */}
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#333',
        borderRadius: '10px',
        color: '#fff',
        textAlign: 'left'
      }}>
        <p><strong>Make:</strong> {car.make}</p>
        <p><strong>Model:</strong> {car.model}</p>
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Price:</strong> ${car.price.toLocaleString()}</p>
        <p><strong>Condition:</strong> {car.condition}</p>
          {/* Extra Car Details */}
        <p><strong>Color:</strong> {car.color}</p>
        <p><strong>Mileage:</strong> {car.mileage.toLocaleString()} miles</p>
        <p><strong>Drive Type:</strong> {car.driveType}</p>
        <p><strong>Engine Type:</strong> {car.engineType}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={onTradeIn}
          style={{
            cursor: 'pointer',
            margin: '10px',
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
          onClick={() => addToCart(car)}
          style={{
            cursor: 'pointer',
            margin: '10px',
            padding: '10px',
            backgroundColor: 'green',
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
            e.target.style.backgroundColor = 'green';
            e.target.style.color = '#fff';
          }}
        >
          Add to Cart
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
