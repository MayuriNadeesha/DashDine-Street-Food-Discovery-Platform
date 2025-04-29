import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { FaMapMarkerAlt, FaStar, FaSearch, FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './VendorSearchPage.css';

// Sample vendor data (replace with real API data later)
const sampleVendors = [
  {
    id: 1,
    name: "Spicy Noodle House",
    location: { lat: 6.9271, lng: 79.8612 },
    rating: 4.5,
    cuisine: "Chinese",
    openNow: true,
    address: "123 Food Street, Colombo",
    hours: "9:00 AM - 10:00 PM",
    specialties: ["Chili Noodles", "Dumplings"]
  },
  {
    id: 2,
    name: "Kottu King",
    location: { lat: 6.9200, lng: 79.8600 },
    rating: 4.2,
    cuisine: "Sri Lankan",
    openNow: true,
    address: "456 Kottu Lane, Colombo",
    hours: "10:00 AM - 11:00 PM",
    specialties: ["Cheese Kottu", "Chicken Kottu"]
  },
  {
    id: 3,
    name: "Fruit Juice Bar",
    location: { lat: 6.9250, lng: 79.8650 },
    rating: 4.0,
    cuisine: "Beverages",
    openNow: false,
    address: "789 Juice Road, Colombo",
    hours: "8:00 AM - 8:00 PM",
    specialties: ["Mango Juice", "Avocado Smoothie"]
  }
];

const VendorSearchPage = () => {
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVendors, setFilteredVendors] = useState(sampleVendors);
  const [activeFilters, setActiveFilters] = useState({
    openNow: false,
    rating: null,
    cuisine: null
  });

  // Map settings
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 6.9271,
    lng: 79.8612
  };

  // Filter vendors based on search and filters
  useEffect(() => {
    let results = sampleVendors;
    
    // Apply search filter
    if (searchQuery) {
      results = results.filter(vendor => 
        vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.specialties.some(item => 
          item.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    
    // Apply other filters
    if (activeFilters.openNow) {
      results = results.filter(vendor => vendor.openNow);
    }
    
    if (activeFilters.rating) {
      results = results.filter(vendor => vendor.rating >= activeFilters.rating);
    }
    
    if (activeFilters.cuisine) {
      results = results.filter(vendor => vendor.cuisine === activeFilters.cuisine);
    }
    
    setFilteredVendors(results);
  }, [searchQuery, activeFilters]);

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value === prev[filterType] ? null : value
    }));
  };

  return (
    <div className="vendor-search-container">
      <div className="search-header">
        <h1>Find Street Food Vendors</h1>
        <div className="search-controls">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search vendors, cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="filters">
            <button 
              className={`filter-btn ${activeFilters.openNow ? 'active' : ''}`}
              onClick={() => handleFilterChange('openNow', true)}
            >
              <FaFilter /> Open Now
            </button>
            
            <div className="rating-filter">
              <span>Rating: </span>
              {[4, 3, 2].map(rating => (
                <button
                  key={rating}
                  className={`rating-btn ${activeFilters.rating === rating ? 'active' : ''}`}
                  onClick={() => handleFilterChange('rating', rating)}
                >
                  {rating}+ <FaStar />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="map-and-list">
        <div className="map-container">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={14}
            >
              {filteredVendors.map(vendor => (
                <Marker
                  key={vendor.id}
                  position={vendor.location}
                  onClick={() => setSelectedVendor(vendor)}
                  icon={{
                    url: vendor.openNow 
                      ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                      : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                  }}
                />
              ))}

              {selectedVendor && (
                <InfoWindow
                  position={selectedVendor.location}
                  onCloseClick={() => setSelectedVendor(null)}
                >
                  <div className="info-window">
                    <h3>{selectedVendor.name}</h3>
                    <p>{selectedVendor.address}</p>
                    <div className="rating">
                      <FaStar /> {selectedVendor.rating}
                      <span className="status">
                        {selectedVendor.openNow ? 'Open Now' : 'Closed'}
                      </span>
                    </div>
                    <Link 
                      to={`/vendor-profile/${selectedVendor.id}`}
                      className="view-btn"
                    >
                      View Details
                    </Link>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="vendor-list-container">
          <h3>{filteredVendors.length} Vendors Found</h3>
          
          {filteredVendors.length === 0 ? (
            <div className="no-results">
              <p>No vendors match your search criteria.</p>
              <button onClick={() => {
                setSearchQuery('');
                setActiveFilters({
                  openNow: false,
                  rating: null,
                  cuisine: null
                });
              }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="vendor-list">
              {filteredVendors.map(vendor => (
                <div 
                  key={vendor.id} 
                  className={`vendor-card ${selectedVendor?.id === vendor.id ? 'active' : ''}`}
                  onClick={() => setSelectedVendor(vendor)}
                >
                  <div className="vendor-info">
                    <h4>{vendor.name}</h4>
                    <div className="vendor-meta">
                      <span className="cuisine">{vendor.cuisine}</span>
                      <span className="rating">
                        <FaStar /> {vendor.rating}
                      </span>
                      <span className={`status ${vendor.openNow ? 'open' : 'closed'}`}>
                        {vendor.openNow ? 'Open' : 'Closed'}
                      </span>
                    </div>
                    <p className="address">{vendor.address}</p>
                    <div className="specialties">
                      {vendor.specialties.slice(0, 2).map((item, index) => (
                        <span key={index} className="specialty-tag">{item}</span>
                      ))}
                      {vendor.specialties.length > 2 && (
                        <span className="more-tag">+{vendor.specialties.length - 2} more</span>
                      )}
                    </div>
                  </div>
                  <Link 
                    to={`/vendor-profile/${vendor.id}`}
                    className="view-btn"
                  >
                    View
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorSearchPage;