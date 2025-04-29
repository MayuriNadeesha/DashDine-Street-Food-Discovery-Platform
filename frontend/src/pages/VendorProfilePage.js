/*

import React, { useState } from 'react';
import { FaStar, FaHeart, FaMapMarkerAlt, FaClock, FaUtensils } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import './VendorProfilePage.css'; // Create this file for styling

 // Sample vendor data
 const vendors = [
  {
    id: 1,
    name: 'Street Food Vendor 1',
    location: 'Colombo, Sri Lanka',
    hours: '8:00 AM - 10:00 PM',
    specialties: ['Kottu Roti', 'Hoppers', 'String Hoppers'],
    menu: [
      { name: 'Kottu Roti', price: 'LKR 500', origin: 'Sri Lanka', calories: '450 kcal' },
      { name: 'Hoppers', price: 'LKR 300', origin: 'Sri Lanka', calories: '300 kcal' },
      { name: 'String Hoppers', price: 'LKR 400', origin: 'Sri Lanka', calories: '350 kcal' },
    ],
    reviews: [
      { user: 'User 1', rating: 5, comment: 'Amazing food and great service!' },
      { user: 'User 2', rating: 4, comment: 'Loved the Kottu Roti!' },
      { user: 'User 3', rating: 3, comment: 'Good, but a bit pricey.' },
    ],
  },
  {
    id: 2,
    name: 'Street Food Vendor 2',
    location: 'Kandy, Sri Lanka',
    hours: '9:00 AM - 9:00 PM',
    specialties: ['Egg Roti', 'Fish Buns', 'Watalappan'],
    menu: [
      { name: 'Egg Roti', price: 'LKR 400', origin: 'Sri Lanka', calories: '400 kcal' },
      { name: 'Fish Buns', price: 'LKR 200', origin: 'Sri Lanka', calories: '250 kcal' },
      { name: 'Watalappan', price: 'LKR 350', origin: 'Sri Lanka', calories: '300 kcal' },
    ],
    reviews: [
      { user: 'User 4', rating: 4, comment: 'Delicious Egg Roti!' },
      { user: 'User 5', rating: 5, comment: 'The Fish Buns are a must-try!' },
    ],
  },
  {
    id: 3,
    name: 'Street Food Vendor 3',
    location: 'Galle, Sri Lanka',
    hours: '10:00 AM - 8:00 PM',
    specialties: ['Lamprais', 'Kiri Bath', 'Pol Roti'],
    menu: [
      { name: 'Lamprais', price: 'LKR 600', origin: 'Sri Lanka', calories: '500 kcal' },
      { name: 'Kiri Bath', price: 'LKR 250', origin: 'Sri Lanka', calories: '300 kcal' },
      { name: 'Pol Roti', price: 'LKR 300', origin: 'Sri Lanka', calories: '350 kcal' },
    ],
    reviews: [
      { user: 'User 6', rating: 5, comment: 'Authentic Lamprais!' },
      { user: 'User 7', rating: 4, comment: 'Pol Roti is amazing!' },
    ],
  },
  {
    id: 4,
    name: 'Street Food Vendor 4',
    location: 'Negombo, Sri Lanka',
    hours: '7:00 AM - 11:00 PM',
    specialties: ['Pittu', 'Kavum', 'Achcharu'],
    menu: [
      { name: 'Pittu', price: 'LKR 300', origin: 'Sri Lanka', calories: '350 kcal' },
      { name: 'Kavum', price: 'LKR 150', origin: 'Sri Lanka', calories: '200 kcal' },
      { name: 'Achcharu', price: 'LKR 200', origin: 'Sri Lanka', calories: '100 kcal' },
    ],
    reviews: [
      { user: 'User 8', rating: 4, comment: 'Pittu is a must-try!' },
      { user: 'User 9', rating: 3, comment: 'Achcharu is a bit spicy.' },
    ],
  },
  {
    id: 5,
    name: 'Street Food Vendor 5',
    location: 'Jaffna, Sri Lanka',
    hours: '8:00 AM - 9:00 PM',
    specialties: ['Jaffna Crab Curry', 'Vadai', 'Kool'],
    menu: [
      { name: 'Jaffna Crab Curry', price: 'LKR 800', origin: 'Sri Lanka', calories: '600 kcal' },
      { name: 'Vadai', price: 'LKR 100', origin: 'Sri Lanka', calories: '150 kcal' },
      { name: 'Kool', price: 'LKR 400', origin: 'Sri Lanka', calories: '300 kcal' },
    ],
    reviews: [
      { user: 'User 10', rating: 5, comment: 'Best Crab Curry ever!' },
      { user: 'User 11', rating: 4, comment: 'Vadai is crispy and delicious.' },
    ],
  },
  {
    id: 6,
    name: 'Colombo Kottu King',
    location: 'Colombo, Sri Lanka',
    hours: '10:00 AM - 11:00 PM',
    specialties: ['Chicken Kottu', 'Cheese Kottu', 'Seafood Kottu'],
    menu: [
      { name: 'Chicken Kottu', price: 'LKR 600', origin: 'Sri Lanka', calories: '750 kcal' },
      { name: 'Cheese Kottu', price: 'LKR 700', origin: 'Sri Lanka', calories: '850 kcal' },
      { name: 'Seafood Kottu', price: 'LKR 900', origin: 'Sri Lanka', calories: '800 kcal' }
    ],
    reviews: [
      { user: 'Foodie 21', rating: 5, comment: 'The rhythmic kottu preparation is amazing!' },
      { user: 'Traveler 33', rating: 4, comment: 'Best kottu I had in Colombo' }
    ]
  },
  {
    id: 7,
    name: 'Galle Face Short Eats',
    location: 'Galle Face Green, Colombo',
    hours: '3:00 PM - 10:00 PM',
    specialties: ['Fish Buns', 'Chicken Patties', 'Veggie Rolls'],
    menu: [
      { name: 'Fish Bun', price: 'LKR 120', origin: 'Sri Lanka', calories: '250 kcal' },
      { name: 'Chicken Patty', price: 'LKR 150', origin: 'Sri Lanka', calories: '300 kcal' },
      { name: 'Veggie Roll', price: 'LKR 100', origin: 'Sri Lanka', calories: '200 kcal' }
    ],
    reviews: [
      { user: 'Local 45', rating: 5, comment: 'Perfect sunset snacks at Galle Face' },
      { user: 'Tourist 12', rating: 4, comment: 'Great flavors by the ocean' }
    ]
  },
  {
    id: 8,
    name: 'Kandy Tea & Bun',
    location: 'Kandy, Sri Lanka',
    hours: '6:00 AM - 6:00 PM',
    specialties: ['Tea Bun', 'Kottan', 'Milk Rice'],
    menu: [
      { name: 'Tea Bun', price: 'LKR 80', origin: 'Sri Lanka', calories: '180 kcal' },
      { name: 'Kottan', price: 'LKR 60', origin: 'Sri Lanka', calories: '120 kcal' },
      { name: 'Milk Rice', price: 'LKR 150', origin: 'Sri Lanka', calories: '300 kcal' }
    ],
    reviews: [
      { user: 'TeaLover 7', rating: 5, comment: 'Perfect with a cup of Ceylon tea' },
      { user: 'MorningPerson', rating: 4, comment: 'Best breakfast in Kandy' }
    ]
  },
  {
    id: 9,
    name: 'Negombo Seafood Hut',
    location: 'Negombo Beach',
    hours: '11:00 AM - 9:00 PM',
    specialties: ['Grilled Lobster', 'Prawn Curry', 'Cuttlefish Fry'],
    menu: [
      { name: 'Grilled Lobster', price: 'LKR 2500', origin: 'Sri Lanka', calories: '900 kcal' },
      { name: 'Prawn Curry', price: 'LKR 1200', origin: 'Sri Lanka', calories: '700 kcal' },
      { name: 'Cuttlefish Fry', price: 'LKR 800', origin: 'Sri Lanka', calories: '500 kcal' }
    ],
    reviews: [
      { user: 'SeafoodFan', rating: 5, comment: 'Fresh catch right from the ocean' },
      { user: 'BeachGoer', rating: 4, comment: 'Amazing seafood with ocean view' }
    ]
  },
  {
    id: 10,
    name: 'Nuwara Eliya Strawberry Stop',
    location: 'Nuwara Eliya',
    hours: '8:00 AM - 6:00 PM',
    specialties: ['Strawberry Juice', 'Strawberry Jam', 'Strawberry Shortcake'],
    menu: [
      { name: 'Strawberry Juice', price: 'LKR 400', origin: 'Sri Lanka', calories: '150 kcal' },
      { name: 'Strawberry Jam', price: 'LKR 500', origin: 'Sri Lanka', calories: '1200 kcal/jar' },
      { name: 'Strawberry Shortcake', price: 'LKR 600', origin: 'Sri Lanka', calories: '450 kcal' }
    ],
    reviews: [
      { user: 'BerryLover', rating: 5, comment: 'Fresh from the hills!' },
      { user: 'TeaPlanter', rating: 4, comment: 'Perfect sweet treat after touring tea estates' }
    ]
  },
  {
    id: 11,
    name: 'Trinco Crab House',
    location: 'Trincomalee',
    hours: '10:00 AM - 8:00 PM',
    specialties: ['Chilli Crab', 'Garlic Crab', 'Crab Soup'],
    menu: [
      { name: 'Chilli Crab', price: 'LKR 1500', origin: 'Sri Lanka', calories: '950 kcal' },
      { name: 'Garlic Crab', price: 'LKR 1600', origin: 'Sri Lanka', calories: '900 kcal' },
      { name: 'Crab Soup', price: 'LKR 500', origin: 'Sri Lanka', calories: '350 kcal' }
    ],
    reviews: [
      { user: 'SeafoodMaster', rating: 5, comment: 'The crabs here are massive!' },
      { user: 'CoastalExplorer', rating: 4, comment: 'Great flavors by the harbor' }
    ]
  },
  {
    id: 12,
    name: 'Anuradhapura Traditional Foods',
    location: 'Anuradhapura',
    hours: '7:00 AM - 7:00 PM',
    specialties: ['Kurakkan Roti', 'Pol Sambol', 'Gotu Kola Salad'],
    menu: [
      { name: 'Kurakkan Roti', price: 'LKR 200', origin: 'Sri Lanka', calories: '300 kcal' },
      { name: 'Pol Sambol', price: 'LKR 150', origin: 'Sri Lanka', calories: '200 kcal' },
      { name: 'Gotu Kola Salad', price: 'LKR 250', origin: 'Sri Lanka', calories: '150 kcal' }
    ],
    reviews: [
      { user: 'CultureSeeker', rating: 5, comment: 'Authentic ancient recipes' },
      { user: 'HealthNut', rating: 4, comment: 'Nutritious traditional meals' }
    ]
  }
];


function VendorProfilePage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { vendorId } = useParams(); 

    // Find the vendor by ID
    const vendor = vendors.find((v) => v.id === parseInt(vendorId));

    if (!vendor) {
      return <div>Vendor not found!</div>;
    }

 
  // Toggle favorite status
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="vendor-profile-page">
      {/* Vendor Details Section */
    
    /*}  
      <div className="vendor-details">
        <h1>{vendor.name}</h1>
        <div className="vendor-info">
          <p><FaMapMarkerAlt /> {vendor.location}</p>
          <p><FaClock /> {vendor.hours}</p>
          <p><FaUtensils /> Specialties: {vendor.specialties.join(', ')}</p>
        </div>
        <button className={`favorite-button ${isFavorite ? 'favorited' : ''}`} onClick={toggleFavorite}>
          <FaHeart /> {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>

      {/* Menu Section */
    
    /*}
      <div className="menu-section">
        <h2>Menu</h2>
        <div className="menu-items">
          {vendor.menu.map((item, index) => (
            <div key={index} className="menu-item">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Origin: {item.origin}</p>
              <p>Calories: {item.calories}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */
    
    /*}
      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-list">
          {vendor.reviews.map((review, index) => (
            <div key={index} className="review">
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < review.rating ? 'star-filled' : 'star-empty'} />
                ))}
              </div>
              <p className="review-comment">{review.comment}</p>
              <p className="review-user">- {review.user}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VendorProfilePage;*/



