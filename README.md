# Car Listings App
A React-based web application for browsing, managing, and purchasing cars. Users can view car listings, filter by various attributes, add cars to their cart, apply for trade-ins, and administrators can add or remove cars dynamically.

# Features

## User Features
✔ Browse Cars – View a list of available cars with their make, model, year, price, and condition
✔ View Car Details – Click View Details to see additional specs like color, mileage, drive type, engine type, and transmission
✔ Search & Filter – Search cars by name, model, and apply filters for make, year, and price range
✔ Add to Cart – Users can add cars to their cart and manage them
✔ Apply for Trade-In – Users can initiate a trade-in request for any car
✔ Responsive Design – Works well on desktop and mobile devices

 ## Admin Features
✔ Add New Cars – Admins can add new cars with all attributes via an admin panel
✔ Remove Cars – Admins can delete existing listings
✔ Persistent Data – Added cars are stored in localStorage for persistence
✔ Reset Listings – Admins can reset cars to the default mock data

#  Tech Stack
Frontend: React.js
State Management: React Hooks (useState, useEffect)
Routing: react-router-dom
Storage: LocalStorage (for cart and added cars)
Styling: Vanilla CSS



## Folder Structure

![image](https://github.com/user-attachments/assets/bf206072-14cc-4093-b10c-7e5c9405fc52)



## Getting Started

### Clone the Repository
  git clone https://github.com/MoKaissi2000/CarListings.git
  cd CarListings

### Install Dependencies
  npm install
### Start theDevelopment Server
  npm start




  # Additional Details
   After installing the node modules and running the project via npm start, the user is prompted role selection, upon choosing Admin, the user will be taken to the Admin Panel page, where the user can view, add or delete existing listings on the page. There will be a "Reset to Default Cars" button that will restore all the original 9 cars in the mocklistings array in the App.js file. This is in case the user deleted the cars and would like to instantly restore them to fll up the site. Upon adding cars to the site, the Admin can choose to upload multiple images to the site. The first image uploaded will be the image displayed on the main listings page. Cars are stored in localStroage upon being registered to the site. When refreshing the page/pressing the logo and choosing user, the user will be presented with the main listings page where the user can search for cars, or use the filters tab in the side. Grid and flexbox were used to organize the listings and the top part of the page to accommodate for scrolling and window resizing. Upon pressing the View Details button, the user will be taken to the page of the specific car with more details and the rest of the images. This is where the user can apply for trade-in, add the car to the cart, or return to the original listings page. Pressing the Seez Logo on the top left of the page will take the user back to the first page to be prompted to select user or Admin again. There will be an array of mockListings that are there to fill up the site. The primary way of adding cars to the site is through the Admin Panel. The base 9 cars in the mocklistings array only have one picture each, but when adding a new car through the Admin Panel, adding multiple pictures will allow them all to appear after pressing Vew Details.
