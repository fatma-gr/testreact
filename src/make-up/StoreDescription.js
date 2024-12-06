import React from 'react';
import { Link } from 'react-router-dom';

export default function StoreDescription() {
  const containerStyle = {
    backgroundColor: '#ffffff', 
    borderRadius: '10px', 
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    // maxWidth: '900px', 
    margin: '0 auto', 
    marginBottom : '1rem',
    textAlign: 'center',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: '#333', 
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6', 
    color: '#555', 
    marginBottom: '30px',
  };

  const buttonStyle = {
    color: '#ffffff', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',    textDecoration: 'none', 
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Welcome to Our Store</h2>
      <p style={paragraphStyle}>
        Explore a wide range of beauty products, fragrances, groceries, and furniture, all available in one convenient location. 
        Whether you're looking to treat yourself to the latest perfumes, stock up on groceries, or find the perfect furniture for 
        your home, we have something for everyone. Enjoy top-quality items and great prices all in one place!
      </p>
      <Link to="/groceries" className='btn btn-danger' style={{ ...buttonStyle, ':hover': buttonHoverStyle }}>
        Shop Now
      </Link>
    </div>
  );
}