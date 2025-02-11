# Car Listings App
A React-based web application for browsing, managing, and purchasing cars. Users can view car listings, filter by various attributes, add cars to their cart, apply for trade-ins, and administrators can add or remove cars dynamically.

## Features

# User Features
✔ Browse Cars – View a list of available cars with their make, model, year, price, and condition
✔ View Car Details – Click View Details to see additional specs like color, mileage, drive type, engine type, and transmission
✔ Search & Filter – Search cars by name, model, and apply filters for make, year, and price range
✔ Add to Cart – Users can add cars to their cart and manage them
✔ Apply for Trade-In – Users can initiate a trade-in request for any car
✔ Responsive Design – Works well on desktop and mobile devices

 # Admin Features
✔ Add New Cars – Admins can add new cars with all attributes via an admin panel
✔ Remove Cars – Admins can delete existing listings
✔ Persistent Data – Added cars are stored in localStorage for persistence
✔ Reset Listings – Admins can reset cars to the default mock data

###  Tech Stack
Frontend: React.js
State Management: React Hooks (useState, useEffect)
Routing: react-router-dom
Storage: LocalStorage (for cart and added cars)
Styling: Vanilla CSS

### Folder Structure

📦 CarListingsApp
 ┣ 📂 public
 ┃ ┣ 📜 index.html
 ┃ ┗ 📜 favicon.ico
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 AdminPanel.js     # Admin interface for adding/removing cars
 ┃ ┃ ┣ 📜 CarDetails.js     # Displays full car information
 ┃ ┃ ┣ 📜 CarList.js        # Displays car listings
 ┃ ┃ ┣ 📜 Cart.js           # Shopping cart functionality
 ┃ ┃ ┣ 📜 TradeInForm.js    # Trade-in form for users
 ┃ ┃ ┗ 📜 Auth.js           # Handles user authentication (role-based access)
 ┃ ┣ 📂 pics               # Images of cars and logos
 ┃ ┣ 📜 App.js             # Main application logic
 ┃ ┣ 📜 index.js           # Entry point of the app
 ┃ ┣ 📜 App.css            # Main styling file
 ┃ ┗ 📜 package.json       # Project dependencies


### Getting Started

# Clone the Repository
  git clone https://github.com/MoKaissi2000/CarListings.git
  cd CarListings

# Install Dependencies
  npm install
# Start theDevelopment Server
  npm start
