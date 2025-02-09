import React, { useState, useEffect } from 'react';

function CarList({ cars, onSelectCar, removeCar, isAdmin }) {
  const [columns, setColumns] = useState(6);

  // Function to calculate columns based on window width
  const updateColumns = () => {
    const width = window.innerWidth;
    if (width > 1400) setColumns(6);
    else if (width > 1200) setColumns(5);
    else if (width > 1000) setColumns(4);
    else if (width > 800) setColumns(3);
    else if (width > 600) setColumns(2);
    else setColumns(1);
  };

  // Listen for window resize events
  useEffect(() => {
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(250px, 1fr))`,
        gap: '50px', // ✅ Restored spacing
        padding: '20px',
        alignItems: 'start',
        justifyContent: 'center', // ✅ Ensures proper centering
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
              width: '100%',
              maxWidth: '300px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 'auto', // ✅ Ensures items are centered with proper spacing
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
                cursor: 'pointer',
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
