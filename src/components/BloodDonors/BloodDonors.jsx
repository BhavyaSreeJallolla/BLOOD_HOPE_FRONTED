import React from 'react';
import './BloodDonors.module.css'; // Ensure your CSS Module is linked correctly

const bloodDonorsData = [
  { id: 1, name: 'John Doe', bloodType: 'A+', contact: '123-456-7890' },
  { id: 2, name: 'Jane Smith', bloodType: 'B-', contact: '987-654-3210' },
  { id: 3, name: 'Emily Johnson', bloodType: 'O+', contact: '555-123-4567' },
  
];

const BloodDonors = () => {
  return (
    <div className="blood-donors-container">
      <h2>Blood Donors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Type</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {bloodDonorsData.map(donor => (
            <tr key={donor.id}>
              <td>{donor.name}</td>
              <td>{donor.bloodType}</td>
              <td>{donor.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodDonors;
