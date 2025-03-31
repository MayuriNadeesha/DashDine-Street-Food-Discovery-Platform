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
      {/* Vendor Details Section */}
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

      {/* Menu Section */}
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

      {/* Reviews Section */}
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

export default VendorProfilePage;