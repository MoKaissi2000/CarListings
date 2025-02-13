import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const removeFromCart = (carId) => {
        const updatedCart = cart.filter(car => car.id !== carId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {cart.map(car => (
                        <li key={car.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px'}}>
                            <h3>{car.make} {car.model} ({car.year})</h3>
                            <img src={car.image} alt={car.model} style={{ maxWidth: '300px', borderRadius: '10px' }} />
                            <p>Price: ${car.price}</p>
                            <button
                                onClick={() => removeFromCart(car.id)}
                                style={{ padding: '10px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                            >
                                Remove from Cart
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <button
                onClick={() => navigate('/')}
                style={{ padding: '10px', marginTop: '20px', backgroundColor: '#444', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
                Back to Listings
            </button>
        </div>
    );
}

export default Cart;
