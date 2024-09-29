import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './BloodBanks.module.css'; // Optional CSS Module

const BloodBanks = () => {
  const [bloodBanksData, setBloodBanksData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBloodBanks = async () => {
      try {
        const response = await axios.post('https://bloodhope-backend.onrender.com/api/bloodbanks'); // Update the URL to your backend
        setBloodBanksData(response.data); // Assuming the response data is an array of blood banks
      } catch (err) {
        console.error(err);
        setError('Failed to fetch blood banks data');
      }
    };

    fetchBloodBanks();
  }, []);

  return (
    <div className="blood-banks-container">
      <h2>Blood Banks</h2>
      {error && <p>{error}</p>} {/* Display error if fetching fails */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {bloodBanksData.map(bank => (
            <tr key={bank.id}>
              <td>{bank.name}</td>
              <td>{bank.location}</td>
              <td>{bank.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodBanks;
