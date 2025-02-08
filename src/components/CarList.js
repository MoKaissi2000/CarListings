import React from 'react';

function CarList({ cars, onSelectCar, removeCar, isAdmin }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '20px',
        padding: '20px',
        alignItems: 'start',
      }}
    >
      {cars.length > 0 ? (
        cars.map((car) => (
          <div
            key={car.id}
            style={{
              backgroundColor: '#333',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              width: '300px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <img
              src={car.image}
              alt={car.model}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '10px' }}
            />
            <h3>{car.make} {car.model}</h3>
            <p>{car.year}</p>
            <p>${car.price.toLocaleString()} - {car.condition}</p>
            <button 
              className="car-button"
              onClick={() => onSelectCar(car)}
              style={{
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
              }}
            >
              View Details
            </button>
            {isAdmin && (
              <button
                onClick={() => removeCar(car.id)}
                style={{
                  marginTop: '10px',
                  padding: '5px',
                  backgroundColor: 'red',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            )}
          </div>
        ))
      ) : (
        <p style={{ color: '#fff', textAlign: 'center', fontSize: '18px' }}>No cars found matching your filters.</p>
      )}
    </div>
  );
}

export default CarList;
