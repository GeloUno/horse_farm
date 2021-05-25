import React from 'react';
import PlanBookings from '../components/Booking/PlanBookings';
import TitleSection from '../Layout/TitleSection';

const PlanBookingsScreen = () => {
  return (
    <>
      <TitleSection
        title="Planer" />
      <PlanBookings />
    </>
  );
};

export default PlanBookingsScreen