import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaStar, FaHeart, FaMapMarkerAlt, FaClock, FaUtensils } from 'react-icons/fa';
import './VendorProfilePage.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const vendors = [
  {
    id: 1,
    name: "Colombo Kottu King",
    location: "Galle Road, Colombo 03",
    coordinates: [6.9271, 79.8612],
    hours: "10:00 AM - 11:00 PM",
    specialties: ["Chicken Kottu", "Cheese Kottu", "Seafood Kottu"],
    menu: [
      { name: "Chicken Kottu", price: "LKR 600", origin: "Sri Lanka", calories: "750 kcal" },
      { name: "Cheese Kottu", price: "LKR 700", origin: "Sri Lanka", calories: "850 kcal" },
      { name: "Seafood Kottu", price: "LKR 900", origin: "Sri Lanka", calories: "800 kcal" }
    ],
    reviews: [
      { user: "Foodie 21", rating: 5, comment: "The rhythmic kottu preparation is amazing!" },
      { user: "Traveler 33", rating: 4, comment: "Best kottu I had in Colombo" }
    ]
  },
  {
    id: 2,
    name: "Galle Face Short Eats",
    location: "Galle Face Green, Colombo",
    coordinates: [6.9285, 79.8417],
    hours: "3:00 PM - 10:00 PM",
    specialties: ["Fish Buns", "Chicken Patties", "Veggie Rolls"],
    menu: [
      { name: "Fish Bun", price: "LKR 120", origin: "Sri Lanka", calories: "250 kcal" },
      { name: "Chicken Patty", price: "LKR 150", origin: "Sri Lanka", calories: "300 kcal" },
      { name: "Veggie Roll", price: "LKR 100", origin: "Sri Lanka", calories: "200 kcal" }
    ],
    reviews: [
      { user: "Local 45", rating: 5, comment: "Perfect sunset snacks at Galle Face" },
      { user: "Tourist 12", rating: 4, comment: "Great flavors by the ocean" }
    ]
  },
  {
    id: 3,
    name: "Kandy Tea & Bun",
    location: "Dalada Veediya, Kandy",
    coordinates: [7.2906, 80.6337],
    hours: "6:00 AM - 6:00 PM",
    specialties: ["Tea Bun", "Kottan", "Milk Rice"],
    menu: [
      { name: "Tea Bun", price: "LKR 80", origin: "Sri Lanka", calories: "180 kcal" },
      { name: "Kottan", price: "LKR 60", origin: "Sri Lanka", calories: "120 kcal" },
      { name: "Milk Rice", price: "LKR 150", origin: "Sri Lanka", calories: "300 kcal" }
    ],
    reviews: [
      { user: "TeaLover 7", rating: 5, comment: "Perfect with a cup of Ceylon tea" },
      { user: "MorningPerson", rating: 4, comment: "Best breakfast in Kandy" }
    ]
  },
  {
    id: 4,
    name: "Negombo Seafood Hut",
    location: "Negombo Beach Road",
    coordinates: [7.2088, 79.8357],
    hours: "11:00 AM - 9:00 PM",
    specialties: ["Grilled Lobster", "Prawn Curry", "Cuttlefish Fry"],
    menu: [
      { name: "Grilled Lobster", price: "LKR 2500", origin: "Sri Lanka", calories: "900 kcal" },
      { name: "Prawn Curry", price: "LKR 1200", origin: "Sri Lanka", calories: "700 kcal" },
      { name: "Cuttlefish Fry", price: "LKR 800", origin: "Sri Lanka", calories: "500 kcal" }
    ],
    reviews: [
      { user: "SeafoodFan", rating: 5, comment: "Fresh catch right from the ocean" },
      { user: "BeachGoer", rating: 4, comment: "Amazing seafood with ocean view" }
    ]
  },
  {
    id: 5,
    name: "Jaffna Spicy Crab",
    location: "Hospital Road, Jaffna",
    coordinates: [9.6615, 80.0255],
    hours: "10:00 AM - 8:00 PM",
    specialties: ["Jaffna Crab Curry", "Vadai", "Kool"],
    menu: [
      { name: "Jaffna Crab Curry", price: "LKR 1500", origin: "Sri Lanka", calories: "950 kcal" },
      { name: "Vadai", price: "LKR 50", origin: "Sri Lanka", calories: "150 kcal" },
      { name: "Kool", price: "LKR 400", origin: "Sri Lanka", calories: "350 kcal" }
    ],
    reviews: [
      { user: "SpicyLover", rating: 5, comment: "Authentic Jaffna flavors!" },
      { user: "NorthVisitor", rating: 4, comment: "The crab curry is fire!" }
    ]
  },
  {
    id: 6,
    name: "Galle Fort Hoppers",
    location: "Church Street, Galle Fort",
    coordinates: [6.0257, 80.2169],
    hours: "7:00 AM - 8:00 PM",
    specialties: ["Egg Hoppers", "String Hoppers", "Pani Pol"],
    menu: [
      { name: "Egg Hopper", price: "LKR 100", origin: "Sri Lanka", calories: "200 kcal" },
      { name: "String Hoppers (5)", price: "LKR 150", origin: "Sri Lanka", calories: "300 kcal" },
      { name: "Pani Pol Roti", price: "LKR 200", origin: "Sri Lanka", calories: "400 kcal" }
    ],
    reviews: [
      { user: "FortExplorer", rating: 5, comment: "Best hoppers in Galle Fort" },
      { user: "BreakfastGuru", rating: 4, comment: "Perfect morning meal" }
    ]
  },
  {
    id: 7,
    name: "Trinco Crab House",
    location: "Beach Road, Trincomalee",
    coordinates: [8.5692, 81.2329],
    hours: "10:00 AM - 8:00 PM",
    specialties: ["Chilli Crab", "Garlic Crab", "Crab Soup"],
    menu: [
      { name: "Chilli Crab", price: "LKR 1800", origin: "Sri Lanka", calories: "950 kcal" },
      { name: "Garlic Crab", price: "LKR 1700", origin: "Sri Lanka", calories: "900 kcal" },
      { name: "Crab Soup", price: "LKR 500", origin: "Sri Lanka", calories: "350 kcal" }
    ],
    reviews: [
      { user: "SeafoodMaster", rating: 5, comment: "The crabs here are massive!" },
      { user: "CoastalExplorer", rating: 4, comment: "Great flavors by the harbor" }
    ]
  },
  {
    id: 8,
    name: "Anuradhapura Traditional Foods",
    location: "Old Town Market, Anuradhapura",
    coordinates: [8.3114, 80.4037],
    hours: "7:00 AM - 7:00 PM",
    specialties: ["Kurakkan Roti", "Pol Sambol", "Gotu Kola Salad"],
    menu: [
      { name: "Kurakkan Roti", price: "LKR 200", origin: "Sri Lanka", calories: "300 kcal" },
      { name: "Pol Sambol", price: "LKR 150", origin: "Sri Lanka", calories: "200 kcal" },
      { name: "Gotu Kola Salad", price: "LKR 250", origin: "Sri Lanka", calories: "150 kcal" }
    ],
    reviews: [
      { user: "CultureSeeker", rating: 5, comment: "Authentic ancient recipes" },
      { user: "HealthNut", rating: 4, comment: "Nutritious traditional meals" }
    ]
  },
  {
    id: 9,
    name: "Nuwara Eliya Strawberry Stop",
    location: "Horton Plains Road, Nuwara Eliya",
    coordinates: [6.9708, 80.7829],
    hours: "8:00 AM - 6:00 PM",
    specialties: ["Strawberry Juice", "Strawberry Jam", "Strawberry Shortcake"],
    menu: [
      { name: "Strawberry Juice", price: "LKR 400", origin: "Sri Lanka", calories: "150 kcal" },
      { name: "Strawberry Jam Jar", price: "LKR 500", origin: "Sri Lanka", calories: "1200 kcal" },
      { name: "Strawberry Shortcake", price: "LKR 600", origin: "Sri Lanka", calories: "450 kcal" }
    ],
    reviews: [
      { user: "BerryLover", rating: 5, comment: "Fresh from the hills!" },
      { user: "TeaPlanter", rating: 4, comment: "Perfect sweet treat" }
    ]
  },
  {
    id: 10,
    name: "Batticaloa Spicy Bites",
    location: "Trinco Road, Batticaloa",
    coordinates: [7.7167, 81.7000],
    hours: "9:00 AM - 9:00 PM",
    specialties: ["Batti Kottu", "Mutton Rolls", "Milk Toffee"],
    menu: [
      { name: "Batti Special Kottu", price: "LKR 650", origin: "Sri Lanka", calories: "800 kcal" },
      { name: "Mutton Roll", price: "LKR 250", origin: "Sri Lanka", calories: "350 kcal" },
      { name: "Milk Toffee (100g)", price: "LKR 300", origin: "Sri Lanka", calories: "500 kcal" }
    ],
    reviews: [
      { user: "EastCoastFoodie", rating: 5, comment: "Unique Eastern flavors" },
      { user: "SpiceHunter", rating: 4, comment: "Perfect level of heat" }
    ]
  },
  {
    id: 11,
    name: "Matara Beach Grill",
    location: "Polhena Beach, Matara",
    coordinates: [5.9483, 80.5353],
    hours: "4:00 PM - 11:00 PM",
    specialties: ["Grilled Seer Fish", "Prawn Skewers", "Garlic Butter Crab"],
    menu: [
      { name: "Grilled Seer Fish", price: "LKR 1200", origin: "Sri Lanka", calories: "600 kcal" },
      { name: "Prawn Skewers (3)", price: "LKR 900", origin: "Sri Lanka", calories: "450 kcal" },
      { name: "Garlic Butter Crab", price: "LKR 1500", origin: "Sri Lanka", calories: "700 kcal" }
    ],
    reviews: [
      { user: "BeachLover", rating: 5, comment: "Fresh seafood by the waves" },
      { user: "SunsetViewer", rating: 4, comment: "Perfect dinner with ocean view" }
    ]
  },
  {
    id: 12,
    name: "Dambulla Fruit Stalls",
    location: "Kandy Road, Dambulla",
    coordinates: [7.8562, 80.6514],
    hours: "6:00 AM - 8:00 PM",
    specialties: ["Wood Apple Juice", "Mango Slice", "King Coconut"],
    menu: [
      { name: "Wood Apple Juice", price: "LKR 200", origin: "Sri Lanka", calories: "120 kcal" },
      { name: "Fresh Mango Slice", price: "LKR 150", origin: "Sri Lanka", calories: "100 kcal" },
      { name: "King Coconut", price: "LKR 100", origin: "Sri Lanka", calories: "80 kcal" }
    ],
    reviews: [
      { user: "TempleVisitor", rating: 5, comment: "Refreshing after temple tours" },
      { user: "FruitEnthusiast", rating: 4, comment: "Best tropical fruits in town" }
    ]
  }
];

