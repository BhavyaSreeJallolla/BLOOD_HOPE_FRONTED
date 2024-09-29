import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import styles from './LoginForm.module.css'; // Use CSS module

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // To show loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true while waiting for the response

        if (email && password) {
            try {
                // Make the POST request to your login API endpoint
                const response = await axios.post('https://bloodhope-backend.onrender.com/api/auth/login', {
                    email,
                    password,
                });

                // Handle successful login (store token in localStorage or handle it as needed)
                console.log('User logged in:', response.data);
                localStorage.setItem('token', response.data.token); // Save token in localStorage

                // Reset form fields and error message
                setEmail('');
                setPassword('');
                setError('');
                setLoading(false); // Set loading state to false
            } catch (err) {
                // Handle error (e.g., invalid credentials)
                setError('Invalid email or password');
                setLoading(false); // Set loading state to false
            }
        } else {
            setError('Please enter both email and password');
            setLoading(false);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.imageSide}></div>
            <div className={styles.formSide}>
                <h2>Login</h2>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    <p>
                        Don't have an account? <a href="/signup">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
