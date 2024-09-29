import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import here
import HomePage from './components/HomePage/HomePage';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/Signup'; 
import NeedyPeople from './components/NeedyPeople/NeedyPeople';
import BloodDonors from './components/BloodDonors/BloodDonors';
import BloodBanks from './components/BloodBanks/BloodBanks';
import ContactForm from './components/ContactForm/ContactForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path ="/HomePage" element={<HomePage />} />
        <Route path ="/AboutMe" element={<AboutMe/>} /> 
        <Route path="/login" element={<LoginForm />} /> {/* Updated path for consistency */}
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/needy-people" element={<NeedyPeople />} />
        <Route path="/blood-donors" element={<BloodDonors />} />
        <Route path="/blood-banks" element={<BloodBanks />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
