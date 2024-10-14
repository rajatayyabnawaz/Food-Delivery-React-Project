import React from 'react';
import './Mobileapp.css'; 

const Mobileapp = () => {
  return (
    <div className="mobile-app-container">
      <h1>Download Our Mobile App</h1>
      <p>
        Enjoy the convenience of ordering your favorite meals from anywhere. 
        Our mobile app provides a seamless experience, allowing you to browse 
        menus, place orders, and get exclusive offers right at your fingertips.
      </p>
      <div className="features">
        <h2>Features:</h2>
        <ul>
          <li>🚀 Fast and Easy Ordering</li>
          <li>📦 Track Your Orders</li>
          <li>🎉 Exclusive Discounts</li>
          <li>🔒 Secure Payments</li>
          <li>🌍 Available Anywhere</li>
        </ul>
      </div>
      <div className="app-buttons">
        <button className="download-btn">Download on the App Store</button>
        <button className="download-btn">Get it on Google Play</button>
      </div>
    </div>
  );
};

export default Mobileapp;
