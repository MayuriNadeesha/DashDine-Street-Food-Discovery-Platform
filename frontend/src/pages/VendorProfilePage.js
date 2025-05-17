import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaStar, FaHeart, FaMapMarkerAlt, FaClock, FaUtensils, FaArrowLeft } from 'react-icons/fa';
import './VendorProfilePage.css';

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const vendors = [
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
    ]
  }
];

function VendorProfilePage() {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const submittedDraft = useRef(false);

  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const userId = localStorage.getItem('userId');
  const isLoggedIn = token && username && userId;

  const vendor = vendors.find(v => v.id === parseInt(vendorId));

  useEffect(() => {
    if (vendor) {
      fetch(`http://localhost:5000/api/reviews/${vendor.id}`)
        .then(res => res.json())
        .then(data => {
          const filtered = data.filter(r => r.username && r.username !== 'undefined');
          setReviews(filtered);
        })
        .catch(err => console.error('Error fetching reviews:', err));
    }
  }, [vendor]);

  useEffect(() => {
    if (!submittedDraft.current && isLoggedIn) {
      const draft = localStorage.getItem('reviewDraft');
      if (draft) {
        const { vendorId: draftVendorId, rating: draftRating, comment: draftComment } = JSON.parse(draft);

        if (parseInt(vendorId) === draftVendorId && draftRating && draftComment) {
          submittedDraft.current = true;

          fetch('http://localhost:5000/api/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              vendorId: draftVendorId,
              userId,
              username,
              rating: draftRating,
              comment: draftComment
            })
          })
            .then(res => res.json())
            .then(newReview => {
              setReviews(prev => [newReview, ...prev]);
              setRating(0);
              setComment('');
              localStorage.removeItem('reviewDraft');
            })
            .catch(err => console.error('Error auto-submitting review:', err));
        } else {
          localStorage.removeItem('reviewDraft');
        }
      }
    }
  }, [vendorId, isLoggedIn, userId, username]);

  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      localStorage.setItem('reviewDraft', JSON.stringify({
        vendorId: vendor.id,
        rating,
        comment
      }));
      localStorage.setItem('redirectAfterLogin', `/vendor-profile/${vendorId}`);
      return navigate('/login');
    }

    if (!rating || !comment || !userId || !username) return;

    fetch('http://localhost:5000/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vendorId: vendor.id,
        userId,
        username,
        rating,
        comment
      })
    })
      .then(res => res.json())
      .then(newReview => {
        setReviews(prev => [newReview, ...prev]);
        setRating(0);
        setComment('');
        localStorage.removeItem('reviewDraft');
      })
      .catch(err => console.error('Error submitting review:', err));
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

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
      <div className="vendor-header">
        <h1>{vendor.name}</h1>
        <button
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FaHeart /> {isFavorite ? 'Saved to Favorites' : 'Add to Favorites'}
        </button>
      </div>

      <div className="vendor-info">
        <p><FaMapMarkerAlt /> <strong>Location:</strong> {vendor.location}</p>
        <p><FaClock /> <strong>Hours:</strong> {vendor.hours}</p>
        <p><FaUtensils /> <strong>Specialties:</strong> {vendor.specialties.join(', ')}</p>
      </div>

      <div className="map-section">
        <h2><FaMapMarkerAlt /> Location Map</h2>
        <div className="map-container" style={{ height: '400px', width: '100%' }}>
          <MapContainer center={vendor.coordinates} zoom={15} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            <Marker position={vendor.coordinates}>
              <Popup>{vendor.name}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

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

      <div className="reviews-section">
        <h2>Customer Reviews</h2>

        <form onSubmit={handleSubmitReview} className="review-form">
          <label>
            Rating:
            <select value={rating} onChange={e => setRating(Number(e.target.value))} required>
              <option value={0}>Select Rating</option>
              {[1, 2, 3, 4, 5].map(n => (
                <option key={n} value={n}>{n} Star{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </label>

          <label>
            Comment:
            <textarea value={comment} onChange={e => setComment(e.target.value)} required />
          </label>

          <button type="submit">
            {isLoggedIn ? 'Submit Review' : 'Login to Submit Review'}
          </button>
        </form>

        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < review.rating ? 'gold' : 'lightgray'} />
                ))}
              </div>
              <p><strong>{review.username}</strong>: {review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to leave one!</p>
        )}
      </div>

      {/* Footer with Back to Dashboard Button */}
      <footer className="vendor-footer">
        <button className="back-to-dashboard-btn" onClick={handleBack}>
          <FaArrowLeft /> Back to Dashboard
        </button>
      </footer>
    </div>
  );
}

export default VendorProfilePage;
