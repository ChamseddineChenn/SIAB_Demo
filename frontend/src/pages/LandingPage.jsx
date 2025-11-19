import React from 'react';
import Hero from '../components/Hero';
import KPI from '../components/KPI';
import ShipmentTrackerSimulator from '../components/ShipmentTrackerSimulator';
import ShipmentMethods from '../components/ShipmentMethods';
import ShipmentOptions from '../components/ShipmentOptions';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <ShipmentTrackerSimulator />
      <KPI />
      <ShipmentMethods />
      <ShipmentOptions />
    </div>
  );
};

export default LandingPage;
