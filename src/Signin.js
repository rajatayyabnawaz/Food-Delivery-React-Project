// Signin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';

const Signin = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Invalid credentials');
            }

            console.log('Login successfully');
            alert('Login successfully');
            onLogin();
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='main'>
            <div className="signin-container">
                <h2>Sign In</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit} autoComplete="off">
    <div className="form-group">
        <label>Email:</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="new-email" // Alternative autocomplete value
            name="new_user_email" // Non-standard name
        />
    </div>
    <div className="form-group">
        <label>Password:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password" // Alternative autocomplete value
            name="new_user_password" // Non-standard name
        />
    </div>
    <button type="submit">Sign In</button>
</form>

                <p>
                    Don't have an account?{' '}
                    <span className="link" onClick={() => navigate('/signup')}>
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Signin;
