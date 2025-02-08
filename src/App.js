import React, { useState } from 'react';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import TradeInForm from './components/TradeInForm';
import AdminPanel from './components/AdminPanel';
import Auth from './components/Auth';
import './App.css';
import logo from './pics/logo.PNG';

import car1 from './pics/car1.PNG';
import car2 from './pics/car2.PNG';
import car3 from './pics/car3.PNG';
import car4 from './pics/car4.PNG';
import car5 from './pics/car5.PNG';
import car6 from './pics/car6.PNG';
import car7 from './pics/car7.PNG';
import car8 from './pics/car8.PNG';
import car9 from './pics/car9.PNG';

const mockListings = [
  { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: 20000, condition: 'New', image: car1 },
  { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 18000, condition: 'Used', image: car2 },
  { id: 3, make: 'Ford', model: 'Focus', year: 2018, price: 15000, condition: 'Used', image: car3 },
  { id: 4, make: 'Toyota', model: 'Camry', year: 2016, price: 10000, condition: 'Used', image: car4 },
  { id: 5, make: 'Toyota', model: 'Corolla', year: 2015, price: 19500, condition: 'Used', image: car5 },
  { id: 6, make: 'Toyota', model: 'Corolla', year: 2010, price: 7000, condition: 'Used', image: car6 },
  { id: 7, make: 'Mitsubishi', model: 'Outlander', year: 2008, price: 2000, condition: 'Used', image: car7 },
  { id: 8, make: 'Hyundai', model: 'Elantra', year: 2015, price: 17950, condition: 'Used', image: car8 },
  { id: 9, make: 'Hyundai', model: 'Tucson', year: 2020, price: 21000, condition: 'Used', image: car9 },
];

function App() {
  const [role, setRole] = useState(null);
  const [carListings, setCarListings] = useState(() => {
    const savedCars = localStorage.getItem('carListings');
    return savedCars ? JSON.parse(savedCars) : mockListings;
  });
  const [selectedCar, setSelectedCar] = useState(null);
  const [showTradeInForm, setShowTradeInForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMake, setFilterMake] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');

  // ✅ Open Trade-in Form
  const handleTradeInClick = () => {
    setShowTradeInForm(true);
  };

  // ✅ Submit Trade-in Form
  const handleTradeInSubmit = (data) => {
    alert('Trade-in request submitted successfully!');
    setShowTradeInForm(false);
  };

  // ✅ Close Trade-in Form
  const handleTradeInCancel = () => {
    setShowTradeInForm(false);
  };

  // ✅ Back to Listings
  const handleBackToListings = () => {
    setSelectedCar(null);
    setShowTradeInForm(false);
  };

  // ✅ Filtered Listings for Users
  const filteredListings = carListings.filter((car) => {
    const matchesSearchTerm =
      car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMake = !filterMake || car.make === filterMake;
    const matchesPrice =
      (!minPrice || car.price >= Number(minPrice)) &&
      (!maxPrice || car.price <= Number(maxPrice));
    const matchesYear =
      (!minYear || car.year >= Number(minYear)) &&
      (!maxYear || car.year <= Number(maxYear));

    return matchesSearchTerm && matchesMake && matchesPrice && matchesYear;
  });
// ✅ Function to add a new car
const addCar = (newCar) => {
  const newCarWithId = { ...newCar, id: carListings.length + 1 };
  const updatedCars = [...carListings, newCarWithId];

  setCarListings(updatedCars);
  localStorage.setItem('carListings', JSON.stringify(updatedCars));  // ✅ Save to localStorage
};

// ✅ Function to remove a car by ID
const removeCar = (id) => {
  const updatedCars = carListings.filter((car) => car.id !== id);

  setCarListings(updatedCars);
  localStorage.setItem('carListings', JSON.stringify(updatedCars));  // ✅ Save to localStorage
};
  if (!role) {
    return <Auth onLogin={setRole} />;
  }

  return (
    <div className="app" style={{ backgroundColor: '#2c2c2c', color: '#fff', minHeight: '100vh' }}>
      {/* Top Bar */}
      <header className="top-bar" style={{ display: 'flex', padding: '10px 20px', alignItems: 'center', backgroundColor: '#1c1c1c', borderBottom: '1px solid #444' }}>
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: '1', padding: '10px', borderRadius: '5px', border: '1px solid #555', backgroundColor: '#333', color: '#fff', maxWidth: '1000px', width: '100%', minWidth: '50px', marginLeft: '900px' }}
        />
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{ width: '250px', padding: '20px', backgroundColor: '#1c1c1c', borderRight: '1px solid #444' }}>
          <h2>Filters</h2>
          <label>Car Make:</label>
          <select
            value={filterMake}
            onChange={(e) => setFilterMake(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: '#333', color: '#fff' }}
          >
            <option value="">All</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Hyundai">Hyundai</option>
          </select>
          <label>Price Range:</label>
  <input 
    type="number" 
    placeholder="Min Price" 
    value={minPrice} 
    onChange={(e) => setMinPrice(e.target.value)} 
    style={{ width: '100%', padding: '5px', marginBottom: '10px' }} 
  />
  <input 
    type="number" 
    placeholder="Max Price" 
    value={maxPrice} 
    onChange={(e) => setMaxPrice(e.target.value)} 
    style={{ width: '100%', padding: '5px' }} 
  />

  {/* ✅ Year Range Filter */}
  <label>Year Range:</label>
  <input 
    type="number" 
    placeholder="Min Year" 
    value={minYear} 
    onChange={(e) => setMinYear(e.target.value)} 
    style={{ width: '100%', padding: '5px', marginBottom: '10px' }} 
  />
  <input 
    type="number" 
    placeholder="Max Year" 
    value={maxYear} 
    onChange={(e) => setMaxYear(e.target.value)} 
    style={{ width: '100%', padding: '5px' }} 
  />
        </aside>

        {/* ✅ Fix: Trade-in now opens correctly */}
        <main style={{ flex: '1', padding: '20px' }}>
  {showTradeInForm ? (
    <TradeInForm onSubmit={handleTradeInSubmit} onCancel={handleTradeInCancel} />
  ) : selectedCar ? (
    <CarDetails car={selectedCar} onBack={handleBackToListings} onTradeIn={handleTradeInClick} />
  ) : role === 'admin' ? (
    <AdminPanel 
      carListings={carListings} 
      addCar={addCar}  // ✅ Fix: Pass addCar function 
      removeCar={removeCar}  // ✅ Fix: Pass removeCar function
    />
  ) : (
    <CarList cars={filteredListings} onSelectCar={setSelectedCar} />
  )}
</main>
      </div>
    </div>
  );
}

export default App;