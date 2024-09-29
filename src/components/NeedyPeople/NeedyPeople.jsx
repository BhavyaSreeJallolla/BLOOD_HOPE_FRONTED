import React from 'react';
import './NeedyPeople.module.css'; 

const needyPeopleData = [
  { id: 1, name: 'Alice Brown', bloodType: 'A+', contact: '111-222-3333' },
  { id: 2, name: 'Michael Green', bloodType: 'B-', contact: '444-555-6666' },
  { id: 3, name: 'Sarah White', bloodType: 'O+', contact: '777-888-9999' },
];

const NeedyPeople = () => {
  return (
    <div className="needy-people-container">
      <h2>People in Need of Blood</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Type</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {needyPeopleData.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.bloodType}</td>
              <td>{person.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NeedyPeople;
