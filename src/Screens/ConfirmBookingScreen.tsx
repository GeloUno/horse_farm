import React from 'react';
import ConfirmBooking from '../components/Booking/ConfirmBooking';
import TitleSection from '../Layout/TitleSection';

interface IConfirmBookingScreenProps {
  startDateAndTimeBooking: Date
  endDateAndTimeBooking: Date
}

const ConfirmBookingScreen: React.FC<IConfirmBookingScreenProps> = ({
  startDateAndTimeBooking,
  endDateAndTimeBooking,
}) => {
  return (
    <>
      <TitleSection title="Potwierdzenie rezerwacji" />
      <ConfirmBooking
        startDateAndTimeBooking={startDateAndTimeBooking}
        endDateAndTimeBooking={endDateAndTimeBooking} />
    </>
  );
};

export default ConfirmBookingScreen