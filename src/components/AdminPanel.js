import React, { useState } from 'react';

function AdminPanel({ carListings, addCar, removeCar }) {
  const [newCar, setNewCar] = useState({ make: '', model: '', year: '', price: '', condition: '', image: null });

  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  // ✅ Convert uploaded image to Base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setNewCar({ ...newCar, image: reader.result });
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCar.make || !newCar.model || !newCar.year || !newCar.price || !newCar.condition || !newCar.image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }
    addCar(newCar);
    setNewCar({ make: '', model: '', year: '', price: '', condition: '', image: null });
  };

  return (
    <div>
      <h2>Admin Panel - Manage Listings</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" name="make" placeholder="Make" value={newCar.make} onChange={handleChange} required />
        <input type="text" name="model" placeholder="Model" value={newCar.model} onChange={handleChange} required />
        <input type="number" name="year" placeholder="Year" value={newCar.year} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={newCar.price} onChange={handleChange} required />
        <select name="condition" value={newCar.condition} onChange={handleChange} required>
          <option value="">Select Condition</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>

        {/* ✅ Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageUpload} required />
        {newCar.image && <img src={newCar.image} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}

        <button type="submit" style={{ padding: '10px', backgroundColor: '#444', color: '#fff', cursor: 'pointer' }}>
          Add Car
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