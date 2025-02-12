import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import TradeInForm from './components/TradeInForm';
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel';
import Auth from './components/Auth';
import './App.css';

import logo from './pics/logo.PNG';
import cartlogo from './pics/cart.PNG';
import car1 from './pics/car1.PNG';
import car2 from './pics/car2.PNG';
import car3 from './pics/car3.PNG';
import car4 from './pics/car4.PNG';
import car5 from './pics/car5.PNG';
import car6 from './pics/car6.PNG';
import car7 from './pics/car7.PNG';
import car8 from './pics/car8.PNG';
import car9 from './pics/car9.PNG';

/*Static sample cars to fill up the page, but more can be added/removed using the admin page. Added cars are stored in LocalStorage */
const mockListings = [
  { 
    id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: 20000, condition: 'New', image: car1, 
    color: 'White', mileage: 5000, driveType: 'FWD', engineType: '1.8L I4', transmission: 'Automatic' 
  },
  { 
    id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 18000, condition: 'Used', image: car2, 
    color: 'Blue', mileage: 12000, driveType: 'FWD', engineType: '2.0L I4', transmission: 'CVT' 
  },
  { 
    id: 3, make: 'Ford', model: 'Focus', year: 2018, price: 15000, condition: 'Used', image: car3, 
    color: 'Red', mileage: 30000, driveType: 'AWD', engineType: '2.3L I4', transmission: 'Manual' 
  },
  { 
    id: 4, make: 'Toyota', model: 'Camry', year: 2016, price: 10000, condition: 'Used', image: car4, 
    color: 'Black', mileage: 45000, driveType: 'FWD', engineType: '2.5L I4', transmission: 'Automatic' 
  },
  { 
    id: 5, make: 'Toyota', model: 'Corolla', year: 2015, price: 19500, condition: 'Used', image: car5, 
    color: 'Gray', mileage: 25000, driveType: 'FWD', engineType: '1.8L I4', transmission: 'CVT' 
  },
  { 
    id: 6, make: 'Toyota', model: 'Corolla', year: 2010, price: 7000, condition: 'Used', image: car6, 
    color: 'Silver', mileage: 80000, driveType: 'FWD', engineType: '1.8L I4', transmission: 'Automatic' 
  },
  { 
    id: 7, make: 'Mitsubishi', model: 'Outlander', year: 2008, price: 2000, condition: 'Used', image: car7, 
    color: 'Green', mileage: 110000, driveType: 'AWD', engineType: '3.0L V6', transmission: 'Automatic' 
  },
  { 
    id: 8, make: 'Hyundai', model: 'Elantra', year: 2015, price: 17950, condition: 'Used', image: car8, 
    color: 'Gold', mileage: 65000, driveType: 'FWD', engineType: '2.0L I4', transmission: 'Automatic' 
  },
  { 
    id: 9, make: 'Hyundai', model: 'Tucson', year: 2020, price: 21000, condition: 'Used', image: car9, 
    color: 'Dark Blue', mileage: 15000, driveType: 'AWD', engineType: '2.4L I4', transmission: 'Automatic' 
  }
];


function App() {
  const [role, setRole] = useState(null);
  const [showCart, setShowCart] = useState(false);  // New state to toggle cart
  const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
  });
  const [carListings, setCarListings] = useState(() => {
    const savedCars = localStorage.getItem('carListings');
    return savedCars ? JSON.parse(savedCars) : mockListings;
  });
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState(null);
  const [showTradeInForm, setShowTradeInForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMake, setFilterMake] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');

  // Open Trade-in Form
  const handleTradeInClick = () => {
    setShowTradeInForm(true);
  };

  // Submit Trade-in Form
  const handleTradeInSubmit = (data) => {
    alert('Trade-in request submitted successfully!');
    setShowTradeInForm(false);
  };

  // Close Trade-in Form
  const handleTradeInCancel = () => {
    setShowTradeInForm(false);
  };

  // Back to Listings
  const handleBackToListings = () => {
    setSelectedCar(null);
    setShowTradeInForm(false);
  };

  // Filtered Listings for Users
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
// Function to add a new car
const addCar = (newCar) => {
  const newCarWithId = { ...newCar, id: carListings.length + 1 };
  const updatedCars = [...carListings, newCarWithId];

  setCarListings(updatedCars);
  localStorage.setItem('carListings', JSON.stringify(updatedCars));  // Save to localStorage
};

