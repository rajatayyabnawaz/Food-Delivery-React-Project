import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Menu from './Menu';           
import Mobileapp from './Mobileapp'; 
import Contact from './Contact';      
import { Routes, Route, Navigate } from 'react-router-dom'; 
import Footer from './Footer';
import Signin from './Signin';
import Signup from './Signup'; 
import Profile from './Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {

    return localStorage.getItem('isLoggedIn') === 'true';
  }); 

  const handleLogin = () => {
    setIsLoggedIn(true); 
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
    localStorage.setItem('isLoggedIn', 'false'); 
  };

  
  useEffect(() => {
    return () => {
      localStorage.removeItem('isLoggedIn'); 
    };
  }, []);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} onLogin={handleLogin} /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/mobile-app' element={<Mobileapp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/signin" element={<Signin onLogin={handleLogin} />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route 
  path="/profile" 
  element={isLoggedIn ? <Profile username="User123" email="user@example.com" /> : <Navigate to="/signin" />} // Replace with actual user data
/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
