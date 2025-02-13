import React, { useState } from 'react';

function AdminPanel({ carListings, addCar, removeCar }) {
  const [newCar, setNewCar] = useState({ 
    make: '', model: '', year: '', price: '', condition: '', image: [], 
    color: '', mileage: '', driveType: '', engineType: '', transmission: ''
  });

  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  // Convert uploaded image to Base64
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const readers = files.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
    });
  
    Promise.all(readers).then(images => {
      setNewCar({ ...newCar, images });
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCar.make || !newCar.model || !newCar.year || !newCar.price || !newCar.condition || !newCar.image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }
    addCar(newCar);
    setNewCar({ make: '', model: '', year: '', price: '', condition: '', images: [], color: '', mileage: '', driveType: '', engineType: '', transmission: '' });
  };

  return (
    <div style={{paddingLeft:'850px', paddingTop:'20px',maxWidth:'1000px'}} >
      <h2 style={{marginLeft:'300px'}} >Admin Panel - Manage Listings</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input style={{marginBottom:'10px'}} type="text" name="make" placeholder="Make" value={newCar.make} onChange={handleChange} required />
        <input style={{marginBottom:'10px'}} type="text" name="model" placeholder="Model" value={newCar.model} onChange={handleChange} required />
        <input style={{marginBottom:'10px'}} type="number" name="year" placeholder="Year" value={newCar.year} onChange={handleChange} required />
        <input style={{marginBottom:'10px'}} type="number" name="price" placeholder="Price" value={newCar.price} onChange={handleChange} required />
        <select style={{marginBottom:'10px'}} name="condition" value={newCar.condition} onChange={handleChange} required>
          <option value="">Select Condition</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>
        <input style={{marginBottom:'10px'}} type="text" name="color" placeholder="Color" onChange={handleChange} required />
        <input style={{marginBottom:'10px'}} type="number" name="mileage" placeholder="Mileage" onChange={handleChange} required />
        <input style={{marginBottom:'10px'}} type="text" name="driveType" placeholder="Drive Type" onChange={handleChange} required />
        <input style={{marginBottom:'10px'}} type="text" name="engineType" placeholder="Engine Type" onChange={handleChange} required />
        <input style={{marginBottom:'10px'}} type="text" name="transmission" placeholder="Transmission" onChange={handleChange} required />
        {/* Image Upload */}
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} required />
        {newCar.image && <img src={newCar.image} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}

        <button type="submit" style={{ padding: '10px', backgroundColor: '#444', color: '#fff', cursor: 'pointer' }}>
          Add Car
        </button>
        <button
    onClick={() => {
        localStorage.removeItem('carListings'); // Clear saved cars
        window.location.reload(); // Reload page to reset state
    }}
    style={{
        padding: '10px',
        marginTop: '20px',
        backgroundColor: 'red',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }}
>
    Reset to Default Cars
</button>
      </form>

      <h3>Current Listings</h3>
      {carListings.map((car) => (
        <div key={car.id} style={{ backgroundColor: '#333', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
          <p>{car.make} {car.model} ({car.year}) - ${car.price}</p>
          {car.image && <img src={car.image} alt={car.model} style={{ width: '100px' }} />}
          <button onClick={() => removeCar(car.id)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', cursor: 'pointer' }}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
