// Profile.js
import React, { useEffect, useState } from 'react';
import './Profile.css'; 
import mmmImage from './assetss/header_img.png'; 
import defaultProfile from './assetss/profile.jpg';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState({ username: '', email: '', imageUrl: '' });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/user', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUser({
                    username: response.data.username,
                    email: response.data.email,
                    imageUrl: response.data.imageUrl || defaultProfile 
                });
            } catch (err) {
                setError('Could not fetch user data. Please log in again.');
                console.error(err);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="profile-container">
            <div className="background-image">
                <img src={mmmImage} alt="Profile Background" className="background-img" />
            </div>
            <div className="content">
                <img src={user.imageUrl} alt="User Profile" className="profile-image" />
                <h1>{user.username || 'Loading...'}</h1>
                <p className="email">{user.email || 'Loading...'}</p>
                <p className="welcome-message">Welcome to our store!</p>
                <p className="welcome-message">We are glad to have you here.</p>
            </div>
        </div>
    );
};

export default Profile;
