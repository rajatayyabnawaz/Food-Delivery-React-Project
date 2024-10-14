import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'; // Ensure you create this CSS file for styling

const Signup = () => {
    const [username, setUsername] = useState(''); // State for username
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // State to handle error messages
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }), // Include username in the request
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Signup failed');
            }

            alert('Account created successfully! Please sign in.'); // Show success message
            navigate('/signin'); // Redirect to sign-in page
        } catch (err) {
            setError(err.message); // Set error message to display
        }
    };

    return (
        <div className='main'>
            <div className="signup-container">
                <h2>Create an Account</h2>
                {error && <p className="error">{error}</p>} {/* Display error message */}
                <form onSubmit={handleSubmit} autoComplete="off"> {/* Add autoComplete off here */}
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="new-username" // Alternative autocomplete value
                            name="new_user_name" // Non-standard name
                        />
                    </div>
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
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            autoComplete="new-password" // Alternative autocomplete value
                            name="new_user_confirm_password" // Non-standard name
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>
                    Already have an account?{' '}
                    <span className="link" onClick={() => navigate('/signin')}>
                        Sign In
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Signup;
