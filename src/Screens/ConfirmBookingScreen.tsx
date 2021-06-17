import React from 'react';
import ConfirmBooking from '../components/Booking/ConfirmBooking';
import TitleSection from '../Layout/TitleSection';

const ConfirmBookingScreen = ({
  //@ts-ignore
  user,
  //@ts-ignore
  startDateAndTimeBooking,
  //@ts-ignore
  endDateAndTimeBooking,
}) => {
  return (
    <>
      <TitleSection title="Potwierdzenie rezerwacji" />
      <ConfirmBooking
        //@ts-ignore
        user={user}
        startDateAndTimeBooking={startDateAndTimeBooking}
        endDateAndTimeBooking={endDateAndTimeBooking} />
    </>
  );
};

export default ConfirmBookingScreen