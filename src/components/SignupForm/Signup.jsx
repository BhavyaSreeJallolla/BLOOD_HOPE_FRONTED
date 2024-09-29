import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import styles from './Signup.module.css'; // Use CSS module

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://bloodhope-backend.onrender.com/api/auth/register', {
        name,
        email,
        password,
        role, // Include role in the request
      });
      console.log('User registered:', response.data);
      setName('');
      setEmail('');
      setPassword('');
      setRole('user'); // Reset role to default
      setError('');
      setSuccess('User registered successfully!');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong');
      setSuccess('');
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div
        className={styles.imageSide}
        style={{ 
          backgroundImage: `url(https://th.bing.com/th/id/OIP.R0GyXpEdkD3maaJ16BX_kAHaIU?w=1505&h=1690&rs=1&pid=ImgDetMain)`,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className={styles.formSide}>
        <h2>Sign Up</h2>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div>
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="admin">Admin</option>
              <option value="donor">donor</option>
              <option value="needy">needy</option>
              {/* Add more roles if needed */}
            </select>
          </div>
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