function VendorProfilePage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { vendorId } = useParams();
  
  // Dynamic vendor loading
  const vendor = vendors.find(v => v.id === parseInt(vendorId));

  if (!vendor) {
    return (
      <div className="vendor-profile-page">
        <div className="not-found-message">
          <h2>Vendor not found!</h2>
          <p>We couldn't find a vendor with ID: {vendorId}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="vendor-profile-page">
      {/* Vendor Header */}
      <div className="vendor-header">
        <h1>{vendor.name}</h1>
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FaHeart /> {isFavorite ? 'Saved to Favorites' : 'Add to Favorites'}
        </button>
      </div>

      {/* Vendor Info */}
      <div className="vendor-info">
        <p><FaMapMarkerAlt /> <strong>Location:</strong> {vendor.location}</p>
        <p><FaClock /> <strong>Hours:</strong> {vendor.hours}</p>
        <p><FaUtensils /> <strong>Specialties:</strong> {vendor.specialties.join(', ')}</p>
      </div>

      {/* Leaflet Map */}
      <div className="map-section">
        <h2><FaMapMarkerAlt /> Location Map</h2>
        <div className="map-container">
          <MapContainer 
            center={vendor.coordinates} 
            zoom={15}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={vendor.coordinates}>
              <Popup>{vendor.name}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Menu Section */}
      <div className="menu-section">
        <h2>Menu</h2>
        <div className="menu-items">
          {vendor.menu.map((item, index) => (
            <div key={index} className="menu-item">
              <h3>{item.name}</h3>
              <p><strong>Price:</strong> {item.price}</p>
              <p><strong>Origin:</strong> {item.origin}</p>
              <p><strong>Calories:</strong> {item.calories}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        {vendor.reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < review.rating ? '#ffc107' : '#e4e5e9'} />
              ))}
            </div>
            <p className="comment">{review.comment}</p>
            <p className="user">- {review.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VendorProfilePage;