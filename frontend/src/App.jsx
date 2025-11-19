import React from 'react';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;