// Function to remove a car by ID
const removeCar = (id) => {
  const updatedCars = carListings.filter((car) => car.id !== id);

  setCarListings(updatedCars);
  localStorage.setItem('carListings', JSON.stringify(updatedCars));  // Save to localStorage
};
const addToCart = (car) => {
  if (cart.some((c) => c.id === car.id)) {
      alert("This car is already in your cart.");
      return;
  }
  const updatedCart = [...cart, car];
  setCart(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  alert("Car added to cart!");
};

const removeFromCart = (carId) => {
  const updatedCart = cart.filter(car => car.id !== carId);
  setCart(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

  if (!role) {
    return <Auth onLogin={setRole} />;
  }

  return (
    <div className="app" style={{ backgroundColor: '#2c2c2c', color: '#fff', minHeight: '100vh' }}>
      {/* Top Bar */}
      <header className="top-bar" style={{ display: 'flex', padding: '10px 20px', alignItems: 'center', backgroundColor: '#1c1c1c', borderBottom: '1px solid #444', width:'100%', zIndex:'1000' }}>
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: '1', padding: '10px', borderRadius: '5px', border: '1px solid #555', backgroundColor: '#333', color: '#fff', maxWidth: '1000px', width: '100%', minWidth: '50px', marginLeft: '900px' }}
        />
         <img src={cartlogo} alt="Cart" style={{ borderRadius:'20px', height: '40px', cursor: 'pointer', marginLeft:'10px' }}onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#444';
                e.target.style.color = '#fff';
              }} onClick={() => setShowCart(!showCart)} />
      </header>

      <div style={{ display: 'flex', height:'100vh'}}>
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

  {/* Year Range Filter */}
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

        {}
        <main style={{ flex: '1', padding: '20px' }}>
  {showTradeInForm ? (
    <TradeInForm onSubmit={handleTradeInSubmit} onCancel={handleTradeInCancel} />
  ) : selectedCar ? (
    <CarDetails car={selectedCar} onBack={handleBackToListings} onTradeIn={handleTradeInClick} addToCart={addToCart} />
  ) : role === 'admin' ? (
    <AdminPanel 
      carListings={carListings} 
      addCar={addCar}  
      removeCar={removeCar}  
    />
  ) : (
    <CarList cars={filteredListings} onSelectCar={setSelectedCar} />
  )}
</main>
 {/* Cart Sidebar */}
 {showCart && (
                    <aside style={{
                        position: 'fixed', right: 0, top: 0, width: '300px', height: '100%',
                        backgroundColor: '#1c1c1c', padding: '20px', boxShadow: '-2px 0px 10px rgba(0,0,0,0.2)'
                    }}>
                        <h2>Your Cart</h2>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <ul>
                                {cart.map(car => (
                                    <li key={car.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                                        <h3>{car.make} {car.model} ({car.year})</h3>
                                        <p>Price: ${car.price}</p>
                                        <button
                                            onClick={() => removeFromCart(car.id)}
                                            style={{ padding: '5px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '5px', cursor:'pointer' }}
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button
                            onClick={() => setShowCart(false)}
                            style={{ padding: '10px', marginTop: '20px', backgroundColor: '#444', color: '#fff', border: 'none', borderRadius: '5px', cursor:'pointer' }}
                            onMouseOver={(e) => {
                              e.target.style.backgroundColor = 'white';
                              e.target.style.color = 'black';
                            }}
                            onMouseOut={(e) => {
                              e.target.style.backgroundColor = '#444';
                              e.target.style.color = '#fff';
                            }}
                             
                        >
                            Close Cart
                        </button>
                    </aside>
                )}
      </div>
    </div>
  );
}

export default App;